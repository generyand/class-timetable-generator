import { Button } from "@/components/ui/button";
import { Calendar, Upload, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
        <div className="container max-w-[1440px] mx-auto px-6 sm:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Oras
            </h2>
            <nav className="hidden md:flex gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it works</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container max-w-[1440px] mx-auto px-6 sm:px-8">
        <div className="min-h-[calc(100vh-4rem)] flex items-center py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="flex flex-col gap-10 text-center lg:text-left">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  AI-Powered Schedule
                  <span className="block text-primary">Management for Students</span>
                </h1>
                <p className="text-lg xl:text-xl text-muted-foreground max-w-[650px] mx-auto lg:mx-0">
                  Transform your academic life with intelligent timetable generation. Upload your schedule or let our AI create the perfect timetable for you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2 h-14 px-8 text-lg">
                  <Sparkles className="w-5 h-5" />
                  Try AI Generation
                </Button>
                <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg">
                  <Calendar className="w-5 h-5" />
                  Create Manual Schedule
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-12 p-8 rounded-xl bg-secondary/50">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">AI Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Animation */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="aspect-square w-full max-w-[600px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl absolute -z-10 animate-pulse"></div>
              <div className="relative w-full max-w-[600px] bg-white/5 border rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-5 gap-4">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg ${
                        Math.random() > 0.7 
                          ? "bg-primary/20" 
                          : Math.random() > 0.5 
                          ? "bg-secondary/20" 
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-background border shadow-lg rounded-lg p-4 flex items-center gap-3">
                  <Upload className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">AI Schedule Generation</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background border shadow-lg rounded-lg p-4 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Smart Timetabling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
