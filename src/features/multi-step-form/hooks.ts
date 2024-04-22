import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useStepNumber() {
  const location = useLocation()
  const locationParts = location.pathname.split("/")
  const currentPage = locationParts[locationParts.length - 1]

  if (currentPage === "") return 1

  const stepNumber = parseInt(currentPage.split("-")[1])

  return stepNumber
}

export function useMediaQuery(query: string) {
  const mediaQueryList = window.matchMedia(query)

  const [matches, setMatches] = useState(mediaQueryList.matches)

  useEffect(() => {
    const handleMediaQuery = (e: MediaQueryListEvent) => {
      console.log(e.matches)
      setMatches(e.matches)
    }
    mediaQueryList.addEventListener("change", handleMediaQuery)

    return mediaQueryList.removeEventListener("change", handleMediaQuery)
  }, [])

  return matches
}
