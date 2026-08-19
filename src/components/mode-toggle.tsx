"use client";

import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center p-6">
      <AnimatedThemeToggler
        fromCenter={false}
        theme={theme === "dark" ? "dark" : "light"}
        onThemeChange={setTheme}
      />
    </div>
  );
}
