import { FileContext } from "./FileContext";
import { useState } from "react";

export default function FileProvider({ children }) {
  const [uploadFiles, setUploadFiles] = useState([]);

  return (
    <FileContext.Provider value={{ uploadFiles, setUploadFiles }}>
      {children}
    </FileContext.Provider>
  );
}
  