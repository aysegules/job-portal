import { prisma } from "../../lib/prisma.ts";
import { AppError } from "../errors/AppError.ts";
import { DatabaseError } from "../errors/DatabaseError.ts";
import bcrypt from "bcrypt";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../utils/uploadToCloudinary.ts";
import type { RegisterInput } from "../types/auth.types.ts";
import type { Login } from "../validators/auth.validator.ts";
import { generateToken } from "../utils/generateToken.ts";
import { hashPassword } from "../utils/hashPassword.ts";

const register = async ({
  name,
  email,
  password,
  image,
  resume,
}: RegisterInput) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError("User already exists", 400);
  }

  let imageData;
  let resumeData;

  try {
    if (image) {
      imageData = await uploadToCloudinary(
        image.buffer,
        "jobPortal/users/images",
        "image",
      );
    }

    if (resume) {
      resumeData = await uploadToCloudinary(
        resume.buffer,
        "jobPortal/users/resumes",
        "raw",
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        img: imageData?.url ?? null,
        imgPublicId: imageData?.publicId ?? null,
        resume: resumeData?.url ?? null,
        resumePublicId: resumeData?.publicId ?? null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        img: true,
        imgPublicId: true,
        resume: true,
        resumePublicId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  } catch (error) {
    if (imageData?.publicId) {
      await deleteFromCloudinary(imageData.publicId, "image").catch(() => {});
    }

    if (resumeData?.publicId) {
      await deleteFromCloudinary(resumeData.publicId, "raw").catch(() => {});
    }

    throw new DatabaseError("User creation failed");
  }
};

const login = async ({ email, password }: Login) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken({
    id: existingUser.id,
    type: "user",
  });

  const { password: _, ...user } = existingUser;

  return { user, token };
};

export { register, login };
