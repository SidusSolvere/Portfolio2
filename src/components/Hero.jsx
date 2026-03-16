import RotatingText from "./RotatingText";

export default function HeroGlass() {
  return (
    <section className="w-full h-screen flex items-center justify-start px-20 relative z-10 text-white">

      <div
        style={{
          animation: "float 6s ease-in-out infinite"
        }}
        className="
        max-w-xl p-10
        rounded-3xl

        backdrop-blur-xl backdrop-saturate-150
        bg-black/30
        border border-white/10

        shadow-[0_0_40px_rgba(0,255,255,0.08)]
        hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]

        transform-gpu
        transition-all duration-500
      "
      >

        <h1 className="text-5xl font-bold leading-tight mb-6 flex flex-col items-start gap-2">

          <RotatingText
            texts={["FULL-STACK", "SOFTWARE", "3D"]}
            mainClassName="
              px-3 py-1
              w-fit
              bg-cyan-400/90
              text-black
              rounded-lg
              shadow-[0_0_15px_rgba(0,255,255,0.5)]
              transform-gpu
              transition-all duration-500
              hover:scale-110
            "
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          <RotatingText
            texts={["Developer", "Engineer", "Designer"]}
            mainClassName="
              px-3 py-1
              bg-indigo-400/90
              text-black
              rounded-lg
              shadow-[0_0_15px_rgba(120,120,255,0.6)]
              transform-gpu
              transition-all duration-500
              hover:scale-110
            "
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I build modern web applications, interactive software, and immersive
          3D experiences. Passionate about blending engineering with creative
          design.
        </p>

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