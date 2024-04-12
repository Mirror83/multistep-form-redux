function Step5() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img
        src="/assets/images/icon-thank-you.svg"
        role="presentation"
        alt="checkmark icon"
        className="w-16 h-16"
      />
      <h1 className="text-4xl font-bold text-marine-blue mt-8 mb-4">
        Thank You!
      </h1>
      <p className="text-cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <span className="font-bold">support@loremgaming.com.</span>
      </p>
    </div>
  )
}

export default Step5
