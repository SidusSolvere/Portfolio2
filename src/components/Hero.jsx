import RotatingText from "./RotatingText";
import HeroImage from "../assets/sidlogo3.png"; 
import MagicRings from './MagicRings';


export default function HeroGlass() {
  return (
    <div className="w-full min-h-screen flex items-center md:justify-center px-6 md:px-12 lg:px-20  z-10 text-white">

      <div className="flex flex-row md:flex-col items-center  w-full ">

        <div
          style={{ animation: "float 6s ease-in-out infinite" }}
          className="
            max-w-xl w-full
            p-6 md:p-8 lg:p-10
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 flex flex-col items-start gap-2">

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
              rotationInterval={4000}
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
              rotationInterval={4000}
            />

          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            I build modern web applications, interactive software, and immersive
            3D experiences. Passionate about blending engineering with creative
            design.
          </p>

        </div>

<div className="flex items-center justify-center w-full md:w-1/2">   

<div style={{ width: '600px', height: '400px', position: 'absolute' }}>
  <MagicRings
    color="#22d3ee"
    colorTwo="#818cf8"
    ringCount={2}
    speed={3}
    attenuation={15}
    lineThickness={10}
    baseRadius={0.40}
    radiusStep={0.05}
    scaleRate={0.1}
    opacity={0.35}
    blur={5.5}
    noiseAmount={0.04}
    rotation={45}
    ringGap={1.5}
    fadeIn={0.7}
    fadeOut={0.5}
    followMouse={false}
    mouseInfluence={0.2}
    hoverScale={1.2}
    parallax={0.05}
    clickBurst={false}
  />
</div>    <img
  src={HeroImage}
  alt="Hero Illustration"
  className="rounded-full transition-all duration-500             hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]
"
             style={{ animation: "float 6s ease-in-out infinite",width: "300px", height: "auto" }}

/>
</div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </div>
  );
}