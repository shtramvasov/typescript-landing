import React from 'react'
import { AssistBlock } from '../components/ServicesPage/AssistBlock/AssistBlock'
import { ServicesCta } from '../components/ServicesPage/ServicesCta/ServicesCta'
import { Footer } from '../components/Utils/Footer/Footer'
import { HeaderMenu } from '../components/Utils/HeaderMenu/HeaderMenu'

export const Servicespage: React.FC = () => {
  return (
    <>
    <HeaderMenu 
      title='How can we help?'
    />
    <AssistBlock />
    <ServicesCta />
    </>
  )
}