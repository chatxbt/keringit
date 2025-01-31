"use client";
import { FaGithub } from "react-icons/fa";

// import { MobileMenu } from "./mobile-menu";

export const NavBar = () => {
  return (
    <nav className="border-b-[3px] border-black bg-emerald-50 sticky w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl md:text-3xl font-bold text-orange-600">
            Kerin<span className="text-black">git</span>
          </span>

          <div className="flex items-center justify-center w-fit gap-2.5">
            <FaGithub className="h-4 w-4" /> GitHub
          </div>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </nav>
  );
};
