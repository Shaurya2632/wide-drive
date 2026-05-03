import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import FileProvider from "./context/FileProvider";
import "./index.css";
import AppLayout from "./AppLayout";
import FileStorage from "./components/FileStorage";
import TotalStorage from "./components/TotalStorage";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/drive" replace />,
      },
      {
        path: "drive",
        element: <FileStorage />,
      },
      {
        path: "total",
        element: <TotalStorage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <FileProvider>
      <RouterProvider router={router} />
    </FileProvider>
);
