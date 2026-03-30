import { useEffect, useRef } from "react";

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiKeras,
  SiTensorflow,
  SiArduino,
  SiBlender,
  SiUnity,
  SiCplusplus,
  SiQt,
} from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { BsPersonSquare } from "react-icons/bs";

import { FaJava, FaRobot ,FaBrain} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const stack = [
  {
    title: "Frontend",
    tech: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss, color: "text-blue-400" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    tech: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-white" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    ],
  },
  {
    title: "Database",
    tech: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "Languages",
    tech: [
      { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
      { name: "C#", icon: TbBrandCSharp, color: "text-purple-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-300" },
    ],
  },
  {
    title: "AI / ML",
    tech: [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "Keras", icon: SiKeras, color: "text-red-400" },
      { name: "Google Colab", icon: SiPython, color: "text-yellow-400" },
      { name: "Botpress", icon: FaRobot, color: "text-cyan-400" },
    ],
  },
  {
    title: "Tools",
    tech: [
      { name: "Arduino / ESP32", icon: SiArduino, color: "text-teal-400" },
      { name: "Qt", icon: SiQt, color: "text-green-400" },
    ],
  },
  {
    title: "3D / Graphics",
    tech: [
      { name: "Blender", icon: SiBlender, color: "text-orange-500" },
      { name: "Unity", icon: SiUnity, color: "text-gray-200" },
    ],
  },
  {
    title: "Soft Skills",
    tech: [
      { name: "Teamwork", icon: RiTeamFill, color: "text-green-500" },
      { name: "Leadership", icon: BsPersonSquare, color: "text-blue-500" },
      { name: "Fast Learner", icon: FaBrain, color: "text-red-400" },
    ],
  },
];

export default function TechStack() {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const grid = gridRef.current;
      if (!grid) return;

      const rect = grid.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      grid.style.transform = `rotateX(${y * 6}deg) rotateY(${x * -6}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen px-10 py-32 text-white flex flex-col items-center">
      <h2
        className="
    text-center
    text-5xl font-bold tracking-wide
    text-transparent
    bg-clip-text
    bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
    drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]
    mb-10
    "
      >
        Tech Stack
      </h2>

      <div
        ref={gridRef}
        className="grid md:grid-cols-3 gap-10 max-w-7xl transition-transform duration-300"
      >
        {stack.map((group, i) => (
          <div
            key={group.title}
            style={{
              animation: `float ${6 + i}s ease-in-out infinite`,
            }}
            className="
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            rounded-2xl
            p-8
            shadow-lg
            hover:bg-white/10
            hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]
            transition-all
            "
          >
            <h3 className="text-xl font-semibold mb-6">{group.title}</h3>

            <div className="grid grid-cols-3 gap-6">
              {group.tech.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <Icon
                      className={`
                      text-4xl
                      ${tech.color}
                      drop-shadow-[0_0_8px_currentColor]
                      group-hover:scale-125
                      group-hover:drop-shadow-[0_0_25px_currentColor]
                      transition-all
                      `}
                    />

                    <span className="text-xs opacity-80">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
