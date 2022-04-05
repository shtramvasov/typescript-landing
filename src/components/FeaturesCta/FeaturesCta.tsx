import React from 'react'
import { Button } from '../Button/Button'
import { motion } from 'framer-motion'
import opacityVariant from '../../utils/framer'
import styles from '../FeaturesCta/featurescta.module.css'


export const FeaturesCta: React.FC = () => {
  return (
    <motion.section 
      className={styles.container}
      variants={opacityVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
      <div className={styles.cta}>
        <div className={styles.text}>
          <h2>Are you ready to join our community?</h2>
          <p>Perandus is free to try out and only charges you for the resources that you want.</p>
        </div>
        <Button 
          color='yellow'
          text='Get Started Today'
          link='pricing'
        />
      </div>
    </motion.section>
  )
}