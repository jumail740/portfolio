import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-6 md:px-20 py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-60 h-60 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <TypeAnimation
  sequence={[
    "I am a motivated Python Developer with a Bachelor's degree in Computer Science and hands-on experience in Full Stack Development. Currently, I am undergoing internship training at Synnefo Solutions, where I am actively working on building real-world applications, including an E-commerce Jersey Store.I specialize in developing dynamic and scalable web applications using Python, Django, and modern frontend technologies like HTML, CSS, JavaScript, and React. I enjoy turning complex problems into simple, efficient, and user-friendly solutions.Passionate about clean code and continuous learning, I constantly explore new technologies and improve my skills to stay updated with industry trends. My goal is to build impactful digital products that solve real-world problems and provide great user experiences."
  ]}
  wrapper="p"
  speed={50}
  repeat={0}   // ✅ IMPORTANT (no loop)
  cursor={true}
  className="text-gray-400 leading-relaxed"
/>
        </div>

      </div>
    </motion.section>
  );
}