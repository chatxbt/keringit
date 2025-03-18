import React from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  "aria-label"?: string;
};

export function Select({
  options,
  value,
  onChange,
  className,
  "aria-label": ariaLabel,
}: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 pr-8 bg-white border-2 border-black rounded-md appearance-none"
        aria-label={ariaLabel}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </div>
    </div>
  );
}
