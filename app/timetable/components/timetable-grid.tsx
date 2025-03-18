"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Class {
  id: string
  code: string
  title: string
  description: string
  units: string
  day: string
  term: string
  time: string
  room: string
  program: string
  instructor: string
  color: string
}

interface TimetableGridProps {
  classes: Class[]
  onClassSelect: (classData: Class) => void
}

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// Color mapping for class blocks
const colorMap: { [key: string]: { bg: string, hover: string } } = {
  blue: { bg: "bg-blue-50", hover: "hover:bg-blue-100" },
  green: { bg: "bg-green-50", hover: "hover:bg-green-100" },
  red: { bg: "bg-red-50", hover: "hover:bg-red-100" },
  purple: { bg: "bg-purple-50", hover: "hover:bg-purple-100" },
  yellow: { bg: "bg-yellow-50", hover: "hover:bg-yellow-100" },
  pink: { bg: "bg-pink-50", hover: "hover:bg-pink-100" },
  indigo: { bg: "bg-indigo-50", hover: "hover:bg-indigo-100" },
  teal: { bg: "bg-teal-50", hover: "hover:bg-teal-100" }
}

export default function TimetableGrid({ classes, onClassSelect }: TimetableGridProps) {
  // Helper function to get time slot index
  const getTimeSlotIndex = (time: string) => {
    // Convert time format from "0900-1000" to hour
    const hour = parseInt(time.split("-")[0].slice(0, 2))
    return hour - 8 // Assuming 8:00 is the first slot
  }

  // Helper function to get duration in slots
  const getDurationInSlots = (time: string) => {
    const [start, end] = time.split("-")
    const startHour = parseInt(start.slice(0, 2))
    const endHour = parseInt(end.slice(0, 2))
    return endHour - startHour
  }

  // Helper function to get day indices
  const getDayIndices = (day: string) => {
    const dayMap: { [key: string]: number } = {
      "M": 0, "T": 1, "W": 2, "TH": 3, "F": 4
    }
    
    // Handle multiple days (e.g., "MWF")
    if (day.length > 1) {
      return day.split("").map(d => dayMap[d]).filter(i => i !== undefined)
    }
    
    return [dayMap[day]].filter(i => i !== undefined)
  }

  return (
    <div className="relative">
      {/* Time slots column */}
      <div className="absolute left-0 top-0 z-10 w-20 bg-background">
        <div className="h-16 border-b border-r" /> {/* Header spacer */}
        {timeSlots.map((time) => (
          <div
            key={time}
            className="h-24 border-b border-r flex items-center justify-center text-sm text-muted-foreground"
          >
            {time}
          </div>
        ))}
      </div>

      {/* Days header */}
      <div className="ml-20 flex">
        {days.map((day) => (
          <div
            key={day}
            className="flex-1 h-16 border-b flex items-center justify-center text-sm font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="ml-20 relative">
        {timeSlots.map((_, timeIndex) => (
          <div key={timeIndex} className="flex">
            {days.map((_, dayIndex) => (
              <div
                key={`${timeIndex}-${dayIndex}`}
                className="flex-1 h-24 border-b border-r relative"
              />
            ))}
          </div>
        ))}

        {/* Class blocks */}
        {classes.map((classData) => {
          const dayIndices = getDayIndices(classData.day)
          const timeIndex = getTimeSlotIndex(classData.time)
          const duration = getDurationInSlots(classData.time)
          const colors = colorMap[classData.color] || colorMap.blue // Fallback to blue if color not found
          
          if (dayIndices.length === 0) return null

          return dayIndices.map(dayIndex => (
            <div
              key={`${classData.id}-${dayIndex}`}
              className={cn(
                "absolute rounded-lg p-2 cursor-pointer transition-all hover:shadow-lg",
                "border border-border/50 hover:border-border",
                colors.bg,
                colors.hover
              )}
              style={{
                left: `${(dayIndex * 100)}%`,
                top: `${(timeIndex * 96)}px`, // 96px = 24px (height) * 4
                width: `${100}%`,
                height: `${duration * 96}px`, // 96px per hour
              }}
              onClick={() => onClassSelect(classData)}
            >
              <div className="text-xs font-medium">{classData.code}</div>
              <div className="text-xs text-muted-foreground">{classData.room}</div>
              <div className="text-xs text-muted-foreground mt-1">{classData.instructor}</div>
            </div>
          ))
        })}
      </div>
    </div>
  )
} 