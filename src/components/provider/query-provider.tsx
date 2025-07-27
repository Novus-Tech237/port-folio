"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "@/context/appContext";
import { ToastProvider } from "./toast-provider";
import React from "react";

// Create a QueryClient instance on the client side.
const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AppContextProvider>
          {children}
          <ToastProvider />
        </AppContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}