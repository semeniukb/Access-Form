import { useMutation } from "@tanstack/react-query";
import { patchUserProfile, PatchUserProfileRequestConfig } from "@/utils/api/requests";

export const usePatchUserProfileMutation = () => {
  return useMutation({
    mutationKey: ["patchUserProfile"],
    mutationFn: ({ params, config }: PatchUserProfileRequestConfig) => patchUserProfile({ params, config }),
  });
};
