import React from 'react'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import styles from '../MainpageHeader/mainpageheader.module.css'
import pyramid from '../../img/main-pyramid.png'
import coins from '../../img/main-coins.png'
import chat from '../../img/main-chat.png'

export const MainpageHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeaderMenu
        title='Cloud services made simple with'
        accent={{
          color: 'blue',
          text: 'Perandus'
        }}
      />
      <div className={styles.images}>
        <img className={styles.coins} src={coins} alt="Coins" />
        <img className={styles.pyramid} src={pyramid} alt="Pyramid" />
        <img className={styles.chat} src={chat} alt="Chat" />
      </div>
    </div>
  )
}