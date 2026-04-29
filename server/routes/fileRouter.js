import express from "express";
import {
  files,
  fileById,
  downloadFileById,
  uploadFile,
  deleteFile,
} from "../controllers/fileController.js";

export const fileRouter = express.Router();

fileRouter.get("/files", files);
fileRouter.get("/file/:id", fileById);
fileRouter.get("/download/:id", downloadFileById);
fileRouter.post("/upload", uploadFile);
fileRouter.delete("/file/:id", deleteFile);
