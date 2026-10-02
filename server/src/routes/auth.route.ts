import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.ts";
import { validate } from "../middlewares/validate.middleware.ts";
import { loginSchema, registerSchema } from "../validators/auth.validator.ts";
import { login, register } from "../controllers/auth.controller.ts";

const router = Router();

router.post(
  "/register",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  validate(registerSchema),
  register,
);

router.post("/login", validate(loginSchema), login);

export default router;
