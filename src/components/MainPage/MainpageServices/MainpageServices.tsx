import React from 'react' 
import style from '../MainpageServices/mainpageservices.module.css'
import { FeatureItem } from '../../Utils/FeatureItem/FeatureItem'
import githubimg from '../../../img/main-github.png'

export const MainpageServices: React.FC = () => {
  return (
    <section className={style.container}>
        <FeatureItem
        title='GitHub Integration'
        description='Perandus allows you to import your projects directly from a public GitHub repository so you can start coding right away.'
        orientation='center'
        />
      <img src={githubimg} alt="GitHub Integration" />
      <FeatureItem
      title='Code Search'
      description='Code Search allows you to navigate across your project easily by seamlessly searching both the names and contents of all your files.'
      orientation='center'
      />
    </section>
  )
}