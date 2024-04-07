import { Link } from "react-router-dom"
import StepHeader from "./StepHeader"

interface Plan {
  name: string
  monthlyPrice: number
  yearlyPrice: number
  period: "monthly" | "yearly"
}

const plans: Plan[] = [
  {
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 99,
    period: "monthly",
  },
  {
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    period: "monthly",
  },
  {
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    period: "monthly",
  },
]

function Step2() {
  return (
    <div>
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="flex gap-4 my-4">
        {plans.map(plan => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
      <Link to="/step-3">Next</Link> <Link to="/">Back</Link>
    </div>
  )
}

interface PlanCardProps {
  plan: Plan
  period?: "monthly" | "yearly"
  icon?: React.ReactSVGElement
}

function PlanCard({ plan, period = "monthly" }: PlanCardProps) {
  return (
    <div className="outline outline-2 p-4 rounded flex flex-col gap-4">
      <h3>{plan.name}</h3>
      <p>${period === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}</p>
    </div>
  )
}

export default Step2
