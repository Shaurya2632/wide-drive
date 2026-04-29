import { FileText, X } from "lucide-react"

function FileCard({ file, onRemove }) {
  const sizeKB = (file.size / 1024).toFixed(1)
  const ext = file.name.split(".").pop().toUpperCase()

  return (
    <div className="group relative rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
      <button
        onClick={onRemove}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1 rounded-full hover:bg-gray-100 transition"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100">
          <FileText className="w-6 h-6 text-gray-600" />
        </div>

        <div className="overflow-hidden">
          <p className="text-sm text-gray-900 truncate geist-title">
            {file.name}
          </p>
          <p className="text-xs text-gray-500 geist-body">
            {sizeKB} KB
          </p>
        </div>
      </div>

      <div className="text-xs text-gray-500 flex justify-between geist-body">
        <span>{ext}</span>
        <span>{new Date(file.lastModified).toLocaleDateString()}</span>
      </div>
    </div>
  )
}

export default FileCard