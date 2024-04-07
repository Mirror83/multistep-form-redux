import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Step1 from "./features/multi-step-form/Step1"
import Step2 from "./features/multi-step-form/Step2"
import Step3 from "./features/multi-step-form/Step3"
import Step4 from "./features/multi-step-form/Step4"
import Step5 from "./features/multi-step-form/Step5"

import "./index.css"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Step1 />,
      },
      {
        path: "/step-2",
        element: <Step2 />,
      },
      {
        path: "/step-3",
        element: <Step3 />,
      },
      {
        path: "/step-4",
        element: <Step4 />,
      },
      {
        path: "/step-5",
        element: <Step5 />,
      },
    ],
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
