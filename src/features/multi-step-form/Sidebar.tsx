import { cn, STEP_3, STEP_5 } from "@/lib/utils"
import { useStepNumber } from "./hooks"

const steps = ["Your info", "Select Plan", "Add-ons", "Summary"]

function Sidebar() {
  const stepNumber = useStepNumber()

  return (
    <aside className="bg-progress-background bg-cover bg-[center_85%] flex flex-col text-white md:rounded-lg">
      <div className="h-[200px] gap-4 pt-8 flex flex-row items-start justify-center md:items-start md:justify-start md:flex-wrap md:flex-col md:p-4 md:h-auto">
        {steps.map((stepDescription, index) => (
          <SidebarComponent
            key={index}
            step={index + 1}
            stepDescription={stepDescription}
            isCurrentStep={
              stepNumber === STEP_5 && index === STEP_3
                ? true
                : stepNumber === index + 1
            }
          />
        ))}
      </div>
    </aside>
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
            ? "bg-light-blue text-black outline-8 outline-light-blue"
            : "outline outline-white outline-1",
        )}
      >
        {step}
      </div>
      <div className="hidden md:block uppercase">
        <p className="text-sm text-light-gray">Step {step}</p>
        <p className="font-bold ">{stepDescription}</p>
      </div>
    </div>
  )
}

export default Sidebar
