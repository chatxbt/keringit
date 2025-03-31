"use client";
import Link from "next/link";
import { FaBook, FaGithub } from "react-icons/fa";

// import { MobileMenu } from "./mobile-menu";

export const NavBar = () => {
  return (
    <nav className="border-b-[3px] border-black bg-[#eefaf4] sticky w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl md:text-3xl font-extrabold text-orange-600">
            Kerin<span className="text-black">Git</span>
          </span>

          <div className="flex items-center justify-center w-fit gap-4 text-xl font-semibold">
            <Link
              href="https://www.notion.so/Keringit-ai-by-inv3-1c3ae727bcad804b881edaa741d25880"
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-black/5 active:bg-black/10"
            >
              <FaBook className="h-5 w-5" />
              <span>Docs</span>
            </Link>

            <Link
              href="https://github.com/chatxbt/keringit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-black/5 active:bg-black/10"
            >
              <FaGithub className="h-5 w-5" />
              <span>Github</span>
            </Link>
          </div>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </nav>
  );
};
