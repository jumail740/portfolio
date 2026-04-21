import { motion } from "framer-motion";
import jersey from "../assets/jersey.png";
import resume from "../assets/resume.png";
import GlareCard from "./GlareCard";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 md:px-20 py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-white">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* PROJECT CARD */}
        <GlareCard>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="group bg-[#0f172a] rounded-xl overflow-hidden border border-gray-800 
          hover:border-blue-500 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10"
        >

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={jersey}
              alt="project"
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              Jerseys Hub
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              E-commerce platform for managing and displaying football jerseys.
            </p>

            {/* FEATURES */}
            <div className="mb-4">
              <p className="text-blue-400 text-sm mb-2">Key Features:</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Product Listing</li>
                <li>• Cart System</li>
                <li>• Multiple Images</li>
              </ul>
            </div>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["Django", "Python", "JavaScript", "CSS"].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full 
                  group-hover:bg-blue-500/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="https://github.com/jumail740/JerseyHub"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-sm text-blue-400 hover:underline"
            >
              View Project →
            </a>

          </div>
        </motion.div>
        </GlareCard>
       {/* RESUME ANALYZER PROJECT */}
       <GlareCard>
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  className="group bg-[#0f172a] rounded-xl overflow-hidden border border-gray-800 
  hover:border-blue-500 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10"
>

  {/* IMAGE */}
  <div className="overflow-hidden">
    <img
      src={resume}
      alt="resume analyzer"
      className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  {/* CONTENT */}
  <div className="p-6">

    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
      AI Resume Analyzer
    </h3>

    <p className="text-gray-400 text-sm mb-4">
      AI-powered web application that analyzes resumes using Gemini API and provides smart ATS-based suggestions to improve job readiness.
    </p>

    {/* FEATURES */}
    <div className="mb-4">
      <p className="text-blue-400 text-sm mb-2">Key Features:</p>
      <ul className="text-gray-400 text-sm space-y-1">
        <li>• AI Resume Analysis (Gemini API)</li>
        <li>• Skill & Keyword Extraction</li>
        <li>• ATS Score & Suggestions</li>
      </ul>
    </div>

    {/* TECH TAGS */}
    <div className="flex flex-wrap gap-2 mb-4">
      {["Django", "Python", "Gemini API", "AI", "JavaScript"].map((tech, i) => (
        <span
          key={i}
          className="text-xs px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full 
          group-hover:bg-blue-500/20 transition"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* BUTTON */}
    <a
      href="https://github.com/yourusername/resume-analyzer"
      target="_blank"
      rel="noreferrer"
      className="inline-block mt-2 text-sm text-blue-400 hover:underline"
    >
      View Project →
    </a>

  </div>
</motion.div>
</GlareCard>

      </div>
    </motion.section>
  );
}