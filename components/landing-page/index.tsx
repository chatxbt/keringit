"use client";

import { useState } from "react";
import { BookOpen, Download, Copy, Send, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { ThemeButton } from "../ui/theme-button";
import { ScrollArea } from "../ui/scroll-area";
import { useChatInput } from "@/lib/hooks";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LandingPage() {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle repo submission
    console.log("Submitted repo:", repoUrl);
  };

  const [activeTab, setActiveTab] = useState<SummaryTabs>("summary");
  const toggleTabs = (tab: SummaryTabs) => setActiveTab(tab);

  const {
    actions: { handleChange, handleKeyDown },
    states: { inputConRef, userInput, buttonRef, textareaRef },
  } = useChatInput();

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-20 sm:w-24 md:w-28 flex-shrink-0 md:relative sm:absolute lg:absolute left-0 lg:-translate-x-full lg:ml-32 md:translate-x-10 sm:-translate-y-16 md:-translate-y-0 -translate-x-2 lg:translate-y-10"
          >
            {/* <circle cx="50" cy="50" r="45" fill="#eefaf4" />
            <path
              d="M35 35 L50 35 L50 50 L35 50 Z M50 50 L65 50 L65 65 L50 65 Z M35 65 L50 65 L50 80 L35 80 Z M65 20 L80 20 L80 35 L65 35 Z"
              fill="#00B4D8"
              stroke="black"
              strokeWidth="2"
            /> */}

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
            Talk to Your GitHub
            <br />
            Repository
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-semibold">
            Transform your GitHub repositories into interactive documentation
            and deploy custom versions with AI assistance.
          </p>
        </div>

        <div className="py-8 px-4 sm:px-11 md:px-16 mb-8 rounded-xl bg-[#CAF0F8] box">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Url Input */}
            <div className="flex w-full flex-col sm:flex-row gap-8 items-center justify-center">
              <div className="flex-1 w-full box bg-white flex items-center justify-start">
                <input
                  placeholder="Enter GitHub repository URL"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  className="w-full shadow-none bg-white border-none bg-transparent outline-none p-4 text-2xl font-semibold placeholder:text-gray-500 placeholder:text-xl placeholder:font-normal"
                />
              </div>
              <ThemeButton>
                <BookOpen className="h-5 w-5" />
                Go
              </ThemeButton>
            </div>

            {/* Options input */}
            <div className="flex flex-col sm:flex-row gap-x-16 gap-y-4">
              <div className="flex shadow-theme bg-white rounded overflow-hidden box p-0">
                <div className="relative border-r-[3px] border-black w-fit">
                  <select
                    name="options"
                    id="options"
                    defaultValue="exclude"
                    className="p-2 pr-8 bg-[#E6E8EB] text-black [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden outline-none !rounded-none"
                  >
                    <option value="exclude">Exclude</option>
                    <option value="include">Include</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
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
                  <div className="w-12 bg-[#B7E4C7] cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 h-5 box p-0 rounded-none" />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
          <div className="">
            {/* Left Panel - Repository Content */}
            <h2 className="font-bold text-xl mb-1">Result</h2>

            <div className="box p-4 bg-white">
              <div className="box mb-4 p-1 flex gap-1">
                <button
                  className={cn(
                    "flex-1 flex-shrink-0 box shadow-none font-semibold",
                    activeTab === "summary"
                      ? "bg-[#7D80DA] text-white"
                      : "bg-transparent"
                  )}
                  onClick={() => toggleTabs("summary")}
                >
                  Summary
                </button>
                <button
                  className={cn(
                    "flex-1 flex-shrink-0 box shadow-none font-semibold",
                    activeTab === "content"
                      ? "bg-[#7D80DA] text-white"
                      : "bg-transparent"
                  )}
                  onClick={() => toggleTabs("content")}
                >
                  File Content
                </button>
              </div>
              {activeTab === "summary" && (
                <div>
                  <div className="flex flex-col gap-4">
                    <div className="box shadow-none p-4 font-mono min-h-[200px] bg-[#CAF0F8]">
                      <p>Repository: </p>
                      <p>Files analyzed: </p>
                      <p className="mt-10">Estimated tokens: </p>
                    </div>
                    <div className="space-x-4 flex w-full">
                      <ThemeButton className="text-base py-2 text-black bg-[#F4A261]">
                        <Download />
                        Download
                      </ThemeButton>
                      <ThemeButton className="text-base py-2 text-black bg-[#F4A261]">
                        <Copy />
                        Copy
                      </ThemeButton>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-20">
                    <div className="font-bold text-xl flex justify-between items-center w-full">
                      Directory Structure
                      <ThemeButton className="text-base py-2 text-black bg-[#F4A261]">
                        <Copy />
                        Copy All
                      </ThemeButton>
                    </div>
                    <textarea
                      readOnly
                      className="box shadow-none p-4 font-mono relative resize-y w-full overflow-y-auto h-[270px] bg-[#CAF0F8] outline-none"
                    />
                  </div>
                </div>
              )}

              {activeTab === "content" && (
                <div className="mt-10">
                  <ThemeButton className="text-base w-fit ml-auto mb-4 py-2 text-black bg-[#F4A261]">
                    <Copy />
                    Copy All
                  </ThemeButton>
                  <textarea
                    readOnly
                    className="p-4 min-h-[500px] shadow-none w-full overflow-y-auto resize-y box bg-[#CAF0F8]"
                    value="No contents loaded yet..."
                  />
                </div>
              )}
            </div>
          </div>

          {/* Chat UI */}
          <div className="flex flex-col">
            <div className="relative flex justify-between">
              <h2 className="text-xl font-semibold mb-1">
                Ask <strong className="font-bold">Kerin</strong>!😊
              </h2>
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-20 sm:w-24 md:w-28 flex-shrink-0 absolute -right-4 -bottom-12 md:-bottom-16 z-10  pointer-events-none"
              >
                <circle cx="50" cy="50" r="45" fill="none" />
                <path
                  d="M50 30 C60 20, 70 20, 70 30 C70 40, 50 50, 50 50 C50 50, 30 40, 30 30 C30 20, 40 20, 50 30 M50 50 C60 40, 70 40, 70 50 C70 60, 50 70, 50 70 C50 70, 30 60, 30 50 C30 40, 40 40, 50 50"
                  fill="#FF006E"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <ScrollArea className="flex-1 min-h-[300px] max-h-[500px] bg-[#D8F3DC] overflow-y-auto mb-4 p-4 rounded-md box text-sm">
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <div className="bg-black rounded-full">
                    <Image
                      src="/kerin.jpg"
                      alt="@Kerin"
                      className="w-8 h-8 border border-[#fbdfd2]/20 rounded-full object-cover object-center"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex-1 text-left font-semibold max-w-fit">
                    <Typewriter
                      options={{
                        strings: "Hi, I’m Kerin! How can I help you today?",
                        autoStart: true,
                        delay: 10,
                        cursor: "",
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollArea>

            <form className="flex gap-2">
              <div
                className="flex w-full flex-col sm:flex-row gap-4 items-center justify-center sm:max-w-4xl mx-auto"
                ref={inputConRef}
              >
                <div className="flex-1 w-full box bg-white flex flex-col sm:flex-row items-center justify-start">
                  <Textarea
                    placeholder="Ask about the repository or request changes..."
                    className="w-full resize-none overflow-y-auto max-h-28 min-h-fit p-4 flex-1 placeholder:text-gray-500 disabled:opacity-100 focus-visible:ring-0 border-none ring-0 placeholder:font-mono placeholder:text-sm min-[420px]:placeholder:text-sm"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={userInput}
                    rows={1}
                    // disabled
                    // disabled={!isMounted}
                    // aria-disabled={!isMounted}
                    ref={textareaRef}
                  />
                </div>

                <motion.button
                  className="bg-[#00B4D8] px-2.5 xs:px-4 flex items-center justify-center gap-1 rounded-md text-black hover:bg-[#2da7bf] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shrink-0 box py-3.5 font-semibold w-full sm:w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  ref={buttonRef}
                >
                  <Send className="h-4 w-4" /> Go!
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

//
