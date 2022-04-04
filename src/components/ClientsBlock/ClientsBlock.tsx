import React from 'react'
import styles from '../ClientsBlock/clientsblock.module.css'
import { motion } from 'framer-motion'
import opacityVariant from '../../utils/framer'
import ogilvy from '../../img/ogilvy.svg'
import digbut from '../../img/digbut.svg'
import westvir from '../../img/westvir.svg'
import confluent from '../../img/confluent.svg'
import shipt from '../../img/shipt.svg'
import betternut from '../../img/betternut.svg'
import fourteen from '../../img/fourteen.svg'


export const ClientsBlock: React.FC = () => {
  return (
    <motion.section 
      className={styles.container}
      variants={opacityVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
      <h3>Over 31,000 social media managers use our tool daily</h3>
      <div className={styles.images}>
        <img src={ogilvy} alt="Oglivy" />
        <img src={digbut} alt="Digital Butter" />
        <img src={westvir} alt="West Virginia University" />
        <img src={confluent} alt="Confluent Health" />
        <img src={shipt} alt="Shipt" />
        <img src={betternut} alt="Butternut Box" />
        <img src={fourteen} alt="Fourteen" />
      </div>
    </motion.section>
  )
}