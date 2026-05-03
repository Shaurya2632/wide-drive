import { useState } from "react";
import { X, Download } from "lucide-react";
import { formatSize, resolveFileUrl, getFileMeta } from "../utils/file.utils";

function FileCard({ file, onRemove }) {
  const [loading, setLoading] = useState(false);

  const ext = file.name?.split(".").pop()?.toUpperCase() || "FILE";
  const { Icon, color, bg } = getFileMeta(ext);

  const handleDownload = async () => {
    try {
      setLoading(true);

      const { url, revoke, name } = await resolveFileUrl(file);

      const a = document.createElement("a");
      a.href = url;
      a.download = name || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();

      if (revoke) {
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      }
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-white hover:bg-stone-50 transition-all duration-200">

      <div className={`w-9 h-9 shrink-0 rounded-md flex items-center justify-center ${bg}`}>
        <Icon className={`w-4 h-4 ${color}`} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[13px] text-stone-800 truncate leading-5">
          {file.name || "Untitled"}
        </p>
        <p className="text-[11px] text-stone-400 leading-4">
          {ext} • {formatSize(file.size)}
        </p>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">

        <button
          onClick={handleDownload}
          disabled={loading}
          className="w-7 h-7 flex items-center justify-center rounded-md text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 disabled:opacity-50"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
        </button>

        <button
          onClick={() => onRemove(file)}
          className="w-7 h-7 flex items-center justify-center rounded-md text-red-500 hover:bg-red-50 transition-all hover:scale-105"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}

export default FileCard;