import { Outlet } from "react-router-dom"
import Sidebar from "./features/multi-step-form/Sidebar"
import NavigationButtons from "./features/multi-step-form/NavigationButtons"
import { useStepNumber } from "./features/multi-step-form/hooks"

function App() {
  const stepNumber = useStepNumber()

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-magnolia">
      <div className="md:w-8/12 md:min-w-[700px] md:h-5/6 md:min-h-[550px] md:rounded-lg md:grid md:grid-cols-[4fr_8fr] md:shadow-lg p-4 bg-white">
        <Sidebar />
        <section className="flex flex-wrap justify-center">
          <div className="w-5/6">
            <Outlet />
          </div>
          {stepNumber !== 5 && (
            <NavigationButtons className="flex justify-between self-end w-5/6 py-4" />
          )}
        </section>
      </div>
    </div>
  )
}

export default App
