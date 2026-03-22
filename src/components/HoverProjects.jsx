import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mesLogo from "../assets/mes.gif";
import iotLogo from "../assets/IOT.png";
import OSLogo from "../assets/OS.gif";
import Finance from "../assets/Teller.gif";
import Study from "../assets/Study.gif";
import Leave from "../assets/Leave.png";
import Box from "../assets/box.png";
import Gorcery from "../assets/Grocery.png";
import Allergy from "../assets/Allergy.png";

const projects = [
  {
    name: "Manufacturing Execution System",
    description:
      "Visual programming based automation system designed to help small factories integrate manufacturing workflows.",
    github: "https://github.com/SidusSolvere/manufacturing-execution-system",
    image: mesLogo,
    tech: ["React", "Node.js", "MongoDB", "XY Flow"],
  },
  {
    name: "Allergy Detection",
    description: "AI Powered Skin Allergy Detection Website",
    github: "https://github.com/SidusSolvere/allergy-detection-api",
    image: Allergy,
    tech: ["Python", "Flask", "TensorFlow", "React", "CNN"],
  },
  {
    name: "OS Security Event Logger",
    description:
      "Operating system project that logs and monitors security related system events.",
    github: "https://github.com/SidusSolvere/OS-security-event-logger",
    image: OSLogo,
    tech: ["C++", "Linux", "System Programming", "QT", "QML"],
  },
  {
    name: "Finance Tracker",
    description:
      "Track personal income and expenses with a lightweight web interface.",
    github: "https://github.com/SidusSolvere/CipherSchool-FinanceTracker",
    image: Finance,
    tech: ["React", "Node.js", "Express", "Firebase"],
  },
  {
    name: "Leave Manager",
    description: "Employee leave manager with receipt management",
    github: "https://github.com/SidusSolvere/CipherSchool-LeaveManager",
    image: Leave,
    tech: ["React", "Supabase"],
  },
  {
    name: "IoT Smart Parking",
    description:
      "IoT enabled smart parking system that monitors parking availability and optimizes usage.",
    github: "https://github.com/SidusSolvere/IOT-enabled-smart-parking",
    image: iotLogo,
    tech: ["Arduino", "IoT", "Sensors", "C", "ESP-32"],
  },
  {
    name: "Study Planner",
    description:
      "Lightweight PWA designed to schedule and manage study sessions efficiently.",
    github: "https://github.com/SidusSolvere/CipherSchool-StudentStudyPlanner",
    image: Study,
    tech: ["React", "PWA", "IndexedDB"],
  },
  {
    name: "E-Grocery",
    description: "PHP grocery site with customer, seller, admin roles",
    github: "https://github.com/SidusSolvere/Online-grocery-site",
    image: Gorcery,
    tech: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    name: "Catch the Ball",
    description: "Lightweight Unity catch game",
    github: "https://github.com/SidusSolvere/Summer-Internship-project-cse-443",
    image: Box,
    tech: ["Unity", "C#", "Game Dev"],
  },
];

export default function ProjectsHover() {
  const [active, setActive] = useState(projects[0]);

  return (
    <div className="flex min-h-[600px] text-white">
      <h2
        className="
          text-center
          text-5xl font-bold tracking-wide
          text-transparent
          bg-clip-text
          bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
          drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]
          ml-32
          mb-10
        "
      >
        Projects
      </h2>

      <div className="w-1/4 ml-4 flex items-center">
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li
              key={index}
              onMouseEnter={() => setActive(project)}
              className="cursor-pointer text-2xl font-bold tracking-wide text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2">{active.name}</h2>

              <p className="text-gray-400 mb-5">{active.description}</p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {active.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="
  text-xs px-3 py-1 rounded-full
  bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
  text-white font-semibold
  shadow-[0_0_10px_rgba(0,255,255,0.6)]
  border border-white/20
  hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.9)]
  transition duration-300
"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition font-semibold"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
