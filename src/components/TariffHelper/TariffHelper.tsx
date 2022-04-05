import React from 'react' 
import styles from '../TariffHelper/tariffhelper.module.css'
import { motion } from 'framer-motion'
import opacityVariant from '../../utils/framer'
import dog from '../../img/main-dog.png'


export const TarifHelper: React.FC = () => {
  return (
    <motion.section 
      className={styles.container}
      variants={opacityVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      >
      <h1>Solo, agency or team?We've got you.</h1>
      <p>Run your app with the power you need. No unexpected costs. Your first 30 days are free — no credit card required.</p>
      <div className={styles.card}>
        <img src={dog} alt="Perandus Helper" />
        <div className={styles.form}></div>
      </div>
    </motion.section>
  )
}
