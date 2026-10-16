import { useMutation } from "@tanstack/react-query";
import { login } from "../services/company/login";
import { register } from "../services/company/register";
import { postJob } from "../services/company/postJob";
import { changeJobVisibility } from "../services/company/changeJobVisibility";
import { changeJobApplicationStatus } from "../services/company/changeJobApplicationStatus";

export const useCompanyLogin = () =>
  useMutation({
    mutationFn: login,
  });

export const useCompanyRegister = () =>
  useMutation({
    mutationFn: register,
  });

export const usePostJob = () =>
  useMutation({
    mutationFn: postJob,
  });

export const useChangeVisibility = () =>
  useMutation({
    mutationFn: changeJobVisibility,
  });

export const useChangeStatus = () =>
  useMutation({
    mutationFn: changeJobApplicationStatus,
  });
