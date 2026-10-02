import multer from "multer";
import type { FileFilterCallback } from "multer";
import type { Request } from "express";

const storage = multer.memoryStorage();

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  if (file.fieldname === "img") {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Image file required"));
      return;
    }

    cb(null, true);
    return;
  }

  if (file.fieldname === "resume") {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error("Resume must be PDF, DOC or DOCX"));
      return;
    }

    cb(null, true);
    return;
  }

  cb(new Error(`Unexpected file field: ${file.fieldname}`));
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter,
});
