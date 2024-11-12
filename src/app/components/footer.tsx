import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="flex items-center justify-center mb-8">
        <Image src="/logo-33.png" alt="logo" width={107} height={24} />
        <Image
          src="/logo-81.png"
          alt="logo"
          width={50}
          height={28}
          className="mx-10"
        />
        <Image src="/logo-22.png" alt="logo" width={105} height={24} />
        <Image
          src="/logo-77.png"
          alt="logo"
          width={68}
          height={26}
          className="ml-10"
        />
      </div>
      <p style={{ color: "rgba(0, 49, 25, 0.6)" }}>
        Trusted by 35,000+ users to engage learners and ensuring
      </p>
    </div>
  );
};

export default Footer;
