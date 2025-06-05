import React from 'react'
import { cx } from '../../lib/utlis'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    children?: React.ReactNode
    className?: string
}

const Input: React.FC<InputProps> = ({ className }) => {
  return (
    <input className={cx(
        "full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
    )}/>
  )
}

export default Input