import { Link } from "react-router-dom"
import StepHeader from "./StepHeader"
import { useAppSelector } from "../../app/hooks"

function Step4() {
  const { plan, addOns, period } = useAppSelector(state => state.multiStepForm)

  let total = 0
  if (period === "monthly") {
    total += plan?.monthlyPrice ?? 0
    addOns.forEach(addOn => {
      total += addOn.monthlyPrice
    })
  } else {
    total += plan?.yearlyPrice ?? 0
    addOns.forEach(addOn => {
      total += addOn.yearlyPrice
    })
  }

  console.log(total)

  return (
    <>
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <section className="bg-blue-100 p-4 rounded">
        <div className="w-full flex items-center justify-between border-b-2 py-4">
          <div className="flex flex-col">
            <p className="font-bold text-lg">
              {plan?.name} <span className="capitalize">({period})</span>
            </p>
            <Link to="/step-2">Change</Link>
          </div>
          <strong className="font-bold text-lg">
            $
            {period === "monthly"
              ? plan?.monthlyPrice + "/mo"
              : plan?.yearlyPrice + "/yr"}
          </strong>
        </div>
        <div>
          {addOns.map(addOn => (
            <div className="flex justify-between py-2" key={addOn.name}>
              <p className="text-gray-500">{addOn.name}</p>
              <p>
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
          <p>Total (per {period === "monthly" ? "month" : "year"})</p>
        </div>
        <strong className="font-bold text-2xl text-purple-600">
          ${`${total}${period === "monthly" ? "/mo" : "/yr"}`}
        </strong>
      </section>

      <div>
        <Link to="/step-3">Back</Link> <Link to="/step-5">Confirm</Link>
      </div>
    </>
  )
}

export default Step4
