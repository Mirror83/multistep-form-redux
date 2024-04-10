import { Link } from "react-router-dom"
import StepHeader from "./StepHeader"
import { Plan, togglePeriod, updatePlan } from "./multiStepFormSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { cn } from "../../lib/utils"

const plans: Plan[] = [
  {
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 99,
  },
  {
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
]

function Step2() {
  const period = useAppSelector(state => state.multiStepForm.period)
  const selectedPlan = useAppSelector(state => state.multiStepForm.plan)
  const dispatch = useAppDispatch()

  return (
    <>
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="flex gap-4 my-4">
        {plans.map(plan => (
          <PlanCard
            key={plan.name}
            plan={plan}
            isSelected={selectedPlan === plan}
            onClick={() => dispatch(updatePlan(plan))}
            period={period}
          />
        ))}
      </div>
      <div>
        <label htmlFor="period">Monthly | Yearly</label>
        <input
          type="checkbox"
          name="period"
          id="period"
          checked={period === "monthly"}
          onChange={() => dispatch(togglePeriod())}
        />
      </div>
    </>
  )
}

interface PlanCardProps {
  plan: Plan
  period?: "monthly" | "yearly"
  isSelected?: boolean
  onClick?: () => void
  icon?: React.ReactSVGElement
}

function PlanCard({
  plan,
  isSelected = false,
  period,
  onClick,
}: PlanCardProps) {
  console.log(period)
  return (
    <div
      className={cn(
        isSelected && "text-white bg-blue-500",
        "outline outline-2 p-4 rounded flex flex-col gap-4",
      )}
      onClick={onClick}
    >
      <h3>{plan.name}</h3>
      <p>${period === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}</p>
      {period === "yearly" && "2 months free"}
    </div>
  )
}

export default Step2
