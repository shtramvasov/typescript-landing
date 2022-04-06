import React from 'react'
import style from '../OrderWrapper/orderwrapper.module.css'
import logo from '../../../img/logo-big.svg'
import { OrderInfo } from '../OrderInfo/OrderInfo'
import { OrderForm } from '../OrderForm/OrderForm'

export const OrderWrapper: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <h1>Get Started with <span>Perandus</span></h1>
      <OrderInfo />
      <OrderForm />
      <div className={style.logo}>
        <img src={logo} alt="Perandus" />
      </div>
    </div>
  )
}