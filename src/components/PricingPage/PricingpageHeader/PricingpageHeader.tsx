import React from 'react'
import { Header } from '../../Utils/Header/Header'
import styles from '../PricingpageHeader/pricingpageheader.module.css'
import { TariffsSection } from '../TariffsSection/TariffsSection'

export const PricingpageHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header
        title='Cloud services made simple with'
        accent={{
          color: 'blue',
          text: 'Perandus'
        }}
      />
      <TariffsSection />
    </div>
  )
}