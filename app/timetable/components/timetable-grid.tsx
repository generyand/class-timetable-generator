"use client"

import React from "react"
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

// Time data
const START_HOUR = 8 // 8AM - based on the image
const END_HOUR = 22  // 10PM
const HOURS_TO_DISPLAY = END_HOUR - START_HOUR

// Day data
const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

// Generate time labels (8AM to 10PM)
const timeLabels = Array.from({ length: HOURS_TO_DISPLAY + 1 }, (_, i) => {
  const hour = START_HOUR + i
  const formattedHour = hour < 12 ? hour : hour === 12 ? 12 : hour - 12
  const amPm = hour < 12 ? 'AM' : 'PM'
  return {
    hour,
    label: `${formattedHour}:00 ${amPm}`
  }
})

// Generate half-hour time labels (8:30 AM, 9:30 AM, etc.)
const halfHourLabels = Array.from({ length: HOURS_TO_DISPLAY }, (_, i) => {
  const hour = START_HOUR + i
  const formattedHour = hour < 12 ? hour : hour === 12 ? 12 : hour - 12
  const amPm = hour < 12 ? 'AM' : 'PM'
  return {
    hour,
    label: `${formattedHour}:30 ${amPm}`
  }
})

// Color mapping with darker shades to match the image
const colorMap: { [key: string]: string } = {
  blue: "bg-blue-800 border-blue-500 text-white",
  green: "bg-green-950/80 border-green-600 text-green-100",
  red: "bg-red-950/80 border-red-600 text-red-100",
  purple: "bg-purple-950/80 border-purple-600 text-purple-100",
  yellow: "bg-yellow-950/80 border-yellow-600 text-yellow-100",
  pink: "bg-pink-950/80 border-pink-600 text-pink-100",
  indigo: "bg-indigo-950/80 border-indigo-600 text-indigo-100",
  teal: "bg-teal-950/80 border-teal-600 text-teal-100"
}

export default function TimetableGrid({ classes, onClassSelect }: TimetableGridProps) {
  // Helper to convert time to grid position
  const timeToRow = (time: string): { start: number, end: number } => {
    try {
      // Parse time format like "0900-1000"
      const [startStr, endStr] = time.split("-")
      
      // Parse hours and minutes
      const startHour = parseInt(startStr.slice(0, 2))
      const startMinute = parseInt(startStr.slice(2, 4)) || 0
      
      const endHour = parseInt(endStr.slice(0, 2))
      const endMinute = parseInt(endStr.slice(2, 4)) || 0
      
      // Calculate grid positions (hourly rows)
      const startPosition = (startHour - START_HOUR) + (startMinute / 60)
      const endPosition = (endHour - START_HOUR) + (endMinute / 60)
      
      return { 
        start: startPosition,
        end: endPosition
      }
    } catch (error) {
      console.error("Error parsing time:", time, error)
      return { start: 0, end: 1 } // Default fallback
    }
  }
  
  // Helper to convert day to grid column
  const dayToColumn = (day: string): number[] => {
    // Map days to column indices (0-based)
    const dayMap: { [key: string]: number } = {
      "M": 0, "T": 1, "W": 2, "TH": 3, "F": 4, "S": 5, "SA": 5, "SAT": 5
    }
    
    if (!day) return []
    
    // For MWF format
    if (day === "MWF") {
      return [0, 2, 4] // Monday, Wednesday, Friday
    }
    
    // For TTH format
    if (day === "TTH") {
      return [1, 3] // Tuesday, Thursday
    }
    
    // Handle multiple days with TH special case
    if (day.length > 1) {
      if (day.includes("TH")) {
        const result: number[] = [];
        let i = 0;
        while (i < day.length) {
          if (i + 1 < day.length && day.substring(i, i + 2) === "TH") {
            result.push(dayMap["TH"]);
            i += 2;
          } else {
            const d = day[i];
            if (dayMap[d] !== undefined) {
              result.push(dayMap[d]);
            }
            i++;
          }
        }
        return result;
      }
      
      // Handle other multi-day formats
      return day.split("").map(d => dayMap[d]).filter(i => i !== undefined)
    }
    
    // Single day
    return [dayMap[day]].filter(i => i !== undefined)
  }

  return (
    <div className="w-full overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Schedule #</h2>
      
      {/* Main grid container */}
      <div 
        className="grid bg-[#051220] relative border border-slate-800 rounded-md overflow-hidden"
        style={{
          gridTemplateColumns: "5rem repeat(6, 1fr)",
          gridTemplateRows: `40px repeat(${HOURS_TO_DISPLAY}, 60px)`,
          minHeight: "800px",
        }}
      >
        {/* Empty corner cell */}
        <div className="border-b border-r border-slate-700" style={{ gridRow: "1" }}></div>
        
        {/* Day headers */}
        {days.map((day, index) => (
          <div 
            key={day}
            className="py-2 text-sm font-medium flex items-center justify-center border-b border-r border-slate-700"
            style={{ gridRow: "1", gridColumn: `${index + 2}` }}
          >
            {day}
          </div>
        ))}

        {/* Time column */}
        <div 
          className="border-r border-slate-700"
          style={{ 
            gridRow: `2 / span ${HOURS_TO_DISPLAY}`,
            gridColumn: "1",
          }}
        />
        
        {/* Time labels */}
        {timeLabels.map((timeInfo, i) => (
          <div 
            key={`time-${timeInfo.hour}`}
            className="text-xs text-slate-400 pr-3 flex items-center justify-end h-full"
            style={{ 
              gridRow: i + 2,
              gridColumn: "1",
            }}
          >
            {timeInfo.label}
          </div>
        ))}
        
        {/* Half-hour time labels */}
        {halfHourLabels.map((timeInfo, i) => (
          <div 
            key={`half-time-${timeInfo.hour}`}
            className="text-xs text-slate-500/60 pr-3 flex items-center justify-end"
            style={{ 
              position: 'absolute',
              right: 0,
              top: `calc(${(i + 2) * 60}px + 30px)`, // Position halfway between hour marks
              height: '20px',
              width: '5rem',
              zIndex: 5
            }}
          >
            {timeInfo.label}
          </div>
        ))}
        
        {/* Hour grid cells with half-hour dashed lines */}
        {timeLabels.map((timeInfo, i) => (
          <React.Fragment key={`grid-line-${timeInfo.hour}`}>
            {days.map((day, j) => (
              <div 
                key={`grid-${timeInfo.hour}-${day}`}
                className="border-b border-r border-slate-700/50 relative"
                style={{ 
                  gridRow: i + 2,
                  gridColumn: j + 2,
                }}
              >
                {/* Half-hour dashed line (except for the last hour cell) */}
                {i < timeLabels.length - 1 && (
                  <div 
                    className="absolute w-full border-b border-dashed border-slate-600/40" 
                    style={{ top: 'calc(50% - 0.5px)', left: 0 }}
                  />
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
        
        {/* Class blocks */}
        {classes.map((classData, index) => {
          const dayColumns = dayToColumn(classData.day)
          const { start: rowStart, end: rowEnd } = timeToRow(classData.time)
          const colorClass = colorMap[classData.color] || colorMap.blue
          
          // Skip if we can't position this class
          if (dayColumns.length === 0) return null
          
          return dayColumns.map((colIndex, dayIndex) => {
            if (colIndex < 0 || colIndex >= days.length) return null
            
            return (
              <div
                key={`class-${index}-${dayIndex}`}
                className={cn(
                  "border cursor-pointer flex flex-col h-full p-2 justify-between",
                  colorClass
                )}
                style={{
                  gridColumn: colIndex + 2,
                  gridRowStart: Math.floor(rowStart) + 2,
                  gridRowEnd: Math.ceil(rowEnd) + 2,
                  zIndex: 10
                }}
                onClick={() => onClassSelect(classData)}
              >
                <div className="text-xs font-bold">{classData.code}</div>
                <div className="text-xs">{classData.room}</div>
                <div className="text-xs mt-auto">{classData.instructor}</div>
              </div>
            )
          }).filter(Boolean)
        })}
      </div>
    </div>
  )
} 