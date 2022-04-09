import React from 'react'
import style from '../OrderWrapper/orderwrapper.module.css'
import logo from '../../../img/logo-big.svg'
import { motion } from 'framer-motion'
import { OrderInfo } from '../OrderInfo/OrderInfo'
import { OrderForm } from '../OrderForm/OrderForm'

export const OrderWrapper: React.FC = () => {
  return (
		<div className={style.wrapper}>
			<motion.h1
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4, duration: 1.3 }}
			>
				Get Started with <span>Perandus</span>
			</motion.h1>
			<OrderInfo />
			<OrderForm />
			<motion.div 
        className={style.logo}
        initial={{ opacity: 0, x: -160 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
				<img src={logo} alt='Perandus' />
			</motion.div>
		</div>
	);
}