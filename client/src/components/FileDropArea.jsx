import { useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X } from "lucide-react";
import { FileContext } from "../context/FileContext";
import { uploadFile, getFiles } from "../services/fileService";
import { Snackbar, Alert } from "@mui/material";

function FileDropArea() {
  const [files, setFiles] = useState([]);
  const [successOpen, setSuccessOpen] = useState(false);
  const { setUploadFiles } = useContext(FileContext);

  const onDrop = (acceptedFiles) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onUpload = async () => {
    if (!files.length) return;

    try {
      await uploadFile(files);
      const refreshed = await getFiles();
      setUploadFiles(Array.isArray(refreshed.data) ? refreshed.data : []);
      setFiles([]);
      setSuccessOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <Snackbar
        open={successOpen}
        autoHideDuration={2500}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessOpen(false)}
          severity="success"
          variant="filled"
        >
          Files uploaded successfully
        </Alert>
      </Snackbar>

      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center h-52 rounded-2xl border-2 border-dashed cursor-pointer transition
        ${
          isDragActive
            ? "border-black bg-gray-100 scale-[1.01]"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />

        <UploadCloud className="w-9 h-9 text-gray-500 mb-3" />

        <p className="geist-title text-sm text-gray-800">Drop files here</p>
        <p className="geist-body text-xs text-gray-500">
          or click to browse
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <p className="geist-title text-xs text-gray-700">
              Selected Files
            </p>
            <p className="text-[10px] text-gray-400">
              {files.length} item{files.length > 1 && "s"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition"
              >
                <div className="overflow-hidden">
                  <p className="geist-body text-xs text-gray-800 truncate">
                    {file.name}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>

                <button
                  onClick={() => removeFile(index)}
                  className="ml-2 text-gray-400 hover:text-black transition"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={onUpload}
              className="bg-black text-white px-3.5 py-1.25 rounded-xl text-[15.5px] hover:bg-gray-900 hover:scale-105 transition geist-body"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileDropArea;