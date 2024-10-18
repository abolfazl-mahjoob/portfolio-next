import Hi from "@/components/header/Hi";
import Logo from "@/components/header/Logo";

function Header() {
  return (
    <div id="header" className="flex z-10 items-center justify-between">
      <Logo />
      <Hi />
    </div>
  );
}

export default Header;
