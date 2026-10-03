import type { Request, Response, NextFunction } from "express";
import { getToken } from "../../utils/getToken.ts";
import { verifyToken } from "../../utils/verifyToken.ts";
import { AppError } from "../../errors/AppError.ts";
import { prisma } from "../../../lib/prisma.ts";
import { asyncHandler } from "../../utils/asyncHandler.ts";
import type { AuthRequest } from "../../types/auth.types.ts";

export const authenticateCompany = asyncHandler(
  async (req: AuthRequest, _res: Response, next: NextFunction) => {
    const token = getToken(req);

    if (!token) {
      throw new AppError("Not authorized", 401);
    }

    const decoded = verifyToken(token);

    if (decoded.type !== "company") {
      throw new AppError("Not authorized", 401);
    }

    const company = await prisma.company.findUnique({
      where: { id: decoded.id },
    });

    if (!company) {
      throw new AppError("Not authorized", 401);
    }

    req.company = company;

    next();
  },
);
