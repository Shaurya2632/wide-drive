import { useContext, useEffect, useState } from "react";
import { FileContext } from "../context/FileContext";
import { getFiles } from "../services/fileService";
import FileStorage from "./FileStorage";

function FileUpload() {
  const { uploadFiles, setUploadFiles } = useContext(FileContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const res = await getFiles();
        setUploadFiles(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    load();
  }, [setUploadFiles]);

  return (
    <div className="h-full flex flex-col bg-[#f8fafc]">
      <div className="flex items-center px-6 py-4 border-b bg-white">
        <h1 className="text-xl geist-title text-gray-900">My Drive</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          <FileStorage files={uploadFiles} />
        )}
      </div>
    </div>
  );
}

export default FileUpload;