import React from 'react'
import { cx } from '../../lib/utlis'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'secondary'
    rounded?: 'lg' | 'full'
}

const Button: React.FC<ButtonProps> = ({ className, children, variant = "default", rounded = "lg", ...rest }) => {
  return (
    <button className={cx(
      "py-2.5 px-5 me-2 mb-2 text-sm font-medium cursor-pointer transition-colors",

      // variants
      variant === "default" ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" : "",
      variant === "secondary" ? "text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" : "",

      // rounded
      rounded === "lg" ? "rounded-lg" : "",
      rounded === "full" ? "rounded-full" : "",

      className
      )} 
      {...rest}
    >
        {children}
    </button>
  )
}

export default Button