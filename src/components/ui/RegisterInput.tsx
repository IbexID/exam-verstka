import React, { useState } from 'react'

interface IRegisterInput {
  type: string
  placeholder: string
  autoComplete: string
}

const RegisterInput: React.FC<IRegisterInput> = ({ type, placeholder, autoComplete }) => {
  const [registerInputValue, setRegisterInputValue] = useState('')

  return (
    <input
      className='input'
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      value={registerInputValue}
      onChange={(e) => {
        setRegisterInputValue(e.target.value)
      }}
    />
  )
}

export default RegisterInput
