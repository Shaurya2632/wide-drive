import { FileContext } from "./FileContext";
import { useState } from "react";
import { api } from "../api/axios";
import {
  getFiles,
  getFileById,
  uploadFile,
  deleteFile,
} from "../services/fileService";

export default function FileProvider({ children }) {
  const [uploadFiles, setUploadFiles] = useState([]);

  return (
    <FileContext.Provider
      value={{
        uploadFiles,
        setUploadFiles,
        api,
        getFiles,
        getFileById,
        uploadFile,
        deleteFile,
      }}
    >
      {children}
    </FileContext.Provider>
  );
}
