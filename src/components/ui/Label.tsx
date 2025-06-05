import React from 'react'
import { cx } from '../../lib/utlis'

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  children?: React.ReactNode
  htmlFor?: string
  className?: string
}

const Label: React.FC<LabelProps> = ({children, htmlFor, className, ...rest}) => {
  return (
    <label className={cx(
        "text-sm font-medium",
        className)
    } 
        htmlFor={htmlFor} 
        {...rest}
    >
        {children}
    </label>
  )
}

export default Label