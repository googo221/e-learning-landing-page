import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between p-10">
      <Image
        src="/stars-top-right-icon.png"
        alt="stars-icon"
        width={64}
        height={32}
      />
      <button className="font-helvetica-neue font-medium px-4 py-2 bg-[#003119] text-white rounded-full hover:opacity-90 transition">
        Book a demo
      </button>
    </div>
  );
};

export default Header;
