import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form"

interface CustomInputProps {
  name: string
  label: string
  type: string
  id: string
  defaultValue: string
  placeholder?: string
  register: UseFormRegister<FieldValues>
  registerOptions?: RegisterOptions<FieldValues, string>
}
function CustomInput({
  name,
  label,
  type,
  id,
  placeholder,
  defaultValue,
  register,
  registerOptions,
}: CustomInputProps) {
  return (
    <div className="flex flex-col flex-wrap gap-1 my-4">
      <label htmlFor={id}>{label}</label>
      <input
        className="outline outline-1 p-2 rounded"
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, { ...registerOptions })}
      />
    </div>
  )
}

export default CustomInput
