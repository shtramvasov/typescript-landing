import React from 'react'
import { FeatureItem } from '../../Utils/FeatureItem/FeatureItem'
import style from '../FeaturesBlock/featuresblock.module.css'
import cicdimg from '../../../img/features-cicd.png'
import githubimg from '../../../img/features-github.png'
import languageimg from '../../../img/features-language.png'

export const FeaturesBlock: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.items}>
        <FeatureItem 
          title='Intelligent CI/CD'
          description='Advanced Git integrations allow for a built-in CI/CD process that isn`t just automated, it`s optimized with every push. Pull and merge requests are deployed instantly to a unique URL, accessible to your entire team.'
          orientation='left'
          img={cicdimg}
        />
        <FeatureItem 
          title='Just code'
          description='Static assets. API hosting. Serverless and Edge Functions. With a global network defined entirely by your code, you can focus on just that—the craft of coding.'
          orientation='right'
          img={githubimg}
        />
        <FeatureItem 
          title='Multi Language'
          description='Perandus comes with NodeJS and Python pre-installed, so you can code without spending hours configuring your environment. Perandus also supports syntax highlighting and code completion for languages like HTML, CSS, JS, and Python.'
          orientation='left'
          img={languageimg}
        />
      </div>
    </section>
  )
}