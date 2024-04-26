import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpScheme } from "@/modules/auth/constants/SchemeOTP.tsx";
import type { OtpScheme } from "@/modules/auth/constants/SchemeOTP.tsx";
import { usePostAuthOtpMutation } from "@/utils/api";
import { useStore } from "@/utils/store";

export const useOTPForm = () => {
  const setIsOtpSend = useStore(state => state.setIsOtpSend);
  const setRetryDelay = useStore(state => state.setRetryDelay);

  const otpForm = useForm<OtpScheme>({
    defaultValues: {
      phone: "",
    },
    mode: "onBlur",
    resolver: zodResolver(otpScheme),
  });

  const postAuthOtpMutation = usePostAuthOtpMutation();

  const onSubmit = otpForm.handleSubmit(async values => {
    const res = await postAuthOtpMutation.mutateAsync({ params: values });
    setIsOtpSend(true);
    setRetryDelay(res.data.retryDelay);
    console.log("RES", res);
  });
  return {
    form: otpForm,
    state: { isLoading: otpForm.formState.isSubmitting },
    functions: { onSubmit },
  };
};
