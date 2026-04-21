export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full px-6 md:px-20 py-4 
    flex justify-between items-center 
    bg-black/40 backdrop-blur-md border-b border-gray-800 z-50">

      {/* Logo */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
  Jumail
</h1>

      {/* Links */}
      <ul className="flex gap-6 text-sm text-gray-300">

        {["Home", "About", "Experience", "Projects", "Contact"].map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition relative group"
            >
              {item}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 
              transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}

      </ul>
    </nav>
  );
}