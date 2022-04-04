import React from 'react' 
import { FeatureItem } from '../FeatureItem/FeatureItem'
import style from '../MainpageFeatures/mainpagefeatures.module.css'
import rocketimg from '../../img/main-rocket.png'
import appimg from '../../img/main-app.png'

export const MainpageFeatures: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.items}>
        <FeatureItem 
          title='Deploy in Minutes'
          description='Deploy your web app in minutes with zero-config! Codesphere removes the unnecessary overhead so you can spend less time configuring and more time coding. We’ve got you covered!'
          button={{
            text: 'See for yourself',
            link: 'features',
            color: 'blue' 
          }}
          img={rocketimg}
          orientation='left'
        />
        <FeatureItem 
          title='App Monitoring'
          description='Monitor your app`s storage, processing, and memory consumption all within Perandus web IDE - no external tools necessary!'
          button={{
            text: 'Start your project now',
            link: 'services',
            color: 'blue' 
          }}
          img={appimg}
          orientation='right'
        />
      </div>
    </section>
  )
}