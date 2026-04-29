import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

function NotFound() {
  return (
    <div className="h-[calc(100vh-20%)]! w-full flex items-start justify-center px-6 pt-65">
      <div className="max-w-xl w-full text-center">
        <h1 className="geist-title text-6xl sm:text-7xl text-black">404</h1>

        <p className="geist-body mt-3 text-gray-600 text-[15px]">
          The page you are looking for does not exist or has been moved.
        </p>

        <Divider className="my-5! bg-gray-300! w-2/3 mx-auto!" />

        <div className="mt-7 flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/"
            className="geist-body px-3 py-1.5! rounded-xl text-[15px]   hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="geist-body px-3 py-1.5! rounded-xl text-[15px] text-gray-600  transition-all duration-200 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
