import React from "react"

function Sidebar() {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <SidebarComponent step={1} stepDescription="Your info" />
      <SidebarComponent step={2} stepDescription="Select Plan" />
      <SidebarComponent step={3} stepDescription="Add-ons" />
      <SidebarComponent step={4} stepDescription="Summary" />
    </div>
  )
}

interface SidebarComponentProps {
  step: number
  stepDescription: string
}

function SidebarComponent({ step, stepDescription }: SidebarComponentProps) {
  return (
    <div>
      <div>Step {step}</div>
      <div>{stepDescription}</div>
    </div>
  )
}

export default Sidebar
