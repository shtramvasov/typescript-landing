import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string,
  color: 'blue' | 'yellow',
  link?: string,
  disabled?: boolean
}

export const Button: React.FC<Props> = ({text, color, link, disabled}) => {
  return (
    <Link to={`/${link}`}><button disabled={disabled} className={color === 'blue' ? 'btn' : 'btn-alt'}>{text}</button></Link>
  )
}