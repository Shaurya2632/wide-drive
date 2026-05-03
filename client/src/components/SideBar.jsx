import FileUploadArea from "./FileUploadArea";
import { NavLink } from "react-router-dom";

function SideBar() {
  const baseStyle =
    "px-3 py-2 rounded-lg hover:bg-gray-50 hover:scale-[1.02] transition cursor-pointer geist-body text-sm";

  const activeStyle =
    "bg-gray-100 text-black font-medium";

  return (
    <div className="fixed top-0 left-0 h-screen w-56 px-4 py-3 flex flex-col bg-white border-r border-gray-100">
      <h1 className="pl-2 text-[22px] geist-title tracking-tight">
        Wide Drive
      </h1>

      <div className="pt-10 flex flex-col gap-2">
        <NavLink
          to="/drive"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : ""}`
          }
        >
          My Drive
        </NavLink>

        <NavLink
          to="/total"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : ""}`
          }
        >
          Total Storage
        </NavLink>
      </div>

      <div className="flex-1" />

      <div className="pb-4">
        <FileUploadArea />
      </div>
    </div>
  );
}

export default SideBar;