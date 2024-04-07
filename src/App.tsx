import { Outlet } from "react-router-dom"
import Sidebar from "./features/multi-step-form/Sidebar"

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="md:w-9/12 md:rounded md:grid md:grid-cols-2 p-4 bg-white">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default App
