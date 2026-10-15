import type { ApplicationStatus } from "../../generated/prisma/client";

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  image?: Express.Multer.File;
};

export type ChangeApplicationStatus = {
  id: string;
  status: ApplicationStatus;
};
