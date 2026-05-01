import express from "express";
import {
  files,
  fileById,
  downloadFileById,
  uploadFile,
  deleteFile,
} from "../controllers/fileController.js";
import { upload } from "../config/multer.js";

export const fileRouter = express.Router();

fileRouter.get("/", files);
fileRouter.get("/:id", fileById);
fileRouter.get("/:id/download", downloadFileById);
fileRouter.post("/", upload.array("files"), uploadFile);
fileRouter.delete("/:id", deleteFile);
