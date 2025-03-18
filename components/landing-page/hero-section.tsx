import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="text-center mb-12 relative">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-20 sm:w-24 md:w-28 flex-shrink-0 md:relative sm:absolute lg:absolute left-0 lg:-translate-x-full lg:ml-32 md:translate-x-10 sm:-translate-y-16 md:-translate-y-0 -translate-x-2 lg:translate-y-10"
      >
        <circle cx="50" cy="50" r="45" fill="#eefaf4" />
        <path
          d="M50 50 C40 30, 60 30, 50 10 M50 50 C70 40, 70 60, 90 50 M50 50 C60 70, 40 70, 50 90 M50 50 C30 60, 30 40, 10 50"
          fill="#FB5607"
          stroke="black"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="8"
          fill="#FB5607"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <h1 className="text-4xl xs:text-5xl md:text-6xl font-extrabold text-center mb-4">
        Prompt - Friendly <br />
        Web3 Codebases
      </h1>
      <p className="text-lg text-black/60 max-w-2xl mx-auto font-semibold">
        Turn any web3 Git repository into interactive and collaborative
        codebases, make custom versions and deploy to Base, Solana, MegaETH, BTC
        or any L1.
      </p>
    </div>
  );
}
