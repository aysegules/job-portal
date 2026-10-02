import { z } from "zod";

const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),
    email: z.email(),
    password: z.string().min(6).max(100),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(6).max(100),
  }),
});

export type Login = z.infer<typeof loginSchema>["body"];

export { registerSchema, loginSchema };
