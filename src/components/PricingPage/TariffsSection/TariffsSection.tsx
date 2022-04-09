import React from 'react'
import { PlanCard } from '../../Utils/PlanCard/PlanCard'
import styles from '../TariffsSection/tariffssection.module.css'
import { motion } from 'framer-motion'

export const TariffsSection: React.FC = () => {
  return (
		<div className={styles.container}>
			<motion.div
				className={styles.items}
				initial={{ opacity: 0, y: 120 }} 
        animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5, 
            duration: 1,
            opacity: { duration: 1 },
            y: { duration: 1.5 }}}
			>
				<PlanCard
					name='Starter'
					price={0}
					slogan='Let’s start with the Basics'
					headercolor='blue'
					members={{
						quant: 1,
						text: 'man team',
					}}
					traffic={{
						quant: 10,
						text: 'Gb of traffic',
					}}
					space={{
						quant: 250,
						text: 'Mb of SDD Space',
					}}
					isOnline={false}
				/>
				<PlanCard
					name='Business'
					price={12}
					slogan='Tools for growing teams'
					headercolor='yellow'
					members={{
						quant: 10,
						text: 'members',
					}}
					traffic={{
						quant: 80,
						text: 'Gb of traffic',
					}}
					space={{
						quant: 500,
						text: 'Mb of SDD Space',
					}}
					isOnline={true}
				/>
				<PlanCard
					name='Enterprise'
					price={45}
					slogan='Best for high traffic apps'
					headercolor='red'
					members={{
						quant: 'Unlimited',
						text: 'members',
					}}
					traffic={{
						quant: 'Unlimited',
						text: 'traffic',
					}}
					space={{
						quant: 1024,
						text: 'Mb of SDD Space',
					}}
					isOnline={true}
				/>
			</motion.div>
		</div>
	);
}