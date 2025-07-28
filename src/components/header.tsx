"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useClerk } from "@clerk/nextjs";
import { useAppContext } from "@/context/appContext";
import axios from "axios";
import { PlayCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function Hero() {
  const { openSignIn } = useClerk();
  const { user } = useAppContext();


  const { data: portfolioData  } = useQuery({
    queryKey: ["portfolioCheck"],
    queryFn: async () => {
      const response = await axios.get('/api/portfolios/check');
      return response.data;
    },
    enabled: !!user,
  });

  const hasPortfolio = portfolioData?.hasPortfolio;

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="md:mt-10 mt-4 text-4xl font-bold text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient md:whitespace-nowrap">
              Welcome to <span className="text-red-600">P</span>ortfolio<span className="text-red-600 animate-bounce">.</span>
            </span>
            <span className="block mt-2 text-xl">
              Showcase your projects <span className="text-red-600">Beautifully</span>
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create stunning website in minutes. No coding needed. Just input your information and let Portfolio transform it to your professional website
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {user ? (
              <Button 
                onClick={()=>{}} 
                className="bg-red-600 text-white hover:bg-red-700"
              >
                {hasPortfolio ? "View My Portfolio" : "Build your Portfolio"}
              </Button>
            ) : (
              <Button 
                onClick={() => openSignIn({ forceRedirectUrl: "/setup" })}
                className="apple-button"
              >
                Get Started
              </Button>
            )}
            <Button variant={'ghost'}>
              <PlayCircle className="h-6 w-6 text-foreground" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <motion.img
              src="/creative.png"
              alt="Achidi Malik-Al Fayçal"
              width={600}
              height={600}
              className="mx-auto mt-16 lg:mt-0 w-[600px]"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
