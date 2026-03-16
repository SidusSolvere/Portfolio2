import CircularGallery from "./CircularGallery";

export default function GallerySection() {
  return (
    <div style={{ height: "600px", position: "relative" }}>

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
    3D Projects
  </h2>
      <CircularGallery
        bend={4}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={2}
        scrollEase={0.05}
      />
    </div>
  );
}