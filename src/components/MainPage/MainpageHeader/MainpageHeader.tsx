import React from 'react'
import { Header } from '../../Utils/Header/Header'
import { motion } from 'framer-motion'
import styles from '../MainpageHeader/mainpageheader.module.css'
import pyramid from '../../../img/main-pyramid.png'
import coins from '../../../img/main-coins.png'
import chat from '../../../img/main-chat.png'

export const MainpageHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header
        title='Cloud services made simple with'
        accent={{
          color: 'blue',
          text: 'Perandus'
        }}
      />
      <div className={styles.images}>
        <motion.img 
          className={styles.coins} src={coins} alt="Coins"
          initial={{ opacity: 0, y: 550 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3, 
            duration: 1.5,
            opacity: { duration: 1.5 },
            y: { duration: 2 }}}/>
        <motion.img 
          className={styles.pyramid} src={pyramid} alt="Pyramid"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.6, 
            duration: 0.8,
            opacity: { duration: 1.3 },
            y: { duration: 1 }}}/>
        <motion.img 
          className={styles.chat} src={chat} alt="Chat"
          initial={{ opacity: 0, y: 350 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3, 
            duration: 1.3,
            opacity: { duration: 1.5 },
            y: { duration: 2 }}}/>
      </div>
    </div>
  )
}