import React from 'react'
import style from '../SubscribeBlock/subscribeblock.module.css'
import { motion } from 'framer-motion'
import opacityVariant from '../../../utils/framer'
import { Input } from '../../Utils/Input/Input'
import { Submit } from '../../Utils/Submit/Submit'

export const SubscribeBlock: React.FC = () => {
  return (
    <motion.section 
      className={style.container}
      variants={opacityVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}>
      <div className={style.text}>
        <h4>Subscribe to our newsletter</h4>
        <p className='light'>A monthly digest of the latest Sketch news, articles, and resources.</p>
      </div>
      <form className={style.form}>
        <Input 
          type='email'
          color='gray'
          placeholder='Your email address'
        />
        <Submit 
          text='Subscribe'
          type='button'
          color='blue'
          disabled={false}
        />
      </form>
    </motion.section>
  )
}