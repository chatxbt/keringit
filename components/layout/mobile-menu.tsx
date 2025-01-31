"use client";
import { Equal, X } from "lucide-react";
import { links } from "./navlinks";
import Link from "next/link";
import { Socials } from "./socials";
import { useToggle } from "usehooks-ts";

export const MobileMenu = () => {
  const [isOpen, toggleMenu] = useToggle();

  return (
    <>
      <button className="text-white flex sm:hidden" onClick={toggleMenu}>
        <Equal />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 h-screen px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:hidden"
          style={{
            background: `
          radial-gradient(63.94% 63.94% at 50% 0, hsla(0, 0%, 100%, .12) 0, hsla(0, 0%, 100%, 0) 100%),
          url("/Dot_Grid.svg"),
          #020308
        `,
          }}
        >
          <div className="flex items-center justify-between">
            <span className="md:text-xl font-bold text-white font-nohemi">
              SOLCYCLE
            </span>
            <button className="text-white flex sm:hidden" onClick={toggleMenu}>
              <X />
            </button>
          </div>

          <div className="text-gray-400/70 mt-8 flex flex-col gap-3">
            {links.map(({ href, label }) => (
              <p key={label}>
                <Link href={href} className="block">
                  {label}
                </Link>
              </p>
            ))}
          </div>

          <Socials className="mt-auto text-gray-400/70" />
        </div>
      )}
    </>
  );
};
