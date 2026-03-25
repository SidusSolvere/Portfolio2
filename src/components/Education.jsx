import { FaGraduationCap } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function EducationGlass() {
  return (
    <div className="w-full  flex flex-col  px-6 md:px-12 lg:px-6 my-0 text-white">
      <h2
        className="
           text-center
    text-5xl font-bold tracking-wide
    text-transparent
    bg-clip-text
    bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
    drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]
    mb-16
        "
      >
        Education
      </h2>
      <div
        style={{ animation: "float 6s ease-in-out infinite" }}
        className="
        flex flex-row items-center justify-between
        p-12 md:p-8 lg:p-10
        rounded-3xl
        backdrop-blur-xl backdrop-saturate-150
        bg-black/30
        border border-white/10
        shadow-[0_0_40px_rgba(0,255,255,0.08)]
        hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]
        transition-all duration-500
      "
      >
        <div className="flex flex-row  w-full">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <FaGraduationCap className="text-cyan-300" />
              <h3 className="text-xl font-semibold">B.Tech Computer Science</h3>
            </div>
            <p className="text-m text-gray-400">
              Lovely Professional University
            </p>
            <p className="text-m text-cyan-300 mb-1">2022 - Present</p>
            <p className="text-gray-300 text-sm">CGPA: 8.22</p>
          </div>
        </div>

        <div className="">
          <img
            src={logo}
            alt="Education"
            className="
            object-contain
            rounded-xl
            border border-cyan-400/30
            shadow-[0_0_20px_rgba(0,255,255,0.3)]
            hover:scale-105
            transition
          "
            width="100px"
          />
        </div>

        <style>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0px); }
      }
    `}</style>
      </div>
    </div>
  );
}
