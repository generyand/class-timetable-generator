"use client"

import React, { useState, useEffect } from "react"
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
const START_HOUR = 7 // 7AM (now including an extra hour before 8AM)
const END_HOUR = 22  // 10PM
const HOURS_TO_DISPLAY = END_HOUR - START_HOUR
const VISIBLE_START_HOUR = 8 // The first hour to show a label for

// Day data with abbreviated versions for mobile
const days = [
  { full: "Monday", abbr: "MON" }, 
  { full: "Tuesday", abbr: "TUE" }, 
  { full: "Wednesday", abbr: "WED" }, 
  { full: "Thursday", abbr: "THU" }, 
  { full: "Friday", abbr: "FRI" }, 
  { full: "Saturday", abbr: "SAT" }
]

// Generate time labels (8AM to 10PM)
const timeLabels = Array.from({ length: HOURS_TO_DISPLAY + 1 }, (_, i) => {
  const hour = START_HOUR + i
  const formattedHour = hour < 12 ? hour : hour === 12 ? 12 : hour - 12
  const amPm = hour < 12 ? 'AM' : 'PM'
  return {
    hour,
    label: `${formattedHour}:00 ${amPm}`,
    shortLabel: `${formattedHour}${amPm}`, // Compact version for mobile
    minimalLabel: `${formattedHour}${amPm.charAt(0)}`, // Ultra compact for very small screens
    visible: hour >= VISIBLE_START_HOUR // Only show labels for 8AM and later
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
  // Screen size detection
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect viewport size on client-side
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallScreen(window.innerWidth < 480);
    };
    
    // Initial check
    checkViewport();
    
    // Add event listener for resize
    window.addEventListener('resize', checkViewport);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

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

  // Responsive layout values based on screen size
  const cellHeight = isSmallScreen ? 45 : isMobile ? 50 : 60;
  const timeColumnWidth = isSmallScreen ? "2.5rem" : isMobile ? "3.5rem" : "5rem";
  const headerHeight = isSmallScreen ? 30 : isMobile ? 35 : 40;
  const fontSize = isSmallScreen ? "text-[10px]" : isMobile ? "text-xs" : "text-sm";
  const dayColumnWidth = isSmallScreen ? "minmax(40px, 1fr)" : "1fr";

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden my-2">
      <h2 className="text-xl font-semibold mb-4 text-center">Schedule #</h2>
      
      {/* Main grid container */}
      <div 
        className="grid bg-[#051220] relative border border-slate-800 rounded-md overflow-hidden"
        style={{
          gridTemplateColumns: `${timeColumnWidth} repeat(6, ${dayColumnWidth})`,
          gridTemplateRows: `${headerHeight}px repeat(${HOURS_TO_DISPLAY}, ${cellHeight}px)`,
          minHeight: isSmallScreen ? "500px" : isMobile ? "600px" : "800px",
        }}
      >
        {/* Empty corner cell */}
        <div className="border-b border-r border-slate-700" style={{ gridRow: "1" }}></div>
        
        {/* Day headers */}
        {days.map((day, index) => (
          <div 
            key={day.full}
            className={cn("py-1 font-medium flex items-center justify-center border-b border-r border-slate-700", fontSize)}
            style={{ gridRow: "1", gridColumn: `${index + 2}` }}
          >
            {isSmallScreen ? day.abbr.substring(0, 3) : isMobile ? day.abbr : day.full}
          </div>
        ))}

        {/* Time column */}
        <div 
          className="border-r border-slate-700 relative"
          style={{ 
            gridRow: `2 / span ${HOURS_TO_DISPLAY}`,
            gridColumn: "1",
          }}
        >
          {/* Time labels - absolutely positioned for precise alignment */}
          {timeLabels.map((timeInfo, i) => (
            timeInfo.visible && (
              <div 
                key={`time-${timeInfo.hour}`}
                className={cn("text-slate-400 pr-1 absolute flex items-center justify-end", 
                  isSmallScreen ? "text-[9px]" : "text-xs")}
                style={{ 
                  right: 0,
                  top: `${i * cellHeight}px`,
                  transform: 'translateY(-50%)',
                  height: '20px',
                  width: '100%',
                  zIndex: 5
                }}
              >
                {isSmallScreen ? timeInfo.minimalLabel : isMobile ? timeInfo.shortLabel : timeInfo.label}
              </div>
            )
          ))}
        </div>
        
        {/* Hour grid cells with half-hour dashed lines */}
        {timeLabels.map((timeInfo, i) => (
          <React.Fragment key={`grid-line-${timeInfo.hour}`}>
            {days.map((day, j) => (
              <div 
                key={`grid-${timeInfo.hour}-${day.full}`}
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
          const hasEnoughSpace = rowEnd - rowStart > 0.75;
          
          // Skip if we can't position this class
          if (dayColumns.length === 0) return null
          
          return dayColumns.map((colIndex, dayIndex) => {
            if (colIndex < 0 || colIndex >= days.length) return null
            
            return (
              <div
                key={`class-${index}-${dayIndex}`}
                className={cn(
                  "border cursor-pointer flex flex-col h-full justify-between overflow-hidden",
                  hasEnoughSpace ? (isSmallScreen ? "p-0.5" : "p-1") : "p-0.5",
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
                <div className={cn(
                  "font-bold line-clamp-1 leading-tight",
                  isSmallScreen ? "text-[9px]" : "text-xs"
                )}>
                  {classData.code}
                </div>
                
                {hasEnoughSpace && !isSmallScreen && (
                  <>
                    <div className={cn("line-clamp-1 leading-tight", isSmallScreen ? "text-[8px]" : "text-xs")}>
                      {classData.room}
                    </div>
                    <div className={cn("mt-auto line-clamp-1 leading-tight", isSmallScreen ? "text-[8px]" : "text-xs")}>
                      {classData.instructor}
                    </div>
                  </>
                )}
                
                {hasEnoughSpace && isSmallScreen && (
                  <div className="text-[8px] line-clamp-1 mt-auto leading-tight">
                    {classData.instructor}
                  </div>
                )}
              </div>
            )
          }).filter(Boolean)
        })}
      </div>
      
      {/* Floating action button for mobile - optional */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-20">
          <button 
            className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-colors"
            aria-label="Add class"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
} 