import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePostAuthOtpMutation, usePostUsersSinginMutation } from "@/utils/api";
import { OtpScheme, otpScheme } from "@/modules/auth/constants/SchemeOTP.tsx";
import { PhoneScheme, phoneScheme } from "@/modules/auth/constants/SchemePhone.tsx";
import { useSessionStore } from "@/utils/store";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants";

export const useView = () => {
  const [stage, setStage] = React.useState<"phone" | "otp">("phone");
  const [submittedPhones, setSubmittedPhones] = React.useState<{
    [key: string]: number;
  }>({});

  const authForm = useForm<OtpScheme | PhoneScheme>({
    mode: "onChange",
    defaultValues: {
      phone: "",
    },
    resolver: zodResolver(stage === "phone" ? phoneScheme : otpScheme),
  });

  const phone = authForm.watch("phone");

  React.useEffect(() => {
    if (phone.length < 10 && !submittedPhones[phone]) return setStage("phone");
  }, [phone]);

  React.useEffect(() => {
    if (submittedPhones[phone] > Date.now()) {
      setStage("otp");
    }
  }, [phone]);

  const postAuthOptMutation = usePostAuthOtpMutation();
  const postUsersSinginMutation = usePostUsersSinginMutation();

  const onSendPhone = async (phone: string) => {
    const postAuthOptMutationResponse = await postAuthOptMutation.mutateAsync({ params: { phone } });

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + postAuthOptMutationResponse.data.retryDelay,
    });
  };
  const onSubmit = authForm.handleSubmit(async values => {
    if (stage === "phone" && "phone" in values) {
      await onSendPhone(values.phone);
      setStage("otp");
      return;
    }

    if (stage === "otp" && "otp" in values) {
      const postUsersSinginMutationResponse = await postUsersSinginMutation.mutateAsync({
        params: { code: +values.otp, phone: authForm.getValues("phone") },
      });

      if (!postUsersSinginMutationResponse.data.success) {
        authForm.setError("otp", { message: postUsersSinginMutationResponse.data.reason });
      }
      useSessionStore.setState({ isLoggedIn: true, user: postUsersSinginMutationResponse.data.user });
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, postUsersSinginMutationResponse.data.token);
    }
  });

  const onRetryDelete = () => onSendPhone(phone);
  return {
    form: authForm,
    state: { isLoading: authForm.formState.isSubmitting, stage, submittedPhones, phone },
    functions: { onSubmit, onRetryDelete },
  };
};
