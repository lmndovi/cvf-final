import Link from "next/link";
import React, { ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ children }) => {
  return (
    <button className="bg-red-600 py-1 px-2 rounded-lg  text-white">
      <Link href="/contact"> {children}</Link>
    </button>
  );
};

export default NavButton;
