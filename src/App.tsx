import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "./features/multi-step-form/Sidebar"
import NavigationButtons from "./features/multi-step-form/NavigationButtons"
import { useStepNumber } from "./features/multi-step-form/hooks"
import { useAppSelector } from "./app/hooks"
import { useEffect, useState } from "react"

function App() {
  const stepNumber = useStepNumber()
  const personalInfoFormSubmitted = useAppSelector(
    state => state.multiStepForm.personalInfoFormSubmitted,
  )
  const navigate = useNavigate()

  const mediaQueryList = window.matchMedia("(max-width: 640px)")

  const [matches, setMatches] = useState(mediaQueryList.matches)

  useEffect(() => {
    const handleMediaQuery = (e: MediaQueryListEvent) => {
      console.log(e.matches)
      setMatches(e.matches)
    }
    mediaQueryList.addEventListener("change", handleMediaQuery)

    return mediaQueryList.removeEventListener("change", handleMediaQuery)
  }, [])

  useEffect(() => {
    if (stepNumber !== 1 && !personalInfoFormSubmitted) {
      navigate("/")
    }
  }, [])

  return (
    <div className="min-w-screen min-h-screen bg-magnolia md:flex md:items-center md:justify-center">
      <div className="relative md:w-8/12 md:min-w-[700px] md:h-5/6 md:min-h-[550px] md:rounded-lg md:grid md:grid-cols-[4fr_8fr] md:shadow-lg md:p-4 md:bg-white">
        <Sidebar />
        <section className="p-4 bg-white absolute md:relative top-24 md:top-0 mx-4 md:mx-0 rounded-lg md:rounded-none shadow-md md:shadow-none md:flex md:flex-wrap md:justify-center md:bg-inherit">
          <div className="w-full md:w-5/6">
            <Outlet />
          </div>
          {stepNumber !== 5 && !matches && (
            <NavigationButtons className="flex justify-between self-end w-5/6 py-4" />
          )}
        </section>
      </div>
      {matches && (
        <NavigationButtons className="absolute bottom-4 flex justify-between w-full py-4 px-8" />
      )}
    </div>
  )
}

export default App
