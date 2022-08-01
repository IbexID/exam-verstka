import React from 'react'

export interface IButtonProps {
  text: string
  red?: boolean
}

const SolidButton: React.FC<IButtonProps> = ({ text, red }) => {
  return <button className={red ? 'solid-button solid-button--red' : 'solid-button'}>{text}</button>
}

export default SolidButton
