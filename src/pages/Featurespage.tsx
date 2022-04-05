import React from 'react'
import { FeaturesBlock } from '../components/FeaturesPage/FeaturesBlock/FeaturesBlock'
import { FeaturesCta } from '../components/FeaturesPage/FeaturesCta/FeaturesCta'
import { Footer } from '../components/Utils/Footer/Footer'
import { HeaderMenu } from '../components/Utils/HeaderMenu/HeaderMenu'

export const Featurespage: React.FC = () => {
  return (
    <>
    <HeaderMenu 
      title='Everything you need to go'
      accent={{
        text: 'from development to production',
        color: 'blue'
      }}
    />
    <FeaturesBlock />
    <FeaturesCta />
    <Footer />
    </>
  )
}