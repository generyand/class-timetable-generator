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
const START_HOUR = 7 // 7AM
const END_HOUR = 22  // 10PM
const MINUTES_PER_INTERVAL = 10
const INTERVALS_PER_HOUR = 60 / MINUTES_PER_INTERVAL
const TOTAL_INTERVALS = (END_HOUR - START_HOUR) * INTERVALS_PER_HOUR

// For time labels (only show hour marks)
const hourLabels = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => {
  const hour = START_HOUR + i
  const formattedHour = hour < 12 ? `${hour}:00` : hour === 12 ? `12:00` : `${hour - 12}:00`
  // Include AM/PM designation to make display clearer
  const amPm = hour < 12 ? 'AM' : 'PM'
  return { 
    hour,
    label: formattedHour,
    displayLabel: `${formattedHour}${hour === 12 || hour === 0 ? ' ' : ' '}${amPm}`
  }
})

// Day data
const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

// Color mapping with darker shades to match the image
const colorMap: { [key: string]: string } = {
  blue: "bg-blue-900/30 border-blue-600",
  green: "bg-green-900/30 border-green-600",
  red: "bg-red-900/30 border-red-600",
  purple: "bg-purple-900/30 border-purple-600",
  yellow: "bg-yellow-900/30 border-yellow-600",
  pink: "bg-pink-900/30 border-pink-600",
  indigo: "bg-indigo-900/30 border-indigo-600",
  teal: "bg-teal-900/30 border-teal-600"
}

export default function TimetableGrid({ classes, onClassSelect }: TimetableGridProps) {
  // Helper to convert time to grid row
  const timeToRow = (time: string): { start: number, end: number } => {
    try {
      const [startStr, endStr] = time.split("-")
      
      // Parse hours and minutes
      const startHour = parseInt(startStr.slice(0, 2))
      const startMinute = parseInt(startStr.slice(2, 4)) || 0
      
      const endHour = parseInt(endStr.slice(0, 2))
      const endMinute = parseInt(endStr.slice(2, 4)) || 0
      
      // Calculate grid rows (each row is 10 minutes)
      const startRow = ((startHour - START_HOUR) * INTERVALS_PER_HOUR) + Math.floor(startMinute / MINUTES_PER_INTERVAL) + 1 // +1 for header row
      const endRow = ((endHour - START_HOUR) * INTERVALS_PER_HOUR) + Math.ceil(endMinute / MINUTES_PER_INTERVAL) + 1 // +1 for header row
      
      return { start: startRow, end: endRow }
    } catch (error) {
      console.error("Error parsing time:", time, error)
      return { start: 1, end: 2 } // Default to first interval
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
        className="grid bg-[#051220] relative border-r border-slate-800"
        style={{
          gridTemplateColumns: "5rem repeat(6, 1fr)",
          gridTemplateRows: `auto repeat(${TOTAL_INTERVALS}, minmax(2px, 1fr))`,
          minHeight: "600px",
        }}
      >
        {/* Empty corner cell */}
        <div className="border-b border-r border-slate-800"></div>
        
        {/* Day headers */}
        {days.map((day, index) => (
          <div 
            key={day}
            className={cn(
              "py-2 text-sm font-medium flex items-center justify-center border-b border-slate-800",
              "border-r border-slate-800"
            )}
          >
            {day}
          </div>
        ))}
        
        {/* Time labels - only show hour marks (skip 7AM as first line) */}
        {hourLabels.map((timeInfo, i) => {
          // Skip the 7AM label (first hour)
          if (timeInfo.hour === 7) return null;
          
          return (
            <div 
              key={`hour-${timeInfo.hour}`}
              className="text-xs text-slate-500 pr-2 text-right border-r border-slate-800 absolute"
              style={{ 
                // Position at the exact hour line
                top: `calc(${(i * INTERVALS_PER_HOUR) + 2 - 0.5} * var(--grid-row-height, 1fr))`,
                left: '0',
                width: '5rem',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                // Use a negative z-index to ensure it appears behind grid lines
                zIndex: '1'
              }}
            >
              {timeInfo.displayLabel}
            </div>
          );
        })}
        
        {/* Hour marker lines (solid borders) */}
        {hourLabels.map((timeInfo, i) => (
          <React.Fragment key={`hour-line-${timeInfo.hour}`}>
            {days.map((__, j) => (
              <div 
                key={`hour-${timeInfo.hour}-day-${j}`}
                className={cn(
                  "border-b border-slate-800/30",
                  i === 0 ? "border-t" : "",
                  "border-r border-slate-800"
                )}
                style={{ 
                  gridRow: `${(i * INTERVALS_PER_HOUR) + 2}`,
                  gridColumn: `${j + 2}`,
                }}
              />
            ))}
          </React.Fragment>
        ))}
        
        {/* Time column grid cells for proper column structure */}
        {hourLabels.map((timeInfo, i) => (
          <div 
            key={`time-cell-${timeInfo.hour}`}
            className="border-r border-slate-800"
            style={{ 
              gridRow: `${(i * INTERVALS_PER_HOUR) + 2} / span ${INTERVALS_PER_HOUR}`,
              gridColumn: "1",
            }}
          />
        ))}
        
        {/* Half-hour marker lines (dashed borders) */}
        {Array.from({ length: END_HOUR - START_HOUR }).map((_, i) => {
          const hour = START_HOUR + i
          return (
            <React.Fragment key={`half-hour-line-${hour}`}>
              {days.map((__, j) => (
                <div 
                  key={`half-hour-${hour}-day-${j}`}
                  className={cn(
                    "border-b border-dashed border-slate-800/30",
                    "border-r border-slate-800"
                  )}
                  style={{ 
                    gridRow: `${(i * INTERVALS_PER_HOUR) + 2 + (INTERVALS_PER_HOUR / 2)}`, // Half-way through each hour
                    gridColumn: `${j + 2}`,
                  }}
                />
              ))}
            </React.Fragment>
          )
        })}
        
        {/* Class blocks */}
        {classes.map((classData, index) => {
          const dayColumns = dayToColumn(classData.day)
          const { start: rowStart, end: rowEnd } = timeToRow(classData.time)
          const colorClass = colorMap[classData.color] || colorMap.blue
          
          // Skip rendering if we can't properly position this class
          if (dayColumns.length === 0) return null
          
          return dayColumns.map((colIndex, dayIndexPos) => {
            // Skip if not valid position
            if (colIndex < 0 || colIndex >= days.length) return null
            
            return (
              <div
                key={`class-${index}-${classData.id}-${colIndex}-${rowStart}-${dayIndexPos}`}
                className={cn(
                  "rounded-md p-2 cursor-pointer border flex flex-col",
                  colorClass
                )}
                style={{
                  gridColumn: colIndex + 2, // +2 for time column
                  gridRow: `${rowStart} / ${rowEnd}`,
                  margin: "1px",
                  zIndex: 10
                }}
                onClick={() => onClassSelect(classData)}
              >
                <div className="text-xs font-medium">{classData.code}</div>
                <div className="text-xs text-slate-300">{classData.room}</div>
                <div className="text-xs text-slate-300 mt-auto">{classData.instructor}</div>
              </div>
            )
          }).filter(Boolean)
        })}
      </div>
    </div>
  )
} 