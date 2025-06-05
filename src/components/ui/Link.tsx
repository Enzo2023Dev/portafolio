import React from 'react'
import { cx } from '../../lib/utlis'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'button' | 'paragraph'
}

const Link: React.FC<LinkProps> = ({ className, variant = "default",  children, ...rest }) => {
  return (
    <a className={cx(
      "text-base transition-colors",
      
      // variants
      variant === "default" ? "hover:underline" : "",
      variant === "button" ? "px-4 py-2 font-medium rounded-md" : "",
      variant === "paragraph" ? "underline hover:no-underline" : "",
      
      className
    )} 
      {...rest}
    >
        {children}
    </a>
  )
}

export default Link