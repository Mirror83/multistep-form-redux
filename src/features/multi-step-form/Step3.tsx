import StepHeader from "./StepHeader"
import { AddOn, addOns, updateAddOns } from "./multiStepFormSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { cn } from "@/lib/utils"

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
    <div
      className={cn(
        isSelected
          ? "outline-purplish-blue bg-magnolia"
          : "outline-marine-blue",
        "outline outline-1 hover:outline-purplish-blue cursor-pointer p-4 rounded flex justify-between items-center gap-4 w-full my-4",
      )}
      onClick={onSelect}
    >
      <div className="flex gap-4 items-center">
        <input
          type="checkbox"
          className="appearance-none cursor-pointer w-6 h-6 border-2 border-cool-gray rounded-md
          checked:bg-purplish-blue checked:border-purplish-blue
          checked:bg-[url('/assets/images/icon-checkmark.svg')] 
          checked:bg-center checked:bg-contain checked:bg-no-repeat"
          checked={isSelected}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-marine-blue">{addOn.name}</h3>
          <p className="text-cool-gray">{addOn.description}</p>
        </div>
      </div>
      <p className="text-purplish-blue">
        +$
        {period === "monthly"
          ? addOn.monthlyPrice + "/mo"
          : addOn.yearlyPrice + "/yr"}
      </p>
    </div>
  )
}

export default Step3
