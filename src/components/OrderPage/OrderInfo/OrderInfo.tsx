import React from 'react'
import style from '../OrderInfo/orderinfo.module.css'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const OrderInfo: React.FC = () => {
  const tariff = useSelector((state: RootState) => state.tariffs);

  return (
		<motion.div 
      className={style.infocard}
			initial={{ opacity: 0, x: -160 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 1, duration: 1.2 }}
    >
			<h2>{tariff.name}</h2>
			<div className={style.price}>
				<h2>${tariff.price}</h2>
				<p className='light'>per member/per month</p>
			</div>
			<div className={style.stats}>
				<p className='light'>
					<span>{tariff.members}</span> members
				</p>
				<p className='light'>
					<span>{tariff.traffic}</span> Gb of traffic
				</p>
				<p className='light'>
					<span>{tariff.space}</span> Mb of SSD space
				</p>
				{tariff.alwaysOnline ? (
					<p className='light'>
						<span className={style.online}></span> Always online
					</p>
				) : (
					<p className='light'>
						<span className={style.offline}></span> Offline when unused
					</p>
				)}
			</div>
		</motion.div>
	);
}