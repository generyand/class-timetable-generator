"use client"

import { Button } from "@/components/ui/button"
import { Plus, Calendar, BookOpen, Users, Settings, Clock, Search, GraduationCap, MapPin, Code, Building, Pencil, Trash2 } from "lucide-react"
import TimetableGrid from "./components/timetable-grid"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const navigation = [
  { name: "Schedule", icon: Calendar, current: true },
  { name: "Subjects", icon: BookOpen, current: false },
  { name: "Faculty", icon: Users, current: false },
  { name: "Time Slots", icon: Clock, current: false },
  { name: "Settings", icon: Settings, current: false },
]

const quickStats = [
  { name: "Total Units", value: "21", icon: GraduationCap },
  { name: "Classes", value: "7", icon: BookOpen },
  { name: "Rooms", value: "5", icon: MapPin },
]

const upcomingClasses = [
  {
    code: "1871",
    title: "GE 7",
    description: "ART APPRECIATION",
    time: "11:00 AM - 12:00 PM",
    room: "C7",
  },
  // Add more classes as needed
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

export default function TimetablePage() {
  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
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
      <div className="lg:pl-72 lg:pr-80 flex-1">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center gap-x-4 lg:gap-x-6">
              <div className="relative flex flex-1">
                <Search className="pointer-events-none absolute inset-y-0 left-3 h-full w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search classes, rooms, or faculty..."
                  className="w-full pl-10"
                />
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Subject
              </Button>
            </div>
          </div>
        </div>

        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-foreground">Class Schedule</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Plan and manage your academic schedule for Second Semester 2024-25
              </p>
            </div>

            <div className="rounded-xl border bg-card">
              <div className="p-6">
                <TimetableGrid />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:right-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-6 overflow-y-auto border-l bg-card px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <h2 className="text-lg font-semibold">Class Details</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {selectedClass ? (
            <div className="space-y-6">
              {/* Header Information */}
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {selectedClass.code}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {selectedClass.program}
                  </Badge>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{selectedClass.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedClass.description}</p>
              </div>

              <Separator />

              {/* Class Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Units</CardTitle>
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{selectedClass.units}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Term</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm font-medium">{selectedClass.term}</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Schedule Information */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedClass.day}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedClass.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span>Room {selectedClass.room}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button className="w-full" variant="default">
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Class
                </Button>
                <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Class
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="text-muted-foreground">
                <Calendar className="mx-auto h-12 w-12 opacity-50" />
                <h3 className="mt-4 text-lg font-medium">No Class Selected</h3>
                <p className="mt-2 text-sm">Select a class from the timetable to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 