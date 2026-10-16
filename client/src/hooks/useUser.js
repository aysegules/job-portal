import { useMutation } from "@tanstack/react-query";
import { applyForJob } from "../services/user/applyForJob";
import { updateUserProfile } from "../services/user/updateUserProfile";

export const useApplyForJob = () =>
  useMutation({
    mutationFn: applyForJob,
  });
export const useUpdateUserProfile = () =>
  useMutation({
    mutationFn: updateUserProfile,
  });
