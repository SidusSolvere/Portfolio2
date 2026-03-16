import Galaxy from "./Galaxy";

function GalaxyBackground() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1.2}
        glowIntensity={0.08}
        saturation={0}
        hueShift={100}
        twinkleIntensity={0.2}
        rotationSpeed={0.01}
        repulsionStrength={0}
        autoCenterRepulsion={20}
        starSpeed={3}
        speed={2}
      />
    </div>
  );
}

export default GalaxyBackground;