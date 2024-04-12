import { cn } from "@/lib/utils"
import { useStepNumber } from "./hooks"

const steps = ["Your info", "Select Plan", "Add-ons", "Summary"]

function Sidebar() {
  const stepNumber = useStepNumber()

  return (
    <div className="flex flex-col justify-between text-white rounded-lg relative">
      <div className="flex flex-wrap flex-col gap-4 p-4 z-10">
        {steps.map((stepDescription, index) => (
          <SidebarComponent
            key={index}
            step={index + 1}
            stepDescription={stepDescription}
            isCurrentStep={
              stepNumber === 5 && index === 3 ? true : stepNumber === index + 1
            }
          />
        ))}
      </div>

      <div className="absolute z-0 h-full w-full">
        <img
          src="/assets/images/bg-sidebar-desktop.svg"
          className="object-cover h-full w-full rounded-lg"
        />
      </div>
    </div>
  )
}

interface SidebarComponentProps {
  step: number
  stepDescription: string
  isCurrentStep: boolean
}

function SidebarComponent({
  step,
  stepDescription,
  isCurrentStep,
}: SidebarComponentProps) {
  return (
    <div className="flex gap-4 items-center">
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full",
          isCurrentStep
            ? "bg-pastel-blue text-black outline-8 outline-pastel-blue"
            : "outline outline-white outline-1",
        )}
      >
        {step}
      </div>
      <div className="uppercase">
        <p className="text-sm text-light-gray">Step {step}</p>
        <p className="font-bold ">{stepDescription}</p>
      </div>
    </div>
  )
}

export default Sidebar
