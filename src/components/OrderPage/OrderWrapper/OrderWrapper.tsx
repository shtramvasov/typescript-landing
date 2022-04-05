import React from 'react'
import style from '../OrderWrapper/orderwrapper.module.css'
import logo from '../../../img/logo-big.svg'
import { Input } from '../../Utils/Input/Input'
import { Button } from '../../Utils/Button/Button'

export const OrderWrapper: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <h1>Get Started with <span>Perandus</span></h1>
      <div className={style.infocard}>
        <h2>Buisness</h2>
        <div className={style.price}>
          <h2>$12</h2>
          <p className='light'>per member/per month</p>
        </div>
        <div className={style.stats}>
          <p className='light'><span>10</span> members</p>
          <p className='light'><span>80</span> Gb of traffic</p>
          <p className='light'><span>500</span> Mb of SSD space</p>
          <p className='light'><span className={style.online}></span> Always online</p>     
        </div>
      </div>
      <div className={style.form}>
        <div className={style.input}>
          <p>Your Name:</p>
          <Input 
            color='white'
            type='text'
          />
        </div>
        <div className={style.input}>
          <p>Your Email:</p>
          <Input 
            color='white'
            type='email'
          />
        </div>
        <div className={style.buttons}>
          <Button 
            color='blue'
            text='Get started'
            disabled={true}
            link='/'
          />
          <Button 
            color='yellow'
            text='No, see plans again'
            disabled={false}
            link='pricing'
          />
        </div>
      </div>
      <div className={style.logo}>
        <img src={logo} alt="Perandus" />
      </div>
    </div>

  )
}