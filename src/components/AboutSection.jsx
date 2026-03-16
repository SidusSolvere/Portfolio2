export default function AboutSection() {
  return (
    <section className="w-full min-h-screen text-white px-10 md:px-24 py-32 relative z-10">

      <div className="max-w-6xl">
        <h2 className="text-2xl md:text-5xl font-light leading-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400
bg-clip-text text-transparent">
          I believe in building software that blends&nbsp;
          <span className="text-cyan-400">engineering</span>,
          <span className="text-indigo-400">creativity</span>, and&nbsp;
          <span className="text-purple-400">interaction</span>.
          <br />
          My goal is to design systems and experiences that are not only
          functional, but engaging, scalable, and intuitive for the people
          who use them.
        </h2>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50">
        This is me.
      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-10 max-w-6xl">

        <div>
          <h3 className="text-5xl md:text-6xl font-light">
            Hi, I'm <span className="text-white font-medium">Sid Lahiri</span>.
          </h3>
        </div>

        <div className="space-y-6 text-white/70 leading-relaxed text-lg">

          <p>
            I'm a Computer Science student and developer focused on building
            modern digital experiences through full-stack development,
            interactive software, and game systems.
          </p>

          <p>
            My work spans across web technologies, software architecture,
            and 3D environments — combining technical problem solving with
            creative design to produce applications that feel dynamic and
            immersive.
          </p>

          <p>
            I enjoy experimenting with new technologies, creating tools,
            exploring game mechanics, and developing interactive visuals
            that push the boundaries between software engineering and design.
          </p>

        </div>

      </div>
    </section>
  );
}