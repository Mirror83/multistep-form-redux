import { Link } from "react-router-dom"
import CustomInput from "./CustomInput"
import StepHeader from "./StepHeader"

function Step1() {
  return (
    <div>
      <StepHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number. "
      />
      <form action="">
        <CustomInput
          label="Name"
          type="text"
          name="name"
          id="name"
          placeholder="Stephen King"
        />
        <CustomInput
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="e.g stephenking@lorem.com"
        />
        <CustomInput
          label="Phone"
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g +1 234 567 890"
        />
      </form>
      <Link to="/step-2">Next</Link>
    </div>
  )
}

export default Step1
