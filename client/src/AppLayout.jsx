import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function AppLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
