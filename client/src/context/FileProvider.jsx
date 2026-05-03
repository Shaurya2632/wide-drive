import { FileContext } from "./FileContext";
import { useState, useCallback } from "react";
import { getFiles } from "../services/fileService";

export default function FileProvider({ children }) {
  const [files, setFiles] = useState([]);

  const fetchFiles = useCallback(async () => {
    try {
      const res = await getFiles();
      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.files || [];
      setFiles(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <FileContext.Provider
      value={{
        files,
        setFiles,
        fetchFiles,
      }}
    >
      {children}
    </FileContext.Provider>
  );
}
