import { Link } from "react-router-dom"
import { useStepNumber } from "./hooks"

interface NavigationButtonsProps {
  className?: string
}

function NavigationButtons({ className }: NavigationButtonsProps) {
  const currentStep = useStepNumber()

  return (
    <div className={className}>
      {currentStep > 1 && currentStep !== 5 && (
        <>
          <button className="text-purplish-blue rounded-lg">
            <Link to={currentStep > 2 ? `/step-${currentStep - 1}` : "/"}>
              Go Back
            </Link>
          </button>
        </>
      )}
      {currentStep === 1 ? (
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
