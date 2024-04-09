import { Outlet } from "react-router-dom"
import Sidebar from "./features/multi-step-form/Sidebar"

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-magnolia">
      <div className="md:w-9/12 md:h-5/6 md:rounded-lg md:grid md:grid-cols-[3fr_6fr] md:shadow-lg p-4 bg-white">
        <Sidebar />
        <section className="flex flex-col flex-wrap items-center">
          <div className="w-4/6">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
