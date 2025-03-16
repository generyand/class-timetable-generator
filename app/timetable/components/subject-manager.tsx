"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Edit2, Trash2 } from "lucide-react"

interface Subject {
  id: string
  name: string
  professor: string
  totalHours: number
  color: string
}

const mockSubjects: Subject[] = [
  {
    id: "1",
    name: "Mathematics",
    professor: "Dr. Smith",
    totalHours: 6,
    color: "#22c55e"
  },
  {
    id: "2",
    name: "Physics",
    professor: "Dr. Johnson",
    totalHours: 4,
    color: "#3b82f6"
  }
]

export default function SubjectManager() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subjects</CardTitle>
        <CardDescription>Manage your subjects and classes</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            {mockSubjects.map((subject) => (
              <div
                key={subject.id}
                className="flex flex-col space-y-2 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: subject.color }}
                    />
                    <h3 className="font-medium">{subject.name}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{subject.professor}</span>
                  <Badge variant="secondary">{subject.totalHours}h/week</Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
} 