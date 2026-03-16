import StaggeredMenu from "./StaggeredMenu";
import logo from "../assets/sidlogo4.png";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About Me", ariaLabel: "Learn about Me", link: "/about" },
  { label: "Projects", ariaLabel: "View our projects", link: "/projects" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://x.com/Sidus_solvere" },
  { label: "GitHub", link: "https://github.com/SidusSolvere" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/sidlahiri/" },
];

function Menu() {
  return (
    <div style={{ height: "100vh" }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={false}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={false}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl={logo}
        accentColor="#5227FF"
      />
    </div>
  );
}

export default Menu;
