
import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/provider/query-provider";

export const metadata: Metadata = {
  title: "Portfolio | Online CV Platform creator",
  description: "Portfolio is a platform that helps job seekers to create an online CV. Create stunning website in minutes. No coding needed. Just input your information and let Portfolio transform it to your professional website",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="antialiased">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>

  );
}
