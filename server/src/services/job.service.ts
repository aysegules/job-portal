import { prisma } from "../../lib/prisma.ts";
import { AppError } from "../errors/AppError.ts";

const getAllJobs = async () => {
  const jobs = await prisma.job.findMany({
    where: { visible: true },
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
  });

  return jobs;
};

const getJobById = async (id: string) => {
  const existingJob = await prisma.job.findUnique({
    where: { id },
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
  });

  if (!existingJob) {
    throw new AppError("Job not found", 404);
  }

  return existingJob;
};

export { getAllJobs, getJobById };
