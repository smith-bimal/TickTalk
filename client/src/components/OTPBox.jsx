'use client'
import { OTPInput } from 'input-otp'
import { useState } from "react"

const OTPBox = ({ otp, setOtp }) => {
  const [focusedIndex, setFocusedIndex] = useState(0)

  const handleChange = (value) => {
    // Only allow numbers
    const numbersOnly = value.replace(/[^0-9]/g, '');
    setOtp(numbersOnly);
  }

  return (
    <OTPInput
      maxLength={5}
      value={otp}
      onChange={handleChange}
      onFocus={(index) => setFocusedIndex(index)}
      containerClassName="group flex items-center gap-3"
      pattern="[0-9]*"
      inputMode="numeric"
      autoComplete="one-time-code"
      aria-label="Please enter OTP"
      render={({ slots }) => (
        <>
          {slots.map((slot, idx) => (
            <div
              key={idx}
              className={`
                w-12 h-14 border-2 rounded-lg flex items-center justify-center text-2xl font-semibold
                transition-all duration-300
                ${slot.char ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                ${idx === focusedIndex ? 'relative after:absolute after:h-6 after:w-0.5 after:bg-blue-500 after:animate-blink' : ''}
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                hover:border-blue-400
              `}
            >
              {slot.char || ''}
            </div>
          ))}
        </>
      )}
    />
  )
}

export default OTPBox