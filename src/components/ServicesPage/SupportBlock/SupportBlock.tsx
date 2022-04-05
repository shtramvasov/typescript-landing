import React from 'react'
import { SupportCard } from '../../Utils/SupportCard/SupportCard'
import style from '../SupportBlock/supportblock.module.css'
import { motion } from 'framer-motion'
import opacityVariant from '../../../utils/framer'

export const SupportBlock: React.FC = () => {
  return (
    <motion.section 
      className={style.container}
      variants={opacityVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
      <h1>Additional Support for Perandus Enterprise</h1>
      <motion.div 
      className={style.items}
      variants={opacityVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
        <SupportCard 
          title='Onboarding & Implementation Strategy'
          description='Clear obstacles for faster, better development on Perandus.'
          link={{
            to: '',
            text: 'More on the Onboarding & Implementation session'
          }}
        />
        <SupportCard 
          title='Technical Discovery'
          description='Uncover relevant use cases for your existing Perandus investment.'
          link={{
            to: '',
            text: 'More on the Technical Discovery session'
          }}
        />
        <SupportCard 
          title='Solution Proposal'
          description='Get expert advice on how to implement a specific solution on Perandus.'
          link={{
            to: '',
            text: 'More on the Solution Proposal session'
          }}
        />
        <SupportCard 
          title='Application Performance Assessment'
          description='Discover bottlenecks that may be limiting your app’s performance.'
          link={{
            to: '',
            text: 'More on the App Performance session'
          }}
        />
        <SupportCard 
          title='Operational Review'
          description='Fully realize your Perandus investment and take advantage of platform features.'
          link={{
            to: '',
            text: 'More on the Operational Review session'
          }}
        />
        <SupportCard 
          title='Baseline Postgres Assessment'
          description='Understand your Perandus Postgres usage, performance, and key metrics.'
          link={{
            to: '',
            text: 'More on the Baseline Postgres session'
          }}
        />
      </motion.div>
    </motion.section>
  )
}