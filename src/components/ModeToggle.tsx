"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true); // Ensures this component renders only after the client-side mount
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={handleThemeToggle}>
      {theme === "light" ? <Moon /> : <Sun />}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
