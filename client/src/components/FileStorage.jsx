import { useContext } from "react";
import { FileContext } from "../context/FileContext";
import FileCard from "./FileCard";

function FileStorage() {
  const { files, setFiles } = useContext(FileContext);

  const handleRemove = (target) => {
    setFiles((prev) => prev.filter((f) => f !== target));
  };

  return (
    <div className="pl-60 pr-6 pt-6">
      <div className="grid grid-cols-6 gap-4">
        {files.map((file, index) => (
          <FileCard key={index} file={file} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default FileStorage;