import type { User, Company } from "../../generated/prisma/client.ts";
import type { Request } from "express";

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  image?: Express.Multer.File;
  resume?: Express.Multer.File;
}

export interface UserFiles {
  img?: Express.Multer.File[];
  resume?: Express.Multer.File[];
}

export interface JwtPayload {
  id: string;
  type: "user" | "company";
}

export interface AuthRequest extends Request {
  user?: Omit<User, "password">;
  company?: Omit<Company, "password">;
}
