import { useNavigate } from "react-router-dom"
import CustomInput from "./CustomInput"
import StepHeader from "./StepHeader"

import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { PersonalInfo, updatePersonalInfo } from "./multiStepFormSlice"

function Step1() {
  const { register, handleSubmit } = useForm()

  const personalInfo = useAppSelector(state => state.multiStepForm.personalInfo)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <>
      <StepHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number. "
      />
      <form
        onSubmit={handleSubmit(data => {
          console.log(data)
          dispatch(updatePersonalInfo(data as PersonalInfo))
          navigate("/step-2")
        })}
      >
        <CustomInput
          label="Name"
          type="text"
          name="name"
          id="name"
          placeholder="Stephen King"
          register={register}
          registerOptions={{ required: true }}
          defaultValue={personalInfo.name}
        />
        <CustomInput
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="e.g stephenking@lorem.com"
          register={register}
          registerOptions={{ required: true }}
          defaultValue={personalInfo.email}
        />
        <CustomInput
          label="Phone"
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g +1 234 567 890"
          register={register}
          registerOptions={{ required: true }}
          defaultValue={personalInfo.phone}
        />
        <button>Next</button>
      </form>
    </>
  )
}

export default Step1
