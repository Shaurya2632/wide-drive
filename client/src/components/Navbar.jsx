import { NavLink } from "react-router-dom";
import { UploadCloud, Folder } from "lucide-react";

export default function Navbar() {
  const base =
    "relative flex items-center gap-2 px-3 py-1.5 text-sm geist-body transition-all duration-200 hover:scale-105";
  const active = "text-black";
  const inactive = "text-gray-600 hover:text-black";

  return (
    <div className="w-full bg-white mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl geist-title text-black">Wide Drive</h1>

        <div className="flex gap-6">
          <NavLink
            to="/drop"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            {({ isActive }) => (
              <>
                <UploadCloud className="w-4 h-4" />
                Drop File
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            {({ isActive }) => (
              <>
                <Folder className="w-4 h-4" />
                Upload File
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
