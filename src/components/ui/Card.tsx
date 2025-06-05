import React from 'react'
import { cx } from '../../lib/utlis';

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
    className?: string
}

const Card: React.FC<CardProps> = ({ title, description, image, children, className }) => {
  return (
    <div className={cx(
        "bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden",
        className
        )}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default Card