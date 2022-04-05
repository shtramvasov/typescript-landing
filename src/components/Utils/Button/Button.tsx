import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string,
  color: 'blue' | 'yellow',
  link?: string
}

export const Button: React.FC<Props> = ({text, color, link}) => {
  return (
    <Link to={`/${link}`}><button className={color === 'blue' ? 'btn' : 'btn-alt'}>{text}</button></Link>
  )
}