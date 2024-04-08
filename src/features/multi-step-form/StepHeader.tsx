interface StepHeaderProps {
  title: string
  description: string
}

function StepHeader({ title, description }: StepHeaderProps) {
  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

export default StepHeader
