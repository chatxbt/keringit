"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
// import { FileCode, FolderTree, Send, Rocket, BookOpen } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LandingPage() {
  const [repoUrl, setRepoUrl] = useState("");
  // const [messages, setMessages] = useState<
  //   { role: "user" | "assistant"; content: string }[]
  // >([]);
  // const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle repo submission
    console.log("Submitted repo:", repoUrl);
  };

  // const handleChat = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!inputMessage.trim()) return;

  //   setMessages([...messages, { role: "user", content: inputMessage }]);
  //   setInputMessage("");
  //   // Add AI response logic here
  // };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-20 sm:w-24 md:w-28 flex-shrink-0 md:relative sm:absolute lg:absolute left-0 lg:-translate-x-full lg:ml-32 md:translate-x-10 sm:-translate-y-16 md:-translate-y-0 -translate-x-2 lg:translate-y-10"
          >
            <circle cx="50" cy="50" r="45" fill="#eefaf4" />
            <path
              d="M35 35 L50 35 L50 50 L35 50 Z M50 50 L65 50 L65 65 L50 65 Z M35 65 L50 65 L50 80 L35 80 Z M65 20 L80 20 L80 35 L65 35 Z"
              fill="#00B4D8"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-extrabold text-center mb-4">
            Talk to Your GitHub
            <br />
            Repository
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Transform your GitHub repositories into interactive documentation
            and deploy custom versions with AI assistance.
          </p>
        </div>

        <div className="py-8 px-10 shadow-theme mb-8 rounded-xl border-[3px] bg-[#CAF0F8] border-black">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Url Input */}
            <div className="flex w-full flex-col sm:flex-row gap-8 items-center justify-center sm:max-w-4xl mx-auto">
              <div className="flex-1 w-full border-[3px] bg-white flex items-center justify-start border-black rounded-sm shadow-theme">
                <input
                  placeholder="Enter GitHub repository URL"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  className="w-full shadow-none bg-white border-none bg-transparent outline-none p-4 text-2xl font-semibold placeholder:text-gray-500 placeholder:text-xl placeholder:font-normal"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="border-[3px] bg-[#7D80DA] p-4 text-2xl rounded-sm shadow-theme items-center justify-center flex h-full border-black text-[#1B4332] gap-2 font-bold w-full sm:w-fit"
              >
                <BookOpen className="h-5 w-5" />
                Go
              </motion.button>
            </div>

            {/* Options input */}
            <div className="flex flex-col sm:flex-row gap-x-16 gap-y-4">
              <div className="flex shadow-theme bg-white rounded overflow-hidden border-[3px] border-black">
                <select
                  name="options"
                  id="options"
                  defaultValue="exclude"
                  className="p-2 border-r-[3px] border-black outline-none"
                >
                  <option value="exclude">Exclude</option>
                  <option value="include">Include</option>
                </select>
                <input
                  type="text"
                  name="file_type"
                  id="file_type"
                  placeholder="*.md, src/"
                  className="outline-none p-2 min-w-[200px] placeholder:text-gray-400/80"
                />
              </div>
              {/* Range selector */}
              <div className="w-[200px] sm:w-[200px]">
                <label htmlFor="file_size" className="block text-gray-800 mb-1">
                  Include files under:{" "}
                  <span id="size_value" className="font-bold">
                    3kb
                  </span>
                </label>
                <div className="h-3.5 border-[3px] border-black relative bg-[#E76F51]">
                  <div className="w-12 bg-[#B7E4C7] cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 h-5 shadow-theme border-[3px] border-black" />
                </div>
              </div>
            </div>

            {/* hotkeys */}
            <div className="space-y-2">
              <p>Want to see how it works? Try these example repositories:</p>

              <div className="flex w-full flex-wrap gap-4">
                {["UniswapV3", "Sushiswap"].map((select, i) => (
                  <button
                    key={i}
                    className="px-3 py-1 font-bold bg-[#D8F3DC] hover:bg-[#95B8A1] border-[3px] border-black rounded-sm"
                  >
                    {select}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Main Content Area */}
      </div>
    </div>
  );
}
