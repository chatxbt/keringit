import { useShallow } from "zustand/react/shallow";

import { useChatStorage } from "../store";

// NOTE TO DEVs:  By using zustands `shallow` function or the `useShallow` hook, I'm optimizing performance as this reduces unnecessary `rerenders` and `deep copy`. It only creates shallow copies of the store's state
export const useChatStore = () =>
  useChatStorage(
    useShallow((state) => ({
      awaiting: state.awaiting,
      messages: state.messages,
      userInput: state.userInput,
      sendBotResponse: state.sendBotResponse,
      sendUserMessage: state.sendUserMessage,
      resetStore: state.resetStore,
      setAwaiting: state.setAwaiting,
      setUserInput: state.setUserInput,
    }))
  );
