import React from 'react' 
import { MainpageHeader } from '../components/MainpageHeader/MainpageHeader'
import { ClientsBlock } from '../components/ClientsBlock/ClientsBlock'
import { MainpageFeatures } from '../components/MainpageFeatures/MainpageFeatures'
import { MainpageServices } from '../components/MainpageServices/MainpageServices'

export const Mainpage: React.FC = () => {
  return (
    <>
      <MainpageHeader />
      <ClientsBlock />
      <MainpageFeatures />
      <MainpageServices />
    </>
  )
}


