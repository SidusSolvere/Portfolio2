import Dock from "./Dock";
import {
  VscHome,
  VscAccount,
  VscCode,
  VscLinkExternal,
  VscMail,
} from "react-icons/vsc";

function PortfolioDock() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      icon: <VscHome size={20} className="text-white"/>,
      label: "Home",
      onClick: () => scrollTo("home"),
    },
    {
      icon: <VscAccount size={20} className="text-white"/>,
      label: "About",
      onClick: () => scrollTo("about"),
    },
    {
      icon: <VscCode size={20} className="text-white"/>,
      label: "Projects",
      onClick: () => scrollTo("projects"),
    },
    {
      icon: <VscLinkExternal size={20} className="text-white"/>,
      label: "Find Me",
      onClick: () => scrollTo("socials"),
    },
    
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock
        items={items}
        panelHeight={70}
        baseItemSize={55}
        magnification={75}
      />
    </div>
  );
}

export default PortfolioDock;