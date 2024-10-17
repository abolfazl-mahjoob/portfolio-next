import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link className="logo" href={"/"}>
      <Image width="100" height={38} src="/logo.png" alt="abolfazl mr" />
    </Link>
  );
}

export default Logo;
