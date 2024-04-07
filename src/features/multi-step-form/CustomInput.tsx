interface CustomInputProps {
  name: string
  label: string
  type: string
  id: string
  placeholder?: string
}
function CustomInput({ name, label, type, id, placeholder }: CustomInputProps) {
  return (
    <div className="flex flex-col flex-wrap gap-1 my-4">
      <label htmlFor={id}>{label}</label>
      <input
        className="outline outline-1 p-2 rounded"
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomInput
