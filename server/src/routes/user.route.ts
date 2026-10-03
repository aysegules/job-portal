import { Router } from "express";
import {
  getUser,
  applyForJob,
  getUserJobApplications,
  updateUserProfile,
  deleteUser,
} from "../controllers/user.controller.ts";
import { upload } from "../middlewares/multer.middleware.ts";
import { authenticateUser } from "../middlewares/auth/auth.user.middleware.ts";

const router = Router();

router.use(authenticateUser);

router.get("/", authenticateUser, getUser);
router.post("/apply/:jobId", applyForJob);
router.get("/applications", getUserJobApplications);
router.patch(
  "/profile",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  updateUserProfile,
);
router.delete("/profile", deleteUser);

export default router;
