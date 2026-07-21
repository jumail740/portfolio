import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center px-6 md:px-20">
      <div className="max-w-4xl">

        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I build{" "}
          <span className="text-gray-400">
            <TypeAnimation
              sequence={[
                "Web Applications",
                1500,
                "Full Stack Projects",
                1500,
                "Modern UI/UX",
                1500,
                "Scalable APIs",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-400 text-lg max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          I'm Jumail — a Python Full Stack Developer specializing in Django & React.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          {/* VIEW WORK */}
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            View Work
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className="px-6 py-2 border border-gray-600 rounded-lg hover:border-white transition"
          >
            Contact Me
          </a>

          {/* VIEW CV */}
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            View CV
          </a>

          {/* DOWNLOAD CV */}
          <a
            href={resume}
            download="Jumail_Jamal_CV.pdf"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Download CV
          </a>

        </motion.div>

      </div>
    </section>
  );
}