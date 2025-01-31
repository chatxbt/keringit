import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const ThemeButton = ({
  onClick,
  className,
  type = "submit",
  children,
}: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={cn(
        "box bg-[#7D80DA] p-4 text-2xl items-center justify-center flex h-full text-[#1B4332] gap-2 font-bold w-full sm:w-fit",
        className
      )}
    >
      {children}
    </motion.button>
  );
};
