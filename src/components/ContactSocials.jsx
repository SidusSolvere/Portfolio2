import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
const socials = [
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/SidusSolvere",
    color: "#ffffff",
    x: 40,
    y: 40
  },
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sidlahiri/",
    color: "#0A66C2",
    x: 200,
    y: 20
  },
  {
    name: "twitter",
    icon: <FaTwitter />,
    link: "https://x.com/Sidus_solvere",
    color: "#1DA1F2",
    x: 320,
    y: 120
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/sidus_solvere/",
    color: "#E1306C",
    x: 100,
    y: 220
  },
  {
    name: "youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@sidus_solvere",
    color: "#FF0000",
    x: 260,
    y: 260
  }
];

const connections = [
  [0,1],
  [1,2],
  [0,3],
  [3,4],
  [2,4]
];

export default function ContactConstellation() {

  const [hovered, setHovered] = useState(null);
  const email = "sidlahiri04@gmail.com";

  return (
    <section className="min-h-screen flex items-center justify-center px-10 text-white">

      <div className="grid md:grid-cols-2 gap-20 items-center">

        <div
          className="
          backdrop-blur-xl
          bg-white/5
          border border-cyan-400/30
          rounded-3xl
          p-12
          shadow-[0_0_60px_rgba(0,255,255,0.15)]
          "
        >

          <h2
            className="
            text-4xl font-bold mb-6
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
            drop-shadow-[0_0_25px_rgba(0,255,255,0.7)]
            "
          >
            Contact Me
          </h2>

          <p className="text-gray-300 mb-8 max-w-md">
            Reach out for collaborations, projects, or just to say hi.
          </p>

          <a
  href={`mailto:${email}?subject=Portfolio%20Contact&body=Hi%20Sid,`}
            className="
            flex items-center gap-3
            px-6 py-4
            rounded-xl
            border border-cyan-400/40
            bg-white/5
            backdrop-blur-md
            hover:border-cyan-300
            hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]
            transition
            w-fit
            "
          >
            <FaEnvelope size={20}/>
            {email}
          </a>
<a
  href="../assets/SID1223.pdf"
  download
  className="
  mt-6
  flex items-center gap-3
  px-6 py-4
  rounded-xl
  border border-indigo-400/40
  bg-white/5
  backdrop-blur-md
  hover:border-indigo-300
  hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]
  transition
  w-fit
  "
>
  <FaDownload size={18} />
  Download Resume
</a>
        </div>


        <div className="relative w-[380px] h-[320px]">

          <svg className="absolute inset-0 w-full h-full">

            {connections.map((c, i) => {

              const a = socials[c[0]];
              const b = socials[c[1]];

              const isHovered =
                hovered === c[0] || hovered === c[1];

              return (
                <line
                  key={i}
                  x1={a.x + 24}
                  y1={a.y + 24}
                  x2={b.x + 24}
                  y2={b.y + 24}
                  stroke={isHovered ? socials[hovered]?.color : "white"}
                  strokeWidth="1.6"
                  style={{
                    filter: `drop-shadow(0 0 6px ${
                      isHovered ? socials[hovered]?.color : "white"
                    })`
                  }}
                />
              );
            })}

          </svg>


          {socials.map((social, index) => (

            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              initial={{opacity:0, scale:0}}
              animate={{opacity:1, scale:1}}
              transition={{delay:index*0.2}}
              whileHover={{
                scale:1.3,
                boxShadow:`0 0 20px ${social.color}`
              }}
              style={{
                left:social.x,
                top:social.y
              }}
              className="
              absolute
              flex items-center justify-center
              w-12 h-12
              rounded-full
              backdrop-blur-md
              border border-white/20
              bg-black/40
              text-xl
              "
            >
              <span style={{color:social.color}}>
                {social.icon}
              </span>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}