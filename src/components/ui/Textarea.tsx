import React from 'react'
import { cx } from '../../lib/utlis'

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
    children?: React.ReactNode
    className?: string
}

const Textarea: React.FC<TextareaProps> = ({ className }) => {
  return (
    <textarea className={cx(
      "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
    )}/>
  )
}

export default Textarea