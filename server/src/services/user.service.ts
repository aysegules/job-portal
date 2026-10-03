import { prisma } from "../../lib/prisma.ts";
import { AppError } from "../errors/AppError.ts";
import type { UpdateUserInput } from "../types/user.types.ts";
import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../utils/uploadToCloudinary.ts";

const getUser = async (userId: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!existingUser) {
    throw new AppError("User not found", 404);
  }

  return existingUser;
};

const applyForJob = async ({
  jobId,
  userId,
}: {
  jobId: string;
  userId: string;
}) => {
  const existingApplication = await prisma.jobApplication.findUnique({
    where: { userId_jobId: { userId, jobId } },
  });

  if (existingApplication) {
    throw new AppError("Already applied", 400);
  }

  const job = await prisma.job.findMany({
    where: { id: jobId },
  });

  if (!job) {
    throw new AppError("Job not found", 404);
  }

  const application = await prisma.jobApplication.create({
    data: {
      userId,
      jobId,
      status: "pending",
    },
  });

  return application;
};

const getUserJobApplications = async (userId: string) => {
  const applications = await prisma.jobApplication.findMany({
    where: { userId },
    include: {
      job: {
        include: {
          company: {
            select: {
              id: true,
              name: true,
              email: true,
              img: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      },
    },
  });

  if (applications.length === 0) {
    throw new AppError("No job applications found", 404);
  }

  return applications;
};

const updateUserProfile = async ({
  id,
  name,
  email,
  image,
  resume,
}: UpdateUserInput) => {
  const currentUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!currentUser) {
    throw new Error("User not found");
  }

  if (email && email !== currentUser.email) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error("Email already in use");
    }
  }

  let newImage;
  let newResume;

  try {
    if (image) {
      newImage = await uploadToCloudinary(
        image.buffer,
        "my-project/users/images",
        "image",
      );
    }

    if (resume) {
      newResume = await uploadToCloudinary(
        resume.buffer,
        "my-project/users/resumes",
        "raw",
      );
    }

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...(name !== undefined && { name }),
        ...(email !== undefined && { email }),

        ...(newImage && {
          img: newImage.url,
          imgPublicId: newImage.publicId,
        }),

        ...(newResume && {
          resume: newResume.url,
          resumePublicId: newResume.publicId,
        }),
      },

      select: {
        id: true,
        name: true,
        email: true,
        img: true,
        resume: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (newImage && currentUser.imgPublicId) {
      await deleteFromCloudinary(currentUser.imgPublicId, "image");
    }

    if (newResume && currentUser.resumePublicId) {
      await deleteFromCloudinary(currentUser.resumePublicId, "raw");
    }

    return updatedUser;
  } catch (error) {
    if (newImage?.publicId) {
      await deleteFromCloudinary(newImage.publicId, "image").catch(() => {});
    }

    if (newResume?.publicId) {
      await deleteFromCloudinary(newResume.publicId, "raw").catch(() => {});
    }

    throw error;
  }
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  await prisma.user.delete({
    where: {
      id,
    },
  });

  if (user.imgPublicId) {
    await deleteFromCloudinary(user.imgPublicId, "image").catch(() => {});
  }

  if (user.resumePublicId) {
    await deleteFromCloudinary(user.resumePublicId, "raw").catch(() => {});
  }
};

export { getUser, applyForJob, getUserJobApplications, updateUserProfile };
