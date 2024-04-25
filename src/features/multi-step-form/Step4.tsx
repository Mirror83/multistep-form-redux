import { Link } from "react-router-dom"
import StepHeader from "./StepHeader"
import { useAppSelector } from "../../app/hooks"

function Step4() {
  const { plan, addOns, period } = useAppSelector(state => state.multiStepForm)

  let total = 0
  if (period === "monthly") {
    total += plan.monthlyPrice
    addOns.forEach(addOn => {
      total += addOn.monthlyPrice
    })
  } else {
    total += plan.yearlyPrice
    addOns.forEach(addOn => {
      total += addOn.yearlyPrice
    })
  }

  return (
    <>
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <section className="bg-magnolia p-4 rounded">
        <div className="w-full flex items-center justify-between border-b-2 py-4">
          <div className="flex flex-col text-marine-blue">
            <p className="font-bold text-lg">
              {plan.name} <span className="capitalize">({period})</span>
            </p>
            <Link to="/step-2" className="underline hover:text-purplish-blue">
              Change
            </Link>
          </div>
          <strong className="font-bold text-lg text-marine-blue">
            $
            {period === "monthly"
              ? plan.monthlyPrice + "/mo"
              : plan.yearlyPrice + "/yr"}
          </strong>
        </div>
        <div>
          {addOns.map(addOn => (
            <div className="flex justify-between py-2" key={addOn.name}>
              <p className="text-cool-gray">{addOn.name}</p>
              <p className="text-marine-blue">
                +$
                {period === "monthly"
                  ? addOn.monthlyPrice + "/mo"
                  : addOn.yearlyPrice + "/yr"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4 flex justify-between">
        <div>
          <p className="text-cool-gray">
            Total (per {period === "monthly" ? "month" : "year"})
          </p>
        </div>
        <strong className="font-bold text-2xl text-purplish-blue">
          ${`${total}${period === "monthly" ? "/mo" : "/yr"}`}
        </strong>
      </section>
    </>
  )
}

export default Step4
