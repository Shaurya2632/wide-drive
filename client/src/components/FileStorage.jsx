import FileCard from "./FileCard";

function FileStorage({ files, setFiles }) {
  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  if (files.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-sm text-gray-900 mb-4 geist-title">
        Files ({files.length})
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((file, i) => (
          <FileCard key={i} file={file} onRemove={() => removeFile(i)} />
        ))}
      </div>
    </div>
  );
}

export default FileStorage;
