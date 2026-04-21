import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      id="contact"
      className="px-6 md:px-20 py-32 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-6">
        Let’s work together or build something amazing 🚀
      </p>

      <a
        href="mailto:jumailjamal740@gmail.com"
        className="px-6 py-2 bg-white text-black rounded-lg"
      >
        Email Me
      </a>
    </motion.div>
  );
}