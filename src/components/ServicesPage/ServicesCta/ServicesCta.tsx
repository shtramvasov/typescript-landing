import React from 'react'
import { Button } from '../../Utils/Button/Button'
import style from '../ServicesCta/servicescta.module.css'
import { motion } from 'framer-motion'
import opacityVariant from '../../../utils/framer'

export const ServicesCta: React.FC = () => {
  return (
		<motion.section
			className={style.container}
			variants={opacityVariant}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<h2>Already found your answer?</h2>
			<p className='light'>
				Contact us and we’ll get back to you as soon as we can.
			</p>
			<Button color='blue' text='Check out our plans' link='pricing' />
		</motion.section>
	);
}