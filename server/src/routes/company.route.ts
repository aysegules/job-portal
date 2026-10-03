import { Router } from "express";
import {
  changeJobApplicationStatus,
  changeJobVisibility,
  getCompany,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/company.controller.ts";
import { upload } from "../middlewares/multer.middleware.ts";
import { authenticateCompany } from "../middlewares/auth/auth.company.middleware.ts";

const router = Router();

router.post("/register", upload.single("img"), registerCompany);
router.post("/login", loginCompany);
router.get("/company", authenticateCompany, getCompany);
router.post("/job", authenticateCompany, postJob);
router.get("/applicants", authenticateCompany, getCompanyJobApplicants);
router.get("/list-jobs", authenticateCompany, getCompanyPostedJobs);
router.patch("/change-status", authenticateCompany, changeJobApplicationStatus);
router.post("/change-visibility/:id", authenticateCompany, changeJobVisibility);

export default router;
