import { Link } from "react-router-dom"
import { useStepNumber } from "./hooks"
import { cn, STEP_1, STEP_2, STEP_4, STEP_5 } from "@/lib/utils"
import { useAppDispatch } from "@/app/hooks"
import { submitAllDetails } from "./multiStepFormSlice"

interface NavigationButtonsProps {
  className?: string
}

function NavigationButtons({ className }: NavigationButtonsProps) {
  const currentStep = useStepNumber()
  const dispatch = useAppDispatch()

  return (
    <div className={className}>
      {currentStep > STEP_1 && currentStep !== STEP_5 && (
        <>
          <button className="text-cool-gray hover:text-marine-blue rounded-lg">
            <Link to={currentStep > STEP_2 ? `/step-${currentStep - 1}` : "/"}>
              Go Back
            </Link>
          </button>
        </>
      )}
      {currentStep === STEP_1 ? (
        <>
          <div></div>
          <button
            form="personal-info-form"
            className="text-white bg-marine-blue rounded-md h-12 w-28"
          >
            Next Step
          </button>
        </>
      ) : (
        <Link to={`/step-${currentStep + 1}`}>
          <button
            className={cn(
              "text-white bg-marine-blue rounded-md h-12 w-28",
              currentStep === STEP_4 && "active:bg-pastel-blue",
            )}
            onClick={() => {
              if (currentStep === STEP_4) dispatch(submitAllDetails())
            }}
          >
            {currentStep === STEP_4 ? "Confirm" : "Next Step"}
          </button>
        </Link>
      )}
    </div>
  )
}

export default NavigationButtons
