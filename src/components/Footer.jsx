import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#020617] text-gray-400 px-6 md:px-20 py-10 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            Jumail Jamal
          </h2>
          <p className="text-sm mt-2">
            Python Full Stack Developer
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="flex gap-4 text-xl">
  <a
    href="https://github.com/jumail740"
    target="_blank"
    rel="noreferrer"
    className="hover:text-blue-400 transition"
  >
    <FaGithub />
  </a>

  <a
  href="https://www.linkedin.com/in/jumail-jamal"
  target="_blank"
  rel="noreferrer"
  className="hover:text-blue-400 transition"
>
  <FaLinkedin />
</a>
<a
  href="https://www.instagram.com/_jumail_j"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-pink-500 transition"
>
  <FaInstagram />
</a>
</div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Jumail Jamal. All rights reserved.
      </div>
    </motion.footer>
  );
}