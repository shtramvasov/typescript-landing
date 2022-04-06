import React from 'react'
import { FeaturesBlock } from '../components/FeaturesPage/FeaturesBlock/FeaturesBlock'
import { FeaturesCta } from '../components/FeaturesPage/FeaturesCta/FeaturesCta'
import { Footer } from '../components/Utils/Footer/Footer'
import { Header } from '../components/Utils/Header/Header'

export const Featurespage: React.FC = () => {
  return (
    <>
    <Header 
      title='Everything you need to go'
      accent={{
        text: 'from development to production',
        color: 'yellow'
      }}
    />
    <FeaturesBlock />
    <FeaturesCta />
    <Footer />
    </>
  )
}