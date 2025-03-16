import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Building, GraduationCap, Pencil, Trash2 } from "lucide-react"

interface ClassDetailsProps {
  selectedClass: {
    code: string
    title: string
    description: string
    units: string
    day: string
    term: string
    time: string
    room: string
    program: string
  } | null
}

export default function ClassDetailsSidebar({ selectedClass }: ClassDetailsProps) {
  return (
    <div className="fixed inset-y-0 right-0 z-50 hidden lg:flex w-80 flex-col">
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
  )
} 