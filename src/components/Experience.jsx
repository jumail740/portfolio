import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="px-6 md:px-20 py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-16 text-white">
        Experience
      </h2>

      <div className="relative border-l border-gray-800 pl-6 space-y-12">

        {/* Timeline Item */}
        <div className="relative">
     
          <h3 className="text-xl font-semibold text-white">
            Python Developer Intern
          </h3>

          <p className="text-gray-400 text-sm">
            Synnefo Solutions • 2026 – Present
          </p>

          <ul className="mt-4 text-gray-400 space-y-2 text-sm list-disc list-inside">
            <li>Built web apps using Django and React</li>
            <li>Developed responsive UI components</li>
            <li>Integrated APIs and managed backend logic</li>
            <li>Used GitHub for version control</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}