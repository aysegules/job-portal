import { z } from "zod";

const postJobSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Job title is required").max(100),
    description: z.string().min(1, "Job description is required"),
    location: z.string(),
    category: z.string(),
    level: z.string(),
    salary: z.int(),
    visible: z.boolean().optional(),
  }),
});

export type PostJob = z.infer<typeof postJobSchema>["body"];
