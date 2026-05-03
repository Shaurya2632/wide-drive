import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FileContext } from "./context/FileContext";

function AppLayout() {
  const {fetchFiles} = useContext(FileContext);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;