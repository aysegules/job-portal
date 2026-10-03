import type { Request, Response, NextFunction } from "express";
import { getToken } from "../../utils/getToken.ts";
import { verifyToken } from "../../utils/verifyToken.ts";
import { AppError } from "../../errors/AppError.ts";
import { prisma } from "../../../lib/prisma.ts";
import { asyncHandler } from "../../utils/asyncHandler.ts";
import type { AuthRequest } from "../../types/auth.types.ts";

export const authenticateUser = asyncHandler(
  async (req: AuthRequest, _res: Response, next: NextFunction) => {
    const token = getToken(req);

    if (!token) {
      throw new AppError("Not authorized", 401);
    }

    const decoded = verifyToken(token);

    if (decoded.type !== "user") {
      throw new AppError("Not authorized", 401);
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      throw new AppError("Not authorized", 401);
    }

    req.user = user;

    next();
  },
);
