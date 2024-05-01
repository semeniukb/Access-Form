import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSessionStore } from "@/utils/store";
import { profileScheme, ProfileScheme } from "@/modules/profile/constants/SchemeProfile.tsx";
import { usePatchUserProfileMutation } from "@/utils/api";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants";
import { User } from "../../../../@types/api";

export const useView = () => {
  const user = useSessionStore(state => state.user);

  const profileForm = useForm<ProfileScheme>({
    mode: "onChange",
    defaultValues: user,
    resolver: zodResolver(profileScheme),
  });

  const patchUserProfileMutation = usePatchUserProfileMutation();

  const onSubmit = profileForm.handleSubmit(async values => {
    await patchUserProfileMutation.mutateAsync({
      params: { phone: user.phone, profile: values },
    });
  });

  const onReset = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    useSessionStore.setState({ isLoggedIn: false, user: {} as User });
  };

  return {
    form: profileForm,
    state: { isLoading: profileForm.formState.isSubmitting, phone: user.phone },
    functions: { onSubmit, onReset },
  };
};
