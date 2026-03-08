import { NavLink } from "react-router-dom";
import { useState } from "react";

import { logo } from "../assets/images";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/Books", label: "Books" },
    { to: "/HandWritten", label: "HandWritten Notes" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600" : "text-black";

  return (
    <header className='header'>
      <div className='flex justify-between items-center w-full'>
        <NavLink to='/'>
          <img src={logo} alt='logo' className='w-12 h-12 sm:w-16 sm:h-16 object-contain' />
        </NavLink>

        {/* Desktop nav */}
        <nav className='hidden md:flex text-lg gap-5 lg:gap-7 font-medium'>
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type='button'
          aria-label='Toggle menu'
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden p-2 -mr-2 rounded-lg hover:bg-slate-200/50'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {menuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className='md:hidden absolute top-full left-2 right-2 mt-2 py-3 px-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 flex flex-col gap-1 max-h-[70vh] overflow-y-auto z-[9999]'>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${linkClass({ isActive })} py-2.5 px-3 rounded-lg hover:bg-slate-100 text-sm`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
