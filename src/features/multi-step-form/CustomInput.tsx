import { cn } from "@/lib/utils"
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"

interface CustomInputProps {
  name: string
  label: string
  type: string
  id: string
  defaultValue: string
  placeholder?: string
  register: UseFormRegister<FieldValues>
  registerOptions?: RegisterOptions<FieldValues, string>
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
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
  errors,
}: CustomInputProps) {
  return (
    <div className="flex flex-col flex-wrap gap-1 my-4 text-marine-blue">
      <div className="flex flex-wrap justify-between">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        {errors && (
          <span className="text-strawberry-red">
            {errors.message?.toString()}
          </span>
        )}
      </div>

      <input
        className={cn(
          "font-medium outline outline-1 focus:outline-purplish-blue outline-light-gray p-3 rounded",
          errors && "outline-strawberry-red",
        )}
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
