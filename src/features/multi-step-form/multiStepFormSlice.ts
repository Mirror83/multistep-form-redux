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
  personalInfoFormSubmitted: boolean
  allDetailsSubmitted: boolean
  plan: Plan
  addOns: AddOn[]
  period: "monthly" | "yearly"
}

export const plans: Plan[] = [
  {
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
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

export const addOns: AddOn[] = [
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

const initialState: MultiStepFormState = {
  personalInfo: {
    name: "",
    phone: "",
    email: "",
  },
  personalInfoFormSubmitted: false,
  allDetailsSubmitted: false,
  plan: plans[0],
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
      state.personalInfoFormSubmitted = true
    },
    updatePlan: (state, action: PayloadAction<Plan>) => {
      state.plan = action.payload
    },
    updateAddOns: (state, action: PayloadAction<AddOn>) => {
      if (state.addOns.find(addOn => addOn.name === action.payload.name)) {
        state.addOns = state.addOns.filter(
          addOn => addOn.name !== action.payload.name,
        )
      } else {
        state.addOns.push(action.payload)
      }
    },
    submitAllDetails: state => {
      state.allDetailsSubmitted = true
    },
  },
})

export const {
  togglePeriod,
  updatePersonalInfo,
  updatePlan,
  updateAddOns,
  submitAllDetails,
} = multiStepFormSlice.actions
