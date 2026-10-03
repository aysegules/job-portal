import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { errorHandler } from "./middlewares/error.middleware.ts";

import authRoute from "./routes/auth.route.ts";
import companyRoute from "./routes/company.route.ts";
import jobRoute from "./routes/job.route.ts";
import userRoute from "./routes/user.route.ts";

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins?.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const VERSION = process.env.VERSION || "/api/v1";

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running..." });
});

app.use(`${VERSION}/auth`, authRoute);
app.use(`${VERSION}/companies`, companyRoute);
app.use(`${VERSION}/jobs`, jobRoute);
app.use(`${VERSION}/users`, userRoute);

app.use(errorHandler);
export default app;
