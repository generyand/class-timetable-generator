"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Upload, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme/toggle"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

interface GridCell {
  isActive: boolean;
  isSecondary: boolean;
}

export default function Home() {
  const [gridCells, setGridCells] = React.useState<GridCell[]>(
    Array(25).fill({ isActive: false, isSecondary: false })
  );
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Generate random grid on client-side only
    setGridCells(
      Array(25).fill(null).map(() => ({
        isActive: Math.random() > 0.7,
        isSecondary: Math.random() > 0.5
      }))
    );
    setIsLoading(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50">
        <div className="mx-auto px-6 sm:px-8 flex h-16 items-center justify-between max-w-[1440px]">
          <div className="flex items-center gap-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Oras
            </h2>
            <nav className="hidden md:flex gap-8">
              {["How it works", "Examples", "Get Started"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" className="hidden sm:inline-flex hover:bg-primary/5">Sign in</Button>
            <Button className="shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto px-6 sm:px-8 max-w-[1440px]">
        <div className="min-h-[calc(100vh-4rem)] flex items-center pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            <motion.div 
              className="flex flex-col gap-10 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Eyebrow */}
              <motion.div variants={itemVariants}>
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 bg-primary/10 text-primary hover:bg-primary/15">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  AI-Powered Schedule Converter
                </Badge>
              </motion.div>
              
              <motion.div className="space-y-8" variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Schedule into Art</span>
                </h1>
                <p className="text-lg xl:text-xl text-muted-foreground max-w-[650px] mx-auto lg:mx-0 leading-relaxed">
                  Upload a photo of your class schedule and let our AI transform it into a beautiful, organized digital timetable in seconds.
                </p>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Button size="lg" className="gap-2 h-14 px-8 text-lg group relative overflow-hidden shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Schedule
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg border-primary/20 hover:bg-primary/5">
                  <Calendar className="w-5 h-5" />
                  View Examples
                </Button>
              </motion.div>
              
              {/* Features Preview */}
              <motion.div 
                className="flex flex-col gap-6"
                variants={itemVariants}
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                  <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                    <Upload className="mr-2 h-4 w-4 text-primary" />
                    Image to Timetable
                  </Badge>
                  <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                    <Sparkles className="mr-2 h-4 w-4 text-primary" />
                    Beautiful Design
                  </Badge>
                  <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Instant Results
                  </Badge>
                </div>
                
                {/* Key Benefits */}
                <Card className="grid sm:grid-cols-3 gap-6 p-8 bg-white/5 border-border/50">
                  {[
                    {
                      icon: <Upload className="h-6 w-6 text-primary" />,
                      title: "Easy Upload",
                      description: "Just snap a photo or upload your schedule image"
                    },
                    {
                      icon: <Sparkles className="h-6 w-6 text-primary" />,
                      title: "AI Processing",
                      description: "Our AI extracts and organizes your schedule data"
                    },
                    {
                      icon: <Calendar className="h-6 w-6 text-primary" />,
                      title: "Beautiful Result",
                      description: "Get a visually stunning digital timetable"
                    }
                  ].map(({ icon, title, description }) => (
                    <div key={title} className="text-center flex flex-col items-center gap-2">
                      <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
                        {icon}
                      </div>
                      <h3 className="font-medium text-lg">{title}</h3>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </Card>
              </motion.div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div 
              className="relative lg:h-[600px] flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '10s' }}></div>
              
              <motion.div 
                className="relative w-full max-w-[600px] bg-white/5 border-border/50 p-8 hover:shadow-accent/10 hover:border-accent/20 outline rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timetable Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                    <h3 className="font-medium">Your Schedule</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Spring 2025</span>
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Timetable Grid */}
                <div className="grid grid-cols-5 gap-4">
                  {gridCells.map((cell, i) => {
                    const isHovered = i === 7;
                    
                    if (isLoading) {
                      return <Skeleton key={i} className="aspect-square rounded-lg" />;
                    }

                    return (
                      <motion.div
                        key={i}
                        className={`aspect-square rounded-lg relative group transition-all ${
                          cell.isActive 
                            ? "bg-primary/15 border border-primary/20" 
                            : cell.isSecondary 
                            ? "bg-secondary/15 border border-secondary/20" 
                            : "bg-muted border border-border/30"
                        } ${isHovered ? "ring-2 ring-accent/50 shadow-lg" : ""}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {cell.isActive && (
                          <motion.div 
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <div className="text-[10px] font-medium text-primary">CS 101</div>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Card className="absolute -top-6 -right-6 shadow-lg p-4 flex items-center gap-3 hover:border-primary/30 hover:shadow-primary/10">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Upload className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Upload Schedule</span>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }} 
                >
                  <Card className="absolute -bottom-6 -left-6 shadow-lg p-4 flex items-center gap-3 hover:border-accent/30 hover:shadow-accent/10">
                    <div className="p-2 rounded-full bg-accent/10">
                      <Sparkles className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium">Beautiful Design</span>
                  </Card>
                </motion.div>
                
                {/* Feature Badges */}
                <Badge variant="outline" className="absolute -bottom-3 right-10 shadow-md">
                  <Calendar className="w-3 h-3 text-primary mr-1" />
                  Preview
                </Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
