import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Plan {
  name: string
  monthlyPrice: number
  yearlyPrice: number
}

export interface PersonalInfo {
  name: string
  phone: string
  email: string
}

export interface AddOn {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
}

type MultiStepFormState = {
  personalInfo: PersonalInfo
  plan?: Plan
  addOns: AddOn[]
  period: "monthly" | "yearly"
}

const initialState: MultiStepFormState = {
  personalInfo: {
    name: "",
    phone: "",
    email: "",
  },
  plan: undefined,
  addOns: [],
  period: "monthly",
}

export const multiStepFormSlice = createSlice({
  initialState,
  name: "multiStepForm",
  reducers: {
    togglePeriod: state => {
      if (state.period === "monthly") {
        state.period = "yearly"
      } else {
        state.period = "monthly"
      }
    },
    updatePersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload
    },
    updatePlan: (state, action: PayloadAction<Plan>) => {
      state.plan = action.payload
    },
    updateAddOns: (state, action: PayloadAction<AddOn>) => {
      if (state.addOns.find(addOn => addOn.name === action.payload.name)) {
        console.log("Removing")
        state.addOns = state.addOns.filter(
          addOn => addOn.name !== action.payload.name,
        )
      } else {
        state.addOns.push(action.payload)
      }
    },
  },
})

export const { togglePeriod, updatePersonalInfo, updatePlan, updateAddOns } =
  multiStepFormSlice.actions
