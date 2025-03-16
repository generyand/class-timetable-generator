"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Upload, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme/toggle"
import { Skeleton } from "@/components/ui/skeleton"

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
              {["Features", "How it works", "Pricing"].map((item) => (
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
        <div className="min-h-[calc(100vh-4rem)] flex items-center py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="flex flex-col gap-10 text-center lg:text-left">
              {/* Eyebrow */}
              <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 bg-primary/10 text-primary hover:bg-primary/15">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                New AI-Powered Features
              </Badge>
              
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  AI-Powered Schedule
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Management for Students</span>
                </h1>
                <p className="text-lg xl:text-xl text-muted-foreground max-w-[650px] mx-auto lg:mx-0 leading-relaxed">
                  Transform your academic life with intelligent timetable generation. Upload your schedule or let our AI create the perfect timetable for you.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2 h-14 px-8 text-lg group relative overflow-hidden shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Try AI Generation
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg border-primary/20 hover:bg-primary/5">
                  <Calendar className="w-5 h-5" />
                  Create Manual Schedule
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <span className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary/80"></div>
                    ))}
                  </span>
                  <span>Trusted by <span className="font-medium text-foreground">thousands</span> of students</span>
                </div>
                
                {/* Stats */}
                <Card className="grid grid-cols-3 gap-12 p-8 bg-white/5 border-border/50">
                  {[
                    { value: "50K+", label: "Active Users" },
                    { value: "98%", label: "Success Rate" },
                    { value: "24/7", label: "AI Support" }
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{label}</div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>

            {/* Hero Image/Animation */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '10s' }}></div>
              
              <Card className="relative w-full max-w-[600px] bg-white/5 border-border/50 p-8 hover:shadow-accent/10 hover:border-accent/20">
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
                      <div
                        key={i}
                        className={`aspect-square rounded-lg relative group transition-all ${
                          cell.isActive 
                            ? "bg-primary/15 border border-primary/20" 
                            : cell.isSecondary 
                            ? "bg-secondary/15 border border-secondary/20" 
                            : "bg-muted border border-border/30"
                        } ${isHovered ? "ring-2 ring-accent/50 shadow-lg" : ""}`}
                      >
                        {cell.isActive && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="text-[10px] font-medium text-primary">CS 101</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Floating Elements */}
                <Card className="absolute -top-6 -right-6 shadow-lg p-4 flex items-center gap-3 hover:border-primary/30 hover:shadow-primary/10">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Upload className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">AI Schedule Generation</span>
                </Card>
                
                <Card className="absolute -bottom-6 -left-6 shadow-lg p-4 flex items-center gap-3 hover:border-accent/30 hover:shadow-accent/10">
                  <div className="p-2 rounded-full bg-accent/10">
                    <Calendar className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">Smart Timetabling</span>
                </Card>
                
                {/* Feature Badges */}
                <Badge variant="outline" className="absolute -bottom-3 right-10 shadow-md">
                  <CheckCircle2 className="w-3 h-3 text-primary mr-1" />
                  Conflict Detection
                </Badge>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
