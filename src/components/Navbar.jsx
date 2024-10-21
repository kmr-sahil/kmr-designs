import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-[2rem] mt-[1rem] rounded-[16px] px-[0.75rem] py-[0.75rem] bg-gradient-to-br from-[#131313] via-[#41444B] to-[#131313]">
      <Image src={"/orus.svg"} width={60} height={20} alt="logo" className="pl-[0.5rem]" />

      <Link href={"facebook.com"} className="px-[1rem] py-[0.5rem] rounded-[12px] text-[1rem] md:text-[1.25rem] text-center bg-white font-medium">
        Book a Call
      </Link>
    </nav>
  );
}

export default Navbar;
