import { Button } from "@/components/ui/button"
import { Plus, Calendar, BookOpen, Users, Settings, Clock, Search } from "lucide-react"
import TimetableGrid from "./components/timetable-grid"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Schedule", icon: Calendar, current: true },
  { name: "Subjects", icon: BookOpen, current: false },
  { name: "Faculty", icon: Users, current: false },
  { name: "Time Slots", icon: Clock, current: false },
  { name: "Settings", icon: Settings, current: false },
]

export default function TimetablePage() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-card px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h2 className="text-lg font-semibold">Academic Planner</h2>
          </div>
          
          {/* Semester Selection */}
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
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            {/* Search */}
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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-foreground">Class Schedule</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Plan and manage your academic schedule for Second Semester 2024-25
              </p>
            </div>

            {/* Timetable */}
            <div className="rounded-xl border bg-card">
              <div className="p-6">
                <TimetableGrid />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 