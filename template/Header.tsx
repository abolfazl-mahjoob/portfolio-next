import Hi from "@/components/header/Hi";
import Logo from "@/components/header/Logo";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Hi />
    </div>
  );
}

export default Header;
