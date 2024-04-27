import { useMutation } from "@tanstack/react-query";
import { postUsersSignIn, PostUsersSignInRequestConfig } from "@/utils/api/requests";

export const usePostUsersSinginMutation = () => {
  return useMutation({
    mutationKey: ["postUsersSignin"],
    mutationFn: ({ params, config }: PostUsersSignInRequestConfig) => postUsersSignIn({ params, config }),
  });
};
