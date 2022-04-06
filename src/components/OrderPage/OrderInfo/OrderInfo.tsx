import React from 'react'
import style from '../OrderInfo/orderinfo.module.css'


export const OrderInfo: React.FC = () => {
  return (
		<div className={style.infocard}>
			<h2>Buisness</h2>
			<div className={style.price}>
				<h2>$12</h2>
				<p className='light'>per member/per month</p>
			</div>
			<div className={style.stats}>
				<p className='light'>
					<span>10</span> members
				</p>
				<p className='light'>
					<span>80</span> Gb of traffic
				</p>
				<p className='light'>
					<span>500</span> Mb of SSD space
				</p>
				<p className='light'>
					<span className={style.online}></span> Always online
				</p>
			</div>
		</div>
	);
}