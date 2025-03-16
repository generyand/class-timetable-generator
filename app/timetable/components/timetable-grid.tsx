"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const HOURS = Array.from({ length: 17 }, (_, i) => i + 6) // 6 AM to 10 PM

interface TimeSlot {
  id: string
  subject?: string
  professor?: string
  room?: string
  color?: string
}

export default function TimetableGrid() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  return (
    <div className="h-[calc(100vh-12rem)] grid grid-cols-[auto_repeat(6,1fr)] grid-rows-[auto_repeat(17,1fr)]">
      {/* Corner Header */}
      <div className="sticky top-0 z-20 bg-background border-b border-r p-2">
        <div className="text-sm font-medium text-muted-foreground">Time</div>
      </div>

      {/* Day Headers */}
      {DAYS.map((day) => (
        <div
          key={day}
          className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b p-3 text-center"
        >
          <div className="font-semibold text-foreground">{day}</div>
        </div>
      ))}

      {/* Time Labels and Slots */}
      {HOURS.map((hour) => (
        <>
          {/* Time Label */}
          <div
            key={`time-${hour}`}
            className="border-r bg-muted/5 p-2 text-sm text-muted-foreground flex items-center justify-center"
          >
            <span className="text-xs font-medium">
              {hour % 12 || 12}{hour >= 12 ? "PM" : "AM"}
            </span>
          </div>

          {/* Time Slots */}
          {DAYS.map((day) => (
            <div
              key={`${day}-${hour}`}
              className={cn(
                "relative border-b border-r p-1 transition-all group",
                "hover:bg-accent/50 focus-within:bg-accent/50",
                selectedSlot === `${day}-${hour}` && "ring-2 ring-primary ring-inset"
              )}
              onClick={() => setSelectedSlot(`${day}-${hour}`)}
            >
              {/* Empty Slot Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="h-6 w-6 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Class Content would go here */}
              {/* Example:
              <div className="rounded-md bg-primary/10 p-1 text-xs">
                <div className="font-medium">Math 101</div>
                <div className="text-muted-foreground">Room 204</div>
              </div>
              */}
            </div>
          ))}
        </>
      ))}
    </div>
  )
} 