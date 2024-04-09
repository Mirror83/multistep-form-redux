import { cn } from "@/lib/utils"
import { useLocation } from "react-router-dom"

function useStepNumber() {
  const location = useLocation()
  const locationParts = location.pathname.split("/")
  const currentPage = locationParts[locationParts.length - 1]

  if (currentPage === "") return 1

  const stepNumber = parseInt(currentPage.split("-")[1])

  if (stepNumber === 5) return 4

  return stepNumber
}

const steps = ["Your info", "Select Plan", "Add-ons", "Summary"]

function Sidebar() {
  const stepNumber = useStepNumber()

  return (
    <div className="flex flex-col justify-between text-white rounded-lg relative">
      <div className="flex flex-wrap flex-col gap-4 p-8 z-10">
        {steps.map((step, index) => (
          <SidebarComponent
            key={index}
            step={index + 1}
            stepDescription={step}
            currentStep={stepNumber}
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
  currentStep: number
}

function SidebarComponent({
  step,
  stepDescription,
  currentStep,
}: SidebarComponentProps) {
  return (
    <div className="flex gap-4 items-center">
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full outline outline-white outline-1",
          currentStep === step && "bg-pastel-blue text-black",
        )}
      >
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
