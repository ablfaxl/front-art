import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 items-center",
          className
        )}
      >
        <input
          type={type}
          className="border-none outline-none focus:ring-0"
          ref={ref}
          {...props}
        />

        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1356 13.9973C11.8151 15.1215 10.1035 15.8 8.23332 15.8C4.05437 15.8 0.666656 12.4122 0.666656 8.23329C0.666656 4.05434 4.05437 0.666626 8.23332 0.666626C12.4123 0.666626 15.8 4.05434 15.8 8.23329C15.8 10.0921 15.1297 11.7944 14.0177 13.1116L17.6497 16.7436L16.7658 17.6275L13.1356 13.9973ZM14.55 8.23329C14.55 11.7219 11.7219 14.55 8.23332 14.55C4.74472 14.55 1.91666 11.7219 1.91666 8.23329C1.91666 4.74469 4.74472 1.91663 8.23332 1.91663C11.7219 1.91663 14.55 4.74469 14.55 8.23329Z"
            fill="black"
            fillOpacity="0.7"
          />
        </svg>
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
