import React from 'react'
import { MainpageHeader } from '../components/MainpageHeader/MainpageHeader'
import { ClientsBlock } from '../components/ClientsBlock/ClientsBlock'

export const Mainpage: React.FC = () => {
  return (
    <>
      <MainpageHeader />
      <ClientsBlock />
    </>
  )
}


