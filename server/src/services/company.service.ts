import { prisma } from "../../lib/prisma.ts";
import { AppError } from "../errors/AppError.ts";
import { DatabaseError } from "../errors/DatabaseError.ts";
import { hashPassword } from "../utils/hashPassword.ts";
import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../utils/uploadToCloudinary.ts";
import bcrypt from "bcrypt";
import type { Login } from "../validators/auth.validator.ts";
import { generateToken } from "../utils/generateToken.ts";
import type { PostJob } from "../validators/company.validator.ts";
import type { RegisterInput } from "../types/company.types.ts";

const registerCompany = async ({
  name,
  email,
  password,
  image,
}: RegisterInput) => {
  const existingCompany = await prisma.company.findUnique({
    where: { email },
  });

  if (existingCompany) {
    throw new AppError("Company alread exists", 400);
  }

  let imageData;

  try {
    if (image) {
      imageData = await uploadToCloudinary(
        image.buffer,
        "jobPortal/companies/images",
        "image",
      );
    }

    const hashedPassword = await hashPassword(password);

    const company = await prisma.company.create({
      data: {
        name,
        email,
        password: hashedPassword,
        img: imageData?.url ?? null,
        imgPublicId: imageData?.publicId ?? null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        img: true,
        imgPublicId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return company;
  } catch (error) {
    if (imageData?.publicId) {
      await deleteFromCloudinary(imageData.publicId, "image").catch(() => {});
    }

    throw new DatabaseError("User creation failed");
  }
};

const loginCompany = async ({ email, password }: Login) => {
  const existingCompany = await prisma.company.findUnique({
    where: { email },
  });

  if (!existingCompany) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    existingCompany?.password,
  );

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken({ id: existingCompany.id, type: "company" });

  const { password: _, ...company } = existingCompany;

  return { company, token };
};

const getCompany = async (companyId: string) => {
  const company = await prisma.company.findUnique({
    where: { id: companyId },
    include: { jobs: true },
  });

  return company;
};

const postJob = async (
  { title, description, location, category, level, salary, visible }: PostJob,
  companyId: string,
) => {
  const job = await prisma.job.create({
    data: {
      companyId,
      title,
      description,
      location,
      category,
      level,
      salary,
      visible: visible ?? true,
    },
  });

  return job;
};

const getCompanyJobApplicants = async () => {};

const getCompanyPostedJobs = async (companyId: string) => {
  const jobs = await prisma.job.findMany({
    where: { companyId },
    include: {
      jobApplications: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              img: true,
              resume: true,
            },
          },
        },
      },
    },
  });

  if (Object.keys(jobs).length === 0) {
    throw new AppError("No job found", 404);
  }

  //todo:add number of applicant info in jobs

  return jobs;
};

const changeJobApplicationStatus = async () => {};

const changeJobVisibility = async ({
  id,
  companyId,
}: {
  id: string;
  companyId: string;
}) => {
  const existingJob = await prisma.job.findUnique({
    where: { id },
    select: { companyId: true, visible: true },
  });

  if (!existingJob) {
    throw new AppError("Job not found", 404);
  }

  if (existingJob.companyId !== companyId) {
    throw new AppError("Not authorized to change this job", 403);
  }

  const updatedJob = await prisma.job.update({
    where: { id },
    data: {
      visible: !existingJob.visible,
    },
  });

  return updatedJob;
};

export {
  registerCompany,
  loginCompany,
  getCompany,
  postJob,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  changeJobApplicationStatus,
  changeJobVisibility,
};
