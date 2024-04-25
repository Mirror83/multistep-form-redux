import { Link } from "react-router-dom"
import { useStepNumber } from "./hooks"
import { STEP_1, STEP_2, STEP_5 } from "@/lib/utils"

interface NavigationButtonsProps {
  className?: string
}

function NavigationButtons({ className }: NavigationButtonsProps) {
  const currentStep = useStepNumber()

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
            className="text-white bg-marine-blue rounded-md h-12 px-6"
          >
            Next Step
          </button>
        </>
      ) : (
        <Link to={`/step-${currentStep + 1}`}>
          <button className="text-white bg-marine-blue rounded-md h-12 px-6">
            Next Step
          </button>
        </Link>
      )}
    </div>
  )
}

export default NavigationButtons
