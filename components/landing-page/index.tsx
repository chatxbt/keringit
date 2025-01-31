"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileCode, FolderTree, Send, Rocket, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LandingPage() {
  const [repoUrl, setRepoUrl] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle repo submission
    console.log("Submitted repo:", repoUrl);
  };

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages([...messages, { role: "user", content: inputMessage }]);
    setInputMessage("");
    // Add AI response logic here
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
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

        <form
          onSubmit={handleSubmit}
          className="flex gap-8 md:px-8 mb-8 items-center justify-center sm:max-w-4xl mx-auto"
        >
          <div className="flex-1 border-[3px] bg-white border-black items-center rounded-md shadow-theme">
            <input
              placeholder="Enter GitHub repository URL"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full shadow-none border-none bg-transparent outline-none p-4 text-lg placeholder:text-gray-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="border-[3px] bg-[#FF4081] p-4 text-lg rounded-md shadow-theme items-center justify-center flex h-full border-black gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Go
          </motion.button>
        </form>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Repository Content */}
          <div className="p-4 rounded-xl border-[3px] bg-white border-black">
            <Tabs defaultValue="files">
              <TabsList className="mb-4">
                <TabsTrigger value="files">
                  <FileCode className="mr-2 h-4 w-4" />
                  Text Content
                </TabsTrigger>
                <TabsTrigger value="structure">
                  <FolderTree className="mr-2 h-4 w-4" />
                  File Structure
                </TabsTrigger>
              </TabsList>

              <TabsContent value="files">
                <ScrollArea className="h-[600px] overflow-y-auto w-full rounded-md border p-4">
                  <pre className="text-sm">
                    {/* Repository content will go here */}
                    No repository content loaded yet.
                  </pre>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="structure">
                <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                  <div className="text-sm">
                    {/* File structure will go here */}
                    No file structure loaded yet.
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Panel - Chat Interface */}
          <div className="p-4 rounded-xl border-[3px] bg-white border-black">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Ask Kerin</h2>
              <Button variant="outline">
                <Rocket className="mr-2 h-4 w-4" />
                Deploy
              </Button>
            </div>

            <ScrollArea className="flex-1 h-[500px] overflow-y-auto mb-4 p-4 rounded-md border">
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <form onSubmit={handleChat} className="flex gap-2">
              <Input
                placeholder="Ask about the repository or request changes..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 shadow-none"
              />
              <Button type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
