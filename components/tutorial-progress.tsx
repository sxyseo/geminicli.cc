"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle } from "lucide-react"

interface Step {
  id: string
  title: string
  completed: boolean
}

interface TutorialProgressProps {
  steps: Step[]
}

export function TutorialProgress({ steps: initialSteps }: TutorialProgressProps) {
  const [steps, setSteps] = useState(initialSteps)

  const completedSteps = steps.filter((step) => step.completed).length
  const progress = (completedSteps / steps.length) * 100

  const toggleStep = (id: string) => {
    setSteps((prev) => prev.map((step) => (step.id === id ? { ...step, completed: !step.completed } : step)))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Tutorial Progress</h3>
        <span className="text-sm text-muted-foreground">
          {completedSteps} of {steps.length} completed
        </span>
      </div>

      <Progress value={progress} className="h-2" />

      <div className="space-y-2">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => toggleStep(step.id)}
            className="flex items-center space-x-2 w-full text-left p-2 rounded-md hover:bg-muted transition-colors"
          >
            {step.completed ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <Circle className="h-4 w-4 text-muted-foreground" />
            )}
            <span className={step.completed ? "line-through text-muted-foreground" : ""}>{step.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
