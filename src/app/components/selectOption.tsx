"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface SelectOptionProps {
  selectedValue: string;
  options: string[];
  handleChange: (newValue: string) => void;
}

const SelectOption = ({
  selectedValue,
  options,
  handleChange,
}: SelectOptionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref to dropdown container

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown if click is outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center px-4 py-[5px] rounded-3xl bg-gray-200 cursor-pointer color-[#003119] hover:bg-gray-300 mx-3"
        style={{ border: "1px solid rgba(0, 49, 25, 0.1)" }}
      >
        {selectedValue}
        <Image
          src="/more.png"
          alt="more icon"
          width={3}
          height={12}
          className="ml-4"
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 p-0.5 bg-gray-900 text-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className=" p-1.5 rounded-none"
            style={{ border: "1px solid rgba(255, 255, 255, 0.16)" }}
          >
            {options.map((option) => (
              <button
                key={option}
                className={`${
                  selectedValue === option
                    ? "color-white"
                    : "color-[rgba(255, 255, 255, 0.6)]"
                } flex items-center justify-between w-full px-4 py-2 text-sm rounded-lg hover:bg-gray-700 focus:outline-none`}
                onClick={() => handleChange(option)}
              >
                {option}
                {selectedValue === option && (
                  <Image
                    src="/selected.png"
                    alt="selected icon"
                    width={12}
                    height={12}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(
  SelectOption,
  (prev, next) => prev.selectedValue === next.selectedValue
);
