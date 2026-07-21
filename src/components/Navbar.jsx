import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full px-4 md:px-10 py-4 
    flex justify-between items-center 
    bg-black/40 backdrop-blur-md border-b border-gray-800 z-50">

      {/* Logo */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        JUMAIL JAMAL
      </h1>

      {/* Desktop */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-300">
        {links.map((item, i) => (
          <li key={i}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <div className="md:hidden text-white text-xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">
          {links.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}