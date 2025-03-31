import { useState } from "react";
import { Copy, Download } from "lucide-react";
import { ThemeButton } from "../ui/theme-button";
import { cn } from "@/lib/utils";
import type { SummaryTabs } from "./types";

export function ResultPanel() {
  const [activeTab, setActiveTab] = useState<SummaryTabs>("summary");
  const toggleTabs = (tab: SummaryTabs) => setActiveTab(tab);

  return (
    <div>
      <div className="relative flex justify-between">
        <h2 className="font-bold text-xl mb-1">Result</h2>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-20 sm:w-24 md:w-28 flex-shrink-0 absolute -right-4 -bottom-12 md:-bottom-16 z-10 pointer-events-none"
          aria-hidden="true"
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
            aria-pressed={activeTab === "summary"}
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
            aria-pressed={activeTab === "content"}
          >
            File Content
          </button>
        </div>

        {activeTab === "summary" && <SummaryTab />}
        {activeTab === "content" && <ContentTab />}
      </div>
    </div>
  );
}

function SummaryTab() {
  return (
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
        <div className="font-bold text-lg flex justify-between items-center w-full">
          Directory Structure
          <ThemeButton className="text-base w-fit text-black bg-[#F4A261]">
            <Copy />
            Copy All
          </ThemeButton>
        </div>
        <textarea
          readOnly
          className="box shadow-none p-4 font-mono relative resize-y w-full overflow-y-auto h-[270px] bg-[#CAF0F8] outline-none"
          aria-label="Directory structure"
        />
      </div>
    </div>
  );
}

function ContentTab() {
  return (
    <div className="mt-10">
      <ThemeButton className="text-base w-fit ml-auto mb-4 py-2 text-black bg-[#F4A261]">
        <Copy />
        Copy All
      </ThemeButton>
      <textarea
        readOnly
        className="p-4 min-h-[500px] shadow-none w-full overflow-y-auto resize-y box bg-[#CAF0F8]"
        value="No contents loaded yet..."
        aria-label="File contents"
      />
    </div>
  );
}
