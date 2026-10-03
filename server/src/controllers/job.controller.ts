import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import * as jobService from "../services/job.service.ts";

const getAllJobs = asyncHandler(async (req: Request, res: Response) => {
  const jobs = await jobService.getAllJobs();

  res.status(200).json({
    status: "success",
    jobs,
  });
});

const getJobById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  const job = await jobService.getJobById(id);

  res.status(200).json({
    status: "success",
    job,
  });
});

export { getAllJobs, getJobById };
