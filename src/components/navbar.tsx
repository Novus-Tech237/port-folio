"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { File, MoonIcon, SunIcon, User, Menu, X } from "lucide-react";
import { useAppContext } from "@/context/appContext";
import { useClerk, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import Logo from "./logo";


export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();
  const { openSignIn } = useClerk();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if current route is home page
  const isHomePage = pathname === "/";

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {isHomePage ? (
          <>
            {/* Home page layout: Menu - Logo - Theme/User */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-foreground hover:bg-primary/10 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            <div className="flex items-center">
              <Link href="/" className="-m-1.5 p-1.5 font-bold text-xl">
                <Logo />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </button>
              )}

              {user ? (
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label={"Build Portfolio"}
                      labelIcon={<File size={15} />}
                      onClick={() => router.push(`/resumes`)}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <Button onClick={() => openSignIn()} variant={"outline"}>
                  <User />
                  Account
                </Button>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Other pages layout: Logo - Theme/User */}
            <div className="flex items-center">
              <Link href="/" className="-m-1.5 p-1.5 font-bold text-xl">
                <Logo />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </button>
              )}

              {user ? (
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label={"Build Portfolio"}
                      labelIcon={<File size={15} />}
                      onClick={() => router.push(`/resumes`)}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <Button onClick={() => openSignIn()} variant={"outline"}>
                  <User />
                  Account
                </Button>
              )}
            </div>
          </>
        )}
      </nav>

      {/* Mobile Menu - Only show on home page */}
      {isHomePage && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t z-40">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="#" 
              className="text-sm font-semibold leading-6 text-foreground hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#" 
              className="text-sm font-semibold leading-6 text-foreground hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#" 
              className="text-sm font-semibold leading-6 text-foreground hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              href="#" 
              className="text-sm font-semibold leading-6 text-foreground hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
