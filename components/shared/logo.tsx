import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/vercel.svg"} height={20} width={88} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
