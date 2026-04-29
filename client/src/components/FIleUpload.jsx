import FileStorage from "./FileStorage";
import { useContext } from "react";
import { FileContext } from "../context/FileContext";

function FileUpload() {
  const { uploadFiles, setUploadFiles } = useContext(FileContext);

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">
      <h2 className="text-lg geist-body text-black mb-4">Uploaded Files</h2>

      <FileStorage files={uploadFiles} setFiles={setUploadFiles} />
    </div>
  );
}

export default FileUpload;
