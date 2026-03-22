import { useEffect, useState } from "react";
import Galaxy from "./Galaxy";

function GalaxyBackground() {
  const [settings, setSettings] = useState({
    density: 1.2,
    starSpeed: 3,
    speed: 2,
  });

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSettings({
          density: 0.6,
          starSpeed: 1.5,
          speed: 1,
        });
      } else if (width < 1024) {
        setSettings({
          density: 0.9,
          starSpeed: 2,
          speed: 1.5,
        });
      } else {
        setSettings({
          density: 1.2,
          starSpeed: 3,
          speed: 2,
        });
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-screen">
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={settings.density}
        glowIntensity={0.2}
        saturation={0}
        hueShift={100}
        twinkleIntensity={0.2}
        rotationSpeed={0.01}
        repulsionStrength={0}
        autoCenterRepulsion={20}
        starSpeed={settings.starSpeed}
        speed={settings.speed}
      />
    </div>
  );
}

export default GalaxyBackground;