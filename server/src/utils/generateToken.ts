import jwt from "jsonwebtoken";
import type { JwtPayload } from "../types/auth.types.ts";

export const generateToken = ({ id, type }: JwtPayload) => {
  const payload = { id, type };

  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "3d",
  });

  return token;
};
