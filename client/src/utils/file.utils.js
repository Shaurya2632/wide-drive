import {
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
} from "lucide-react";

export function formatSize(bytes) {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export async function resolveFileUrl(file) {
  if (!file) throw new Error("No file provided");

  if (file instanceof File || file instanceof Blob) {
    return {
      url: URL.createObjectURL(file),
      revoke: true,
      name: file.name || "file",
    };
  }

  const rawUrl =
    file.url || file.path || file.filepath || file.downloadUrl || file.src;

  if (!rawUrl) {
    console.error("Invalid file object:", file);
    throw new Error("Invalid file");
  }

  const finalUrl = rawUrl.startsWith("http")
    ? rawUrl
    : `http://localhost:3000${rawUrl}`;

  const res = await fetch(finalUrl);

  if (!res.ok) {
    throw new Error(`Failed to fetch file (${res.status})`);
  }

  const blob = await res.blob();

  return {
    url: URL.createObjectURL(blob),
    revoke: true,
    name: file.name || file.filename || rawUrl.split("/").pop() || "file",
  };
}

export function triggerDownload(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "download";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export const getFileMeta = (ext) => {
  switch (ext) {
    case "PNG":
    case "JPG":
    case "JPEG":
    case "WEBP":
      return { Icon: FileImage, color: "text-blue-500", bg: "bg-blue-50" };

    case "MP4":
    case "MOV":
    case "AVI":
      return { Icon: FileVideo, color: "text-purple-500", bg: "bg-purple-50" };

    case "MP3":
    case "WAV":
      return { Icon: FileAudio, color: "text-green-500", bg: "bg-green-50" };

    case "ZIP":
    case "RAR":
      return {
        Icon: FileArchive,
        color: "text-orange-500",
        bg: "bg-orange-50",
      };

    case "JS":
    case "JAVA":
    case "PY":
    case "HTML":
    case "CSS":
      return { Icon: FileCode, color: "text-yellow-500", bg: "bg-yellow-50" };

    default:
      return { Icon: FileText, color: "text-gray-500", bg: "bg-gray-50" };
  }
};
