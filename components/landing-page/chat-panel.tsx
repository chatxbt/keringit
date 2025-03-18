import { Send } from "lucide-react";
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
          Chat <strong className="font-bold">Code</strong>!😊
        </h2>
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
                  strings: "What about this repo do you want to know?",
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
              placeholder="Ask about the repository or request changes..."
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
