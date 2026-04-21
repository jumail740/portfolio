import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiDjango,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFlask
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "REST API", icon: <FaDatabase /> },
  { name: "Razorpay", icon: <FaDatabase /> }
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="px-6 md:px-20 py-32 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>

      {/* LOGO LOOP */}
      <div className="overflow-hidden py-6">
        <div className="flex gap-12 animate-scroll whitespace-nowrap">

          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[100px] group"
            >
              {/* ICON */}
              <div className="text-4xl text-gray-300 group-hover:text-blue-400 
              group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] 
              transition duration-300 mb-2">
                {skill.icon}
              </div>

              {/* NAME */}
              <p className="text-sm text-gray-400 group-hover:text-white transition">
                {skill.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}