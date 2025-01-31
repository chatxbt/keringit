interface ChatStore {
  userInput: string;
  messages: Message[] | [];
  awaiting: boolean;

  setAwaiting: (await: boolean) => void;
  setUserInput: (text: string) => void;
  resetStore: () => void;
  sendUserMessage: () => void;
  sendBotResponse: (message: string) => void;
}

type Message = {
  id: string;
  sender: "user" | "bot";
  message: string;
  timestamp?: string | number;
};
