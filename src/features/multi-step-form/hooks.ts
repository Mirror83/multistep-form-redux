import { useLocation } from "react-router-dom"

export function useStepNumber() {
  const location = useLocation()
  const locationParts = location.pathname.split("/")
  const currentPage = locationParts[locationParts.length - 1]

  if (currentPage === "") return 1

  const stepNumber = parseInt(currentPage.split("-")[1])

  return stepNumber
}
