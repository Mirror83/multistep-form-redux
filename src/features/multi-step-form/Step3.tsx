import { Link } from "react-router-dom"
import StepHeader from "./StepHeader"
import { AddOn, updateAddOns } from "./multiStepFormSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

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
  const selectedAddOns = useAppSelector(state => state.multiStepForm.addOns)
  const period = useAppSelector(state => state.multiStepForm.period)

  const dispatch = useAppDispatch()

  return (
    <>
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <div>
        {addOns.map(addOn => (
          <AddOnCard
            key={addOn.name}
            addOn={addOn}
            isSelected={selectedAddOns.includes(addOn)}
            onSelect={() => dispatch(updateAddOns(addOn))}
            period={period}
          />
        ))}
      </div>
    </>
  )
}

interface AddOnCardProps {
  addOn: AddOn
  isSelected: boolean
  onSelect: () => void
  period?: "monthly" | "yearly"
}
function AddOnCard({
  addOn,
  period = "monthly",
  isSelected,
  onSelect,
}: AddOnCardProps) {
  return (
    <div className="outline outline-2 p-4 rounded flex justify-between items-center gap-4 w-full my-4">
      <div className="flex gap-4 items-center">
        <input
          type="checkbox"
          className="w-6 h-6"
          checked={isSelected}
          onChange={onSelect}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-marine-blue">{addOn.name}</h3>
          <p className="text-cool-gray">{addOn.description}</p>
        </div>
      </div>
      <p className="text-marine-blue">
        $
        {period === "monthly"
          ? addOn.monthlyPrice + "/mo"
          : addOn.yearlyPrice + "/yr"}
      </p>
    </div>
  )
}

export default Step3
