import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `geist-body text-[15px] pb-1 transition-colors duration-150 relative group cursor-pointer ${
      isActive ? "text-black" : "text-gray-400 hover:text-gray-600"
    }`;

  const underline = (isActive) =>
    `absolute bottom-0 left-0 h-[2px] bg-black rounded-full transition-[width] duration-250 ease-in-out ${
      isActive ? "w-full" : "w-0"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="cursor-pointer">
          <span className="geist-title text-[22px]  text-black select-none">
            Wide Drive
          </span>
        </NavLink>
        <nav className="flex items-center gap-8">
          <NavLink to="/drop" className={linkClass}>
            {({ isActive }) => (
              <>
                Drop Area
                <span className={underline(isActive)} />
              </>
            )}
          </NavLink>

          <NavLink to="/upload" className={linkClass}>
            {({ isActive }) => (
              <>
                Drive Store
                <span className={underline(isActive)} />
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
