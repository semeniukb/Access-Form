import { useMutation } from "@tanstack/react-query";
import { postAuthOtp, PostAuthOtpRequestConfig } from "@/utils/api/requests";

export const usePostAuthOtpMutation = () => {
  return useMutation({
    mutationKey: ["postAuthOtp"],
    mutationFn: ({ params, config }: PostAuthOtpRequestConfig) => postAuthOtp({ params, config }),
  });
};
