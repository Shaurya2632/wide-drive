import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-white poppins-404">
      <div className="relative z-10 text-center max-w-md w-full mx-4 p-6 rounded-2xl bg-white/80 backdrop-blur-md">
        <h1 className="text-8xl leading-none text-red-600 poppins-404t">404</h1>

        <h2 className="mt-4 text-xl text-gray-800">Page not found</h2>

        <p className="mt-2 text-sm text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <Link
            to="/drive"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:scale-110 transition duration-200"
          >
            Go to Drive
          </Link>

          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-sm hover:scale-110 transition duration-200"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
