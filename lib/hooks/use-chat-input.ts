import {
  ChangeEvent,
  KeyboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { useResizeObserver } from "usehooks-ts";
import { toast } from "sonner";

import { useChatStore } from "../hooks";

export const useChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const inputConRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const [isHotKey, setIsHotKey] = useState(false);

  const {
    awaiting,
    messages,
    // sendBotResponse,
    resetStore,
    sendUserMessage,
    setAwaiting,
    setUserInput,
    userInput,
  } = useChatStore();

  const { height: textareaHeight } = useResizeObserver({
    ref: textareaRef as RefObject<HTMLTextAreaElement>,
  });

  const isDisabled = !userInput.trim() || awaiting;
  const isDirty = !!userInput || !!messages.length;

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setUserInput(value);
    if (textareaRef.current) {
      const input = textareaRef.current;
      input.style.height = "auto";
      input.style.height = input.scrollHeight + "px";
    }
  };

  const handleHotKey = (selection: string) => {
    setUserInput(selection);
    setIsHotKey(true);
  };

  //====================FORM SUBMISSION HANDLER====================
  const handleSubmit = async () => {
    if (isDisabled) return;

    if (textareaRef.current) {
      const input = textareaRef.current;
      input.value = "";
      input.style.height = "auto";
    }

    sendUserMessage();

    // Cancel any existing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    // I'm using this to give users control to abort the request while still pending
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // const { data } = await axios.post(
      //   `${SERVER_BASE_URL}/agent/chat`,
      //   {
      //     prompt: userInput.trim(),
      //     name: `angela`,
      //   },
      //   {
      //     signal: controller.signal,
      //   }
      // );

      // const botres = typeof data === "string" ? data : (data?.data as string);
      // sendBotResponse(botres);

      // Clear the controller reference since request is complete
      abortControllerRef.current = null;
    } catch (error) {
      console.error({ error });
      if (!axios.isCancel(error)) {
        toast("Error occurred during request");
        if (process.env.NODE_ENV === "development")
          console.error("Request error:", error);
      }
    } finally {
      setAwaiting(false);
      setIsHotKey(false);
    }
  };

  const handleCancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };

  //====================EFFECTS====================
  useEffect(() => {
    if (isHotKey && !isDisabled) {
      if (buttonRef.current) buttonRef.current.click();
    }
  }, [isHotKey, isDisabled]);

  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages.length]);

  useEffect(() => {
    if (userInput === "" && textareaRef.current) {
      const input = textareaRef.current;
      input.style.height = "auto";
    }
  }, [userInput]);

  useEffect(() => {
    if (textareaHeight && textareaHeight > 18) {
      if (inputConRef.current)
        inputConRef.current.style.alignItems = "flex-end";
    }
  }, [textareaHeight]);

  // This effect is used to trigger a dialogue for confirmation before a user reloads or closes the page. This is important since conversations are not persisted and will be lost on reloads.
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = ""; // Necessary for showing the confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return {
    states: {
      textareaRef,
      inputConRef,
      chatBoxRef,
      isDisabled,
      buttonRef,
      awaiting,
      messages,
      userInput,
    },
    actions: {
      handleChange,
      handleKeyDown,
      handleSubmit,
      setUserInput,
      resetStore,
      handleHotKey,
      handleCancelRequest,
    },
  };
};
