import StepHeader from "./StepHeader"
import { Plan, plans, togglePeriod, updatePlan } from "./multiStepFormSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { cn } from "../../lib/utils"

const planIcons = [
  "/assets/images/icon-arcade.svg",
  "/assets/images/icon-advanced.svg",
  "/assets/images/icon-pro.svg",
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
      <div className="flex flex-col md:flex-row gap-4 my-4">
        {plans.map((plan, i) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            isSelected={selectedPlan === plan}
            iconPath={planIcons[i]}
            onClick={() => dispatch(updatePlan(plan))}
            period={period}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 text-marine-blue bg-magnolia py-4">
        <div className="flex items-center gap-4">
          <span
            className={period === "monthly" ? "font-bold" : "text-cool-gray"}
          >
            Monthly
          </span>
          {/* Switch */}
          <button
            className={cn(
              "h-8 w-16 p-1 bg-marine-blue rounded-full flex items-center",
              period === "yearly" && "justify-end",
            )}
            onClick={() => dispatch(togglePeriod())}
          >
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </button>

          <span
            className={period === "yearly" ? "font-bold" : "text-cool-gray"}
          >
            Yearly
          </span>
        </div>
      </div>
    </>
  )
}

interface PlanCardProps {
  plan: Plan
  period?: "monthly" | "yearly"
  isSelected?: boolean
  onClick?: () => void
  iconPath: string
}

function PlanCard({
  plan,
  isSelected = false,
  iconPath,
  period,
  onClick,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "cursor-pointer outline outline-light-gray outline-1 p-4 rounded flex-1 flex flex-row md:flex-col items-start gap-4 md:gap-8",
        isSelected
          ? "outline-purplish-blue bg-magnolia"
          : "hover:outline-purplish-blue hover:shadow",
      )}
      onClick={onClick}
    >
      <img src={iconPath} role="presentation" className="h-12 w-12" />
      <div>
        <h3 className="text-lg font-bold text-marine-blue">{plan.name}</h3>
        <p className="text-cool-gray">
          $
          {period === "monthly"
            ? plan.monthlyPrice + "/mo"
            : plan.yearlyPrice + "/yr"}
        </p>
        <p className="text-marine-blue">
          {period === "yearly" && "2 months free"}
        </p>
      </div>
    </div>
  )
}

export default Step2
