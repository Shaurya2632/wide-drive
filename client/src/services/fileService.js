import { api } from "../api/axios";

export const getFiles = async () => api.get("/");

export const getFileById = async (fileId) =>
  api.get(`/${fileId}`);

export const uploadFile = async (files) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  return api.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteFile = async (fileId) =>
  api.delete(`/${fileId}`);