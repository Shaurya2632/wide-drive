import { useContext } from "react";
import { FileContext } from "../context/FileContext";

function TotalStorage() {
  const { files } = useContext(FileContext);

  const totalFiles = files.length;

  const usedMB =
    files.reduce((acc, file) => acc + (file.size || 0), 0) / (1024 * 1024);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center">

        <span className="text-[80px] text-green-500 geist-title leading-none">
          {totalFiles}
        </span>

        <span className="text-[15.5px] text-gray-500 geist-body mt-2">
          files
        </span>

        <span className="text-[14px] text-gray-500 geist-body mt-4">
          {usedMB.toFixed(2)} MB Stored
        </span>

      </div>
    </div>
  );
}

export default TotalStorage;