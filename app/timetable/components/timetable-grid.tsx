"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"

const DAYS = [
  { full: "Monday", short: "MON" },
  { full: "Tuesday", short: "TUE" },
  { full: "Wednesday", short: "WED" },
  { full: "Thursday", short: "THU" },
  { full: "Friday", short: "FRI" },
  { full: "Saturday", short: "SAT" },
]

const HOURS = Array.from({ length: 17 }, (_, i) => i + 6) // 6 AM to 10 PM

interface TimeSlot {
  id: string
  subject?: string
  professor?: string
  room?: string
  color?: string
}

interface TimetableGridProps {
  onClassSelect?: () => void
}

export default function TimetableGrid({ onClassSelect }: TimetableGridProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const handleSlotClick = (slotId: string) => {
    setSelectedSlot(slotId)
    onClassSelect?.()
  }

  const formatHour = (hour: number) => {
    return hour < 10 ? `${hour}AM` : hour === 12 ? "12PM" : hour > 12 ? `${hour - 12}PM` : `${hour}AM`
  }

  return (
    <div className="w-full h-full mt-4 sm:mt-8 md:mt-12">
      <div className="grid grid-cols-[3rem_repeat(6,minmax(0,1fr))] grid-rows-[auto_repeat(17,minmax(2.5rem,1fr))] bg-background/95">
        {/* Corner Header */}
        <div className="sticky top-0 z-20 bg-background border-b border-r">
          <div className="text-[0.65rem] font-medium text-muted-foreground h-8 flex items-center justify-center">
            Time
          </div>
        </div>

        {/* Day Headers */}
        {DAYS.map((day) => (
          <div
            key={day.full}
            className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b h-8 flex items-center justify-center"
          >
            <div className="text-[0.7rem] font-semibold text-foreground">
              {day.short}
            </div>
          </div>
        ))}

        {/* Time Labels and Slots */}
        {HOURS.map((hour) => (
          <>
            {/* Time Label */}
            <div
              key={`time-${hour}`}
              className="border-r bg-muted/5 flex items-center justify-center"
            >
              <span className="text-[0.65rem] font-medium text-muted-foreground">
                {formatHour(hour)}
              </span>
            </div>

            {/* Time Slots */}
            {DAYS.map((day) => (
              <div
                key={`${day.full}-${hour}`}
                className={cn(
                  "relative border-b border-r transition-all touch-manipulation",
                  "active:bg-accent/70",
                  selectedSlot === `${day.full}-${hour}` && "bg-accent/50"
                )}
                onClick={() => handleSlotClick(`${day.full}-${hour}`)}
              >
                {/* Empty Slot Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full" />
                </div>

                {/* Class Content */}
                {selectedSlot === `${day.full}-${hour}` && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                )}
              </div>
            ))}
          </>
        ))}

        {/* FAB for adding new class */}
        <div className="fixed right-4 bottom-4 lg:hidden">
          <button className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Plus className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
} 