import React from 'react'
import { FeaturesBlock } from '../components/FeaturesBlock/FeaturesBlock'
import { FeaturesCta } from '../components/FeaturesCta/FeaturesCta'
import { HeaderMenu } from '../components/HeaderMenu/HeaderMenu'

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
    </>
  )
}