"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

export default function NextThemeProvider({
  children,
}: {
  children:React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
