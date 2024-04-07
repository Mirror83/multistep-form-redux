import React from "react"
import { Link } from "react-router-dom"
import StepHeader from "./StepHeader"

function Step4() {
  return (
    <div>
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <Link to="/step-5">Finish</Link> <Link to="/step-3">Back</Link>
    </div>
  )
}

export default Step4
