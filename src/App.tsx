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
      <div className="relative md:w-9/12 md:min-w-[750px] md:max-w-[1240px] md:rounded-lg md:grid md:grid-cols-[274px_8fr] md:gap-8 md:shadow-lg md:p-4 md:bg-white">
        <Sidebar />
        <div className="flex justify-center md:flex md:flex-wrap md:justify-center">
          {/** The calculation of min-h (calc(100vh - 6rem)) removes the 6rem that was added by top-24 to the height.*/}
          <div className="absolute top-24 w-full flex flex-col justify-between items-center min-h-[calc(100vh-6rem)] min-w-screen max-w-[640px] md:w-[90%] md:min-h-max md:relative md:top-0 md:mx-0 md:rounded-none md:shadow-none">
            <main
              className={cn(
                "bg-white w-[95%] rounded-lg shadow-md p-4 md:rounded-none md:shadow-none mb-8 md:mb-0",
                stepNumber === STEP_5 &&
                  "flex items-center h-full py-16 md:py-0",
              )}
            >
              <Outlet />
            </main>
            {stepNumber !== 5 && (
              <NavigationButtons className="bg-white self-end flex justify-between w-full p-4" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
