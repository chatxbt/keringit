import { Send, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useChatInput } from "@/lib/hooks";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";

export function ChatPanel() {
  const {
    actions: { handleChange, handleKeyDown },
    states: { inputConRef, userInput, buttonRef, textareaRef },
  } = useChatInput();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Here you would handle the chat submission
    console.log("Submitted chat:", userInput);
    // Clear input or other actions would happen here
  };

  return (
    <div className="flex flex-col">
      <div className="relative flex justify-between">
        <h2 className="text-xl font-semibold mb-1">
          Ask <strong className="font-bold">Kerin</strong>!😊
        </h2>
        <div className="relative group">
          <button
            className="px-4 py-2 font-bold bg-[#d8f3dc] text-black border-[3px] border-black rounded-sm 
            flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none
            transition-all duration-200 cursor-not-allowed opacity-80"
            disabled
          >
            <Rocket className="h-5 w-5" />
            Deploy
          </button>

          {/* Tooltip */}
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 
            bg-black text-white px-3 py-1.5 rounded-md text-sm font-medium
            opacity-0 group-hover:opacity-100 transition-opacity duration-200
            border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]
            pointer-events-none whitespace-nowrap"
          >
            Coming Soon! 🚀
            {/* Arrow */}
            <div
              className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 
              border-l-[6px] border-l-transparent
              border-r-[6px] border-r-transparent
              border-t-[6px] border-t-black"
            ></div>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 min-h-[300px] max-h-[500px] bg-[#D8F3DC] overflow-y-auto mb-4 p-4 rounded-md box">
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
                  strings: "Ask anything about the git repo?",
                  autoStart: true,
                  delay: 10,
                  cursor: "",
                }}
              />
            </div>
          </div>
        </div>
      </ScrollArea>

      <form className="flex gap-2" onSubmit={handleSubmit}>
        <div
          className="flex w-full flex-col sm:flex-row gap-4 items-center justify-center sm:max-w-4xl mx-auto"
          ref={inputConRef}
        >
          <div className="flex-1 w-full box bg-white flex flex-col sm:flex-row items-center justify-start">
            <Textarea
              placeholder="Ask about the project or code"
              className="w-full resize-none overflow-y-auto max-h-28 min-h-fit p-4 flex-1 placeholder:text-gray-500 disabled:opacity-100 focus-visible:ring-0 border-none ring-0 placeholder:font-mono placeholder:text-xs min-[420px]:placeholder:text-sm"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={userInput}
              rows={1}
              ref={textareaRef}
              aria-label="Chat message input"
            />
          </div>

          <motion.button
            className="bg-[#00B4D8] px-2.5 xs:px-4 flex items-center justify-center gap-1 rounded-md text-black hover:bg-[#2da7bf] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shrink-0 box py-3.5 font-semibold w-full sm:w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            ref={buttonRef}
            type="submit"
          >
            <Send className="h-4 w-4" /> Go!
          </motion.button>
        </div>
      </form>
    </div>
  );
}
