import { FileText, X } from "lucide-react";

function FileCard({ file, onRemove }) {
  const sizeKB = (file.size / 1024).toFixed(1);
  const ext = file.name.split(".").pop().toUpperCase();

  return (
    <div className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 rounded-md text-gray-400 opacity-0 group-hover:opacity-100 hover:text-gray-700 transition"
      >
        <X size={13} />
      </button>

      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition">
          <FileText size={20} className="text-gray-700" />
        </div>

        <div className="w-full">
          <p className="geist-title text-[13px] text-gray-900 truncate">
            {file.name}
          </p>
          <p className="geist-body text-[11px] text-gray-500 mt-0.5">
            {sizeKB} KB
          </p>
        </div>
      </div>

      <div className="mt-3 pt-2 flex justify-between">
        <span className="geist-body text-[10px] text-gray-600">{ext}</span>
        <span className="geist-body text-[10px] text-gray-400">
          {file.createdAt
            ? new Date(file.createdAt).toLocaleDateString()
            : ""}
        </span>
      </div>
    </div>
  );
}

export default FileCard;