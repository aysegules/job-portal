import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import * as userService from "../services/user.service.ts";
import type { AuthRequest, UserFiles } from "../types/auth.types.ts";

const getUser = asyncHandler(async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id as string;

  const user = await userService.getUser(userId);

  res.status(200).json({
    status: "success",
    user,
  });
});

const applyForJob = asyncHandler(async (req: AuthRequest, res: Response) => {
  const jobId = req.params.jobId as string;
  const userId = req.user?.id as string;

  const application = await userService.applyForJob({ jobId, userId });

  res.status(201).json({
    status: "success",
    application,
  });
});

const getUserJobApplications = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id as string;

    const applications = await userService.getUserJobApplications(userId);

    res.status(200).json({
      status: "success",
      applications,
    });
  },
);

const updateUserProfile = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const id = req.user?.id as string;
    const files = req.files as UserFiles;

    const image = files?.img?.[0];
    const resume = files?.resume?.[0];

    const user = await userService.updateUserProfile({
      id,
      name: req.body.name,
      email: req.body.email,
      ...(image ? { image } : {}),
      ...(resume ? { resume } : {}),
    });

    res.status(200).json({
      status: "success",
      user,
    });
  },
);

const deleteUser = asyncHandler(async (req: AuthRequest, res: Response) => {
  const id = req.user?.id as string;
  await userService.deleteUser(id);

  res.status(204).send();
});

export {
  getUser,
  applyForJob,
  getUserJobApplications,
  updateUserProfile,
  deleteUser,
};
