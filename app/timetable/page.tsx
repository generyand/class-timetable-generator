"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, BookOpen, Users, Settings, Clock, Search, Menu } from "lucide-react"
import TimetableGrid from "./components/timetable-grid"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import ClassDetailsSidebar from "./components/class-details-sidebar"
import ClassDetailsModal from "./components/class-details-modal"

const navigation = [
  { name: "Schedule", icon: Calendar, current: true },
  { name: "Subjects", icon: BookOpen, current: false },
  { name: "Faculty", icon: Users, current: false },
  { name: "Time Slots", icon: Clock, current: false },
  { name: "Settings", icon: Settings, current: false },
]

const selectedClass = {
  code: "1871",
  title: "GE 7",
  description: "ART APPRECIATION",
  units: "3.0",
  day: "M-Sa",
  term: "1st Term",
  time: "1100M-1200A",
  room: "C7",
  program: "IT",
}

// Add term information
const currentTerm = {
  year: "2024-25",
  term: "Second Semester",
  status: "Active"
}

export default function TimetablePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedClassOpen, setSelectedClassOpen] = useState(false)
  const [currentClass, setCurrentClass] = useState<typeof selectedClass | null>(null)

  const handleClassSelect = () => {
    setCurrentClass(selectedClass) // In a real app, this would be the actual selected class
    setSelectedClassOpen(true)
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Left Sidebar - Mobile Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <div className="flex h-full flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4">
            <SheetHeader className="h-16 border-b">
              <SheetTitle className="text-lg font-semibold">Academic Planner</SheetTitle>
            </SheetHeader>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Term</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="text-sm font-semibold">Second Semester 2024-25</div>
            </div>

            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href="#"
                          className={cn(
                            item.current
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Left Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-card px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h2 className="text-lg font-semibold">Academic Planner</h2>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Term</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="text-sm font-semibold">Second Semester 2024-25</div>
          </div>

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className={cn(
                          item.current
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-72 lg:pr-80">
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="border-b">
            {/* Term Info Bar */}
            <div className="bg-muted/50 px-4 py-2 sm:px-6 lg:px-8">
              <div className="flex items-center gap-x-2 text-sm">
                <span className="font-medium text-muted-foreground">AY {currentTerm.year}</span>
                <Badge variant="secondary" className="font-medium">{currentTerm.status}</Badge>
              </div>
            </div>
            
            {/* Main Header */}
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-x-3">
                <h1 className="text-xl font-semibold tracking-tight">{currentTerm.term}</h1>
                <div className="flex items-center gap-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span className="text-sm text-muted-foreground">Regular Classes</span>
                </div>
              </div>
              
              <Button size="sm" className="hidden lg:flex gap-x-2">
                <Plus className="h-4 w-4" />
                Add Class
              </Button>
            </div>
          </div>
        </header>

        <main className="relative">
          <div className="px-0 sm:px-2 lg:px-4">
            <div className="bg-background">
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  <TimetableGrid onClassSelect={handleClassSelect} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Desktop Class Details Sidebar */}
      <ClassDetailsSidebar selectedClass={currentClass} />

      {/* Mobile Class Details Modal */}
      <ClassDetailsModal
        selectedClass={currentClass}
        isOpen={selectedClassOpen}
        onClose={() => setSelectedClassOpen(false)}
      />
    </div>
  )
} 