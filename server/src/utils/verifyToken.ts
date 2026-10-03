import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError.ts";
import type { JwtPayload } from "../types/auth.types.ts";

export const verifyToken = (token: string): JwtPayload => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "string" || typeof decoded.id !== "string") {
      throw new AppError("Not authorized", 401);
    }

    return decoded as JwtPayload;
  } catch (error) {
    throw error;
  }
};
