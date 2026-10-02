import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import * as authService from "../services/auth.service.ts";
import type { UserFiles } from "../types/auth.types.ts";

const register = asyncHandler(async (req: Request, res: Response) => {
  const files = req.files as UserFiles;

  const image = files?.img?.[0];
  const resume = files?.resume?.[0];

  const user = await authService.register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    ...(image && { image }),
    ...(resume && { resume }),
  });

  res.status(201).json({
    message: "User registered successfully.",
    user,
  });
});

const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { user, token } = await authService.login({ email, password });

  res.status(200).json({
    message: "User logged in successfully.",
    token,
    user,
  });
});

export { register, login };
