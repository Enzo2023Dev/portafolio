import React from 'react'
import { cx } from '../../lib/utlis'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    size?: 'xs' | 'sm' | 'md' 
}

const Badge: React.FC<BadgeProps> = ({ className, children, size = "xs"}) => {
  return (
    <div className={cx(
        "flex items-center justify-center bg-gray-100 text-gray-800 border border-gray-300 font-medium me-2 rounded-sm",
        // sizes
        size === "xs" ? "text-xs px-2.5 py-0.5" : "",
        size === "sm" ? "text-sm px-2.5 py-0.5" : "",
        size === "md" ? "text-md px-2.5 py-0.5" : "",
        className
    )}>
        {children}
    </div>
  )
}

export default Badge