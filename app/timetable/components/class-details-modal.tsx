import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, Building, GraduationCap, Pencil, Trash2, X } from "lucide-react"

interface ClassDetailsModalProps {
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
  isOpen: boolean
  onClose: () => void
}

export default function ClassDetailsModal({ selectedClass, isOpen, onClose }: ClassDetailsModalProps) {
  if (!selectedClass) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] h-[90vh] block lg:hidden">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle>Class Details</DialogTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-6">
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
          <div className="space-y-2 mt-auto">
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
      </DialogContent>
    </Dialog>
  )
} 