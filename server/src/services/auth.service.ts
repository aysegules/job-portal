import { prisma } from "../../lib/prisma";
import { AppError } from "../errors/AppError";
import { DatabaseError } from "../errors/DatabaseError";
import bcrypt from "bcrypt";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../utils/uploadToCloudinary";
import type { RegisterInput } from "../types/auth.types";
import type { Login } from "../validators/auth.validator";
import { generateToken } from "../utils/generateToken";

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

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

  const token = generateToken(existingUser.id);

  const { password: _, ...user } = existingUser;

  return { user, token };
};

export { register, login };
