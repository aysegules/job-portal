import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import * as companyService from "../services/company.service.ts";
import type { AuthRequest } from "../types/auth.types.ts";

const registerCompany = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const image = req.file as Express.Multer.File;
  const company = await companyService.registerCompany({
    name,
    email,
    password,
    image,
  });

  res.status(201).json({
    status: "success",
    company,
  });
});

const loginCompany = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { company, token } = await companyService.loginCompany({
    email,
    password,
  });

  res.status(200).json({
    status: "success",
    token,
    company,
  });
});

const getCompany = asyncHandler(async (req: AuthRequest, res: Response) => {
  const companyId = req.company?.id as string;

  const company = await companyService.getCompany(companyId);

  res.status(200).json({
    status: "success",
    company,
  });
});

const postJob = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { title, description, location, category, level, salary, visible } =
    req.body;
  const companyId = req.company?.id as string;

  const job = await companyService.postJob(
    {
      title,
      description,
      location,
      category,
      level,
      salary,
      visible,
    },
    companyId,
  );

  res.status(201).json({
    status: "success",
    job,
  });
});

//todo:get-company-job-applicants
const getCompanyJobApplicants = asyncHandler(
  async (req: Request, res: Response) => {},
);

const getCompanyPostedJobs = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const companyId = req.company?.id as string;

    const jobs = await companyService.getCompanyPostedJobs(companyId);

    res.status(200).json({
      status: "success",
      jobs,
    });
  },
);

//todo:change-job-application-status
const changeJobApplicationStatus = asyncHandler(
  async (req: Request, res: Response) => {},
);

const changeJobVisibility = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { id } = req.params as { id: string };
    const companyId = req.company?.id as string;

    const job = await companyService.changeJobVisibility({ id, companyId });

    res.status(200).json({
      status: "success",
      job,
    });
  },
);

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
