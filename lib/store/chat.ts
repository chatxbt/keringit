import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { makeId } from "../utils";

export const useChatStorage = create<ChatStore>()(
  devtools(
    (set, get) => ({
      userInput: "",
      awaiting: false,
      messages: [],

      setUserInput: (userInput) => set({ userInput }),
      setAwaiting: (awaiting) => set({ awaiting }),

      resetStore: () =>
        set({
          userInput: "",
          messages: [],
          awaiting: false,
        }),

      sendUserMessage: () => {
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: makeId(),
              sender: "user",
              message: get().userInput,
              timestamp: new Date().toISOString(),
            },
          ],
          userInput: "",
          awaiting: true,
        }));
      },

      sendBotResponse: (message) => {
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: makeId(),
              sender: "bot",
              message,
              timestamp: new Date().toISOString(),
            },
          ],
          awaiting: false,
        }));
      },
    }),
    { enabled: process.env.NODE_ENV === "development", store: "chatStore" }
  )
);
