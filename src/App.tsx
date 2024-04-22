import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "./features/multi-step-form/Sidebar"
import NavigationButtons from "./features/multi-step-form/NavigationButtons"
import { useStepNumber } from "./features/multi-step-form/hooks"
import { useAppSelector } from "./app/hooks"
import { useEffect } from "react"
import { cn, STEP_5 } from "./lib/utils"

function App() {
  const stepNumber = useStepNumber()
  const personalInfoFormSubmitted = useAppSelector(
    state => state.multiStepForm.personalInfoFormSubmitted,
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (stepNumber !== 1 && !personalInfoFormSubmitted) {
      navigate("/")
    }
  }, [])

  return (
    <div className="min-w-screen min-h-screen md:flex md:items-center md:justify-center">
      <div className="relative md:w-9/12 md:min-w-[750px] md:h-5/6 md:min-h-[550px] md:rounded-lg md:grid md:grid-cols-[4fr_8fr] md:gap-8 md:shadow-lg md:p-4 md:bg-white">
        <Sidebar />
        <section className="flex justify-center md:flex md:flex-wrap md:justify-center md:bg-inherit">
          <div className="absolute top-24 flex flex-col justify-between items-center min-h-[calc(100vh-6rem)] min-w-screen max-w-[640px] md:w-[95%] md:min-h-max md:relative md:top-0 md:mx-0 md:rounded-none md:shadow-none">
            <div
              className={cn(
                "bg-white w-[95%] rounded-lg shadow-md p-4 md:rounded-none md:shadow-none mb-8 md:mb-0",
                stepNumber === STEP_5 &&
                  "flex items-center h-full py-16 md:py-0",
              )}
            >
              <Outlet />
            </div>
            {stepNumber !== 5 && (
              <NavigationButtons className="bg-white self-end flex justify-between w-full p-4" />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
