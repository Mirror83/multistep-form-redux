import React from "react"

function Sidebar() {
  return (
    <div className="flex flex-col flex-wrap gap-4 text-white bg-blue-700 rounded p-8">
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
    <div className="flex gap-4 items-center">
      <div className="flex items-center justify-center w-8 h-8 rounded-full outline outline-white outline-1">
        {step}
      </div>
      <div className="uppercase">
        <p className="font-light text-sm text-gray-200">Step {step}</p>
        <p className="font-bold">{stepDescription}</p>
      </div>
    </div>
  )
}

export default Sidebar
