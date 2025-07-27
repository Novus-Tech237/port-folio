"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star } from "lucide-react";
import { motion } from "framer-motion";

// Define variants for container and cards
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      icon: <Star className="w-6 h-6" />,
      features: [
        "1 resume per month",
        "Basic ATS scoring",
        "Standard templates",
        "Email support",
        "Basic AI suggestions",
        "Resume analytics dashboard",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "$19",
      period: "per month",
      description: "Best for job seekers",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited resume builds",
        "Advanced ATS scoring",
        "Premium templates",
        "Portfolio Website Building",
        "Priority support",
        "Advanced AI optimization",
        "Custom job matching",
        "Export in multiple formats",
        "Resume analytics dashboard"
      ],
      buttonText: "Start Premium Trial",
      buttonVariant: "hero" as const,
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Crown className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>
            <motion.h2 
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-red-600">Plan</span>.
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade when you need more power. All plans include our core ATS optimization features.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card 
                className={`relative transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-600 shadow-glow scale-105' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-2 shadow-elegant">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    plan.popular ? 'bg-red-600/10 text-red-600' : 'bg-accent text-accent-foreground'
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 7-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
 
export default PricingSection;