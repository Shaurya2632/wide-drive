import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, ArrowUpCircle } from "lucide-react";
import { Button } from "@mui/material";
import FileStorage from "./FileStorage";
import { useContext } from "react";
import { FileContext } from "../context/FileContext";

export default function FileDropArea() {
  const [files, setFiles] = useState([]);
  const { setUploadFiles } = useContext(FileContext);

  const onDrop = (acceptedFiles) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  };
  
  const onUpload = () => {
    setFiles([]);
    setUploadFiles(files);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div className="w-full max-w-5xl mx-auto geist-body">
      <div
        {...getRootProps()}
        className={`w-full h-80 md:h-110 flex flex-col items-center justify-center gap-4 
        border-2 border-dashed rounded-2xl cursor-pointer transition
        ${isDragActive ? "border-black bg-gray-100" : "border-gray-300 bg-white hover:border-black hover:shadow-md"}`}
      >
        <input {...getInputProps()} />

        <div className="p-4 rounded-2xl bg-gray-100">
          <UploadCloud className="w-10 h-10 text-gray-600" />
        </div>

        <div className="text-center">
          <p className="text-base text-gray-800 geist-title">
            {isDragActive ? "Drop files here..." : "Drag & drop your files"}
          </p>
          <p className="text-sm text-gray-500 geist-body">
            or <span className="text-black">click to browse</span>
          </p>
        </div>
      </div>

      <FileStorage files={files} setFiles={setFiles} />

      {files.length > 0 && (
        <div className="flex justify-center mt-6">
          <Button
            variant="contained"
            startIcon={<ArrowUpCircle />}
            sx={{
              backgroundColor: "#000",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "14px",
              padding: "8px 20px",
              "&:hover": { backgroundColor: "#111" },
            }}
            onClick={onUpload}
          >
            Upload Files
          </Button>
        </div>
      )}
    </div>
  );
}
