import { Link } from "react-router-dom"
import StepHeader from "./StepHeader"

interface AddOn {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
}

const addOns: AddOn[] = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
]

function Step3() {
  return (
    <div>
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <div>
        {addOns.map(addOn => (
          <AddOnCard key={addOn.name} addOn={addOn} />
        ))}
      </div>
      <Link to="/step-4">Next</Link> <Link to="/step-2">Back</Link>
    </div>
  )
}

interface AddOnCardProps {
  addOn: AddOn
  period?: "monthly" | "yearly"
}
function AddOnCard({ addOn, period = "monthly" }: AddOnCardProps) {
  return (
    <div className="outline outline-2 p-4 rounded flex justify-between items-center gap-4 w-full my-4">
      <div className="flex gap-4 items-center">
        <input type="checkbox" className="w-6 h-6" />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{addOn.name}</h3>
          <p className="text-gray-500">{addOn.description}</p>
        </div>
      </div>
      <p className="">
        $
        {period === "monthly"
          ? addOn.monthlyPrice + "/mo"
          : addOn.yearlyPrice + "/yr"}
      </p>
    </div>
  )
}

export default Step3
