import { FaGraduationCap } from "react-icons/fa";

export default function EducationGlass() {
  return (
    <div className="w-full flex flex-col px-6 md:px-12 lg:px-6 text-white">
      
      <h2
        className="
        text-center
        text-5xl font-bold tracking-wide
        text-transparent
        bg-clip-text
        bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
        drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]
        mb-14 p-8
      "
      >
        Education
      </h2>

      <div className="flex flex-col gap-8">

        {[{
          title: "B.Tech Computer Science",
          school: "Lovely Professional University",
          time: "2023 - Present",
          extra: "CGPA: 8.22",
          showLogo: true
        },
        {
          title: "Senior Secondary (12th)",
          school: "Aklank Public School",
          time: "2020 - 2022",
          extra: "Percentage: 85%"
        },
        {
          title: "Secondary (10th)",
          school: "DPS",
          time: "2019 - 2020",
          extra: "Percentage: 85%"
        }].map((item, i) => (
          
          <div
            key={i}
            style={{ animation: "float 6s ease-in-out infinite" }}
            className="
            flex items-center justify-between
            p-8 md:p-6 lg:p-8
            rounded-3xl
            backdrop-blur-xl backdrop-saturate-150
            bg-black/30
            border border-white/10
            shadow-[0_0_40px_rgba(0,255,255,0.08)]
            hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]
            transition-all duration-500
          "
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-cyan-300" />
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm md:text-base">
                {item.school}
              </p>

              <p className="text-cyan-300 text-sm mt-1">
                {item.time}
              </p>

              <p className="text-gray-300 text-sm mt-1">
                {item.extra}
              </p>
            </div>

            
          </div>
        ))}

      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}