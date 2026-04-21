import React from "react";

export default function LogoLoop() {
  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <div className="overflow-hidden py-6">
      <div className="flex gap-12 animate-scroll whitespace-nowrap">

        {/* FIRST LOOP */}
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-lg text-gray-300 font-semibold"
          >
            {skill}
          </span>
        ))}

        {/* DUPLICATE FOR LOOP EFFECT */}
        {skills.map((skill, i) => (
          <span
            key={`dup-${i}`}
            className="text-lg text-gray-300 font-semibold"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>
  );
}