import React from 'react'
import { AssistCard } from '../../Utils/AssistCard/AssistCard'
import { motion } from 'framer-motion'
import style from '../AssistBlock/assistblock.module.css'

export const AssistBlock: React.FC = () => {
  return (
		<section className={style.container}>
			<motion.p
				className='light'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.3, duration: 1 }}
			>
				Great experience is at the heart of what we do and that means we give
				you a variety of support options so you can put all your focus on
				building great apps.
			</motion.p>
			<motion.div 
        className={style.item}
        initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 1 }}
        >
				<AssistCard
					title='Perandus Support'
					description='We are committed to your success. Whether your app is for an emerging brand or a Fortune 500 company — we’ve got your back.'
					link={{
						to: 'features',
						text: 'Find out more about support plans',
					}}
				/>
				<AssistCard
					title='Resources'
					description='Engage with peers or explore the docs. Whatever size, whatever stage we’ve got a support plan that’s a perfect fit.'
				/>
				<AssistCard
					title='Consulting partners'
					description='Extend your team by engaging with one of hundreds of Heroku partners.'
				/>
			</motion.div>
		</section>
	);
}