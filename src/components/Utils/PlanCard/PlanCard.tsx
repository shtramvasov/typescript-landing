import React from 'react'
import styles from '../PlanCard/plancard.module.css'
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateTariff } from '../../../store/tariffsSlice';

interface Props {
  name: string,
  price: number,
  slogan: string,
  headercolor: 'blue' | 'yellow' | 'red',
  members: {
    quant: number | 'Unlimited',
    text: string,
  }
  traffic: {
    quant: number | 'Unlimited',
    text: string,
  }
  space: {
    quant: number,
    text: string
  }
  isOnline: boolean,
}


export const PlanCard: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const update = () => dispatch(updateTariff({ props }));
  
	return (
		<div className={styles.plan}>
			<div className={styles.planheader}>
				<h3 className={props.headercolor}>{props.name}</h3>
				<h1>${props.price}</h1>
				<p className='light'>per member/per month</p>
			</div>
			<div className={styles.planbody}>
				<h4>{props.slogan}</h4>
				<div className={styles.stat}>
					<span className={styles.membericon}></span>
					<p className='light'>
						<strong>{props.members.quant}</strong> {props.members.text}
					</p>
				</div>
				<div className={styles.stat}>
					<span className={styles.tarifficon}></span>
					<p className='light'>
						<strong>{props.traffic.quant}</strong> {props.traffic.text}
					</p>
				</div>
				<div className={styles.stat}>
					<span className={styles.spaceicon}></span>
					<p className='light'>
						<strong>{props.space.quant}</strong> {props.space.text}
					</p>
				</div>
				{props.isOnline ? (
					<div className={styles.statusblock}>
						<p className='light'>Status when unused</p>
						<span className={styles.online}></span> Online
					</div>
				) : (
					<div className={styles.statusblock}>
						<p className='light'>Status when unused</p>
						<span className={styles.offline}></span> Offline
					</div>
				)}
				<div className={styles.buttons}>
          <Button link='order' type='submit' color='blue' text='Get Started' fn={update} />
				</div>
			</div>
		</div>
	);
};