"use client";

import React, { useCallback, useState } from "react";
import SelectOption from "./selectOption";
import Image from "next/image";

const SelectOptionsContainer = () => {
  const [courseType, setCourseType] = useState<string>("Software");
  const [members, setMembers] = useState<string>("1000");

  const handleCourseTypeChange = useCallback((value: string) => {
    setCourseType(value);
  }, []);

  const handleMembersChange = useCallback((value: string) => {
    setMembers(value);
  }, []);

  return (
    <div
      className="flex flex-wrap items-center justify-center py-3.5 relative border-2 pl-5 pr-2 rounded-full"
      style={{
        borderColor:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%)",
        borderRadius: "40px",
        borderImageSlice: 1,
        color: "rgba(0, 49, 25, 0.6)",
      }}
    >
      <span>I provide courses on</span>
      <SelectOption
        selectedValue={courseType}
        options={["Software", "Entertainment", "Culture", "Mathemathics"]}
        handleChange={handleCourseTypeChange}
      />
      <span>for</span>
      <SelectOption
        selectedValue={members}
        options={["500", "1000", "2000", "5000"]}
        handleChange={handleMembersChange}
      />
      <span>members</span>
      <div className="p-[11px] rounded-full bg-[#003119] flex items-center justify-center ml-6">
        <Image
          src="/arrow-right.png"
          alt="next button icon"
          width={18}
          height={18}
          className="color-white"
        />
      </div>
    </div>
  );
};

export default SelectOptionsContainer;
