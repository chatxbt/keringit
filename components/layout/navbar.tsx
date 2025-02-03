"use client";
import { FaGithub } from "react-icons/fa";

// import { MobileMenu } from "./mobile-menu";

export const NavBar = () => {
  return (
    <nav className="border-b-[3px] border-black bg-[#eefaf4] sticky w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl md:text-3xl font-extrabold text-orange-600">
            Kerin<span className="text-black">git</span>
          </span>

          <div className="flex items-center justify-center w-fit gap-2.5 text-xl">
            <FaGithub className="h-5 w-5" /> GitHub
          </div>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </nav>
  );
};
