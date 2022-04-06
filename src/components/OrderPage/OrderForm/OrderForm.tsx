import React from 'react'
import style from '../OrderForm/orderform.module.css'
import { Input } from '../../Utils/Input/Input'
import { Button } from '../../Utils/Button/Button'


export const OrderForm: React.FC = () => {
  return (
      <form className={style.form}>
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
      </form>
	);
}