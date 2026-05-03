import { FileUpload } from "@ark-ui/react/file-upload";
import { useContext, useCallback } from "react";
import { FileContext } from "../context/FileContext";
import { Upload } from "lucide-react";
import { uploadFile } from "../services/fileService";

function FileUploadArea() {
  const { setFiles } = useContext(FileContext);

  const handleChange = useCallback(
    async (details) => {
      const acceptedFiles = details.acceptedFiles ?? [];

      if (!acceptedFiles.length) return;

      try {
        await uploadFile(acceptedFiles);
      } catch (err) {
        console.error("Upload failed:", err);
        return;
      }

      setFiles((prev) => {
        const map = new Map();

        prev.forEach((f) => {
          map.set(f.name + f.size, f);
        });

        acceptedFiles.forEach((file) => {
          map.set(file.name + file.size, file);
        });

        return Array.from(map.values());
      });
    },
    [setFiles],
  );

  return (
    <FileUpload.Root maxFiles={20} onFileChange={handleChange}>
      <FileUpload.Dropzone
        className="
          flex items-center justify-center gap-2 w-full h-150 px-3
          border-2 border-dashed border-gray-300 rounded-2xl
          cursor-pointer transition duration-200 hover:border-gray-500
        "
      >
        <Upload size={22} className="text-gray-500" />

        <span className="geist-body text-md text-gray-700">
          New
        </span>

        <FileUpload.HiddenInput />
      </FileUpload.Dropzone>
    </FileUpload.Root>
  );
}

export default FileUploadArea;