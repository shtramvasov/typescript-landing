import React from 'react'

interface Props {
  text: string,
  color: 'blue' | 'yellow',
  type?: 'button' | 'submit'
  disabled?: boolean,
  fn?: () => void
}

export const Submit: React.FC<Props> = ({text, color, disabled, type = 'submit', fn}) => {
	return (
		<button onClick={fn} type={type} disabled={disabled} className={color === 'blue' ? 'btn' : 'btn-alt'}>{text}</button>
	);
};