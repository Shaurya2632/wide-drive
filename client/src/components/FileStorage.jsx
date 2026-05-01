import { useContext } from "react";
import FileCard from "./FileCard";
import { FileContext } from "../context/FileContext";
import { deleteFile, getFiles } from "../services/fileService";

function FileStorage({ files }) {
  const { setUploadFiles } = useContext(FileContext);

  const safeFiles = Array.isArray(files) ? files : [];

  const removeFile = async (id) => {
    try {
      await deleteFile(id);

      const res = await getFiles();
      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.files || [];

      setUploadFiles(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (safeFiles.length === 0) {
    return (
      <div className="flex justify-center mt-20">
        <p className="text-gray-500 geist-body">No files uploaded</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-sm geist-title text-gray-900">
          Files ({safeFiles.length})
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {safeFiles.map((file) => (
          <FileCard
            key={file._id}
            file={file}
            onRemove={() => removeFile(file._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FileStorage;