import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import FileDrop from "./components/FileDrop";
import FileUpload from "./components/FileUpload";
import NotFound from "./components/NotFound";
import FileProvider from "./context/FileProvider";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/drop" /> },
      { path: "drop", element: <FileDrop /> },
      { path: "upload", element: <FileUpload /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FileProvider>
    <RouterProvider router={router} />
  </FileProvider>,
);
