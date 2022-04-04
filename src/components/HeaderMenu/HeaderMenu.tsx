import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../HeaderMenu/headermenu.module.css'
import Logo from '../../img/logo.svg'

interface Props {
  title: string,
  accent?: {
    color?: 'yellow' | 'blue'
    text: string
  }
}

export const HeaderMenu: React.FC<Props> = (props) => {
  let accent: string = props.accent?.color === 'blue' ? 'blue' : 'yellow';
  return (
    <div className='app-wrapper'>
      <div className={styles.container}>
          <Link to="/">
            <img src={Logo} alt="Perandus" />
          </Link>
        <nav className={styles.nav}>
          <Link className='menulink' to="/pricing">Pricing</Link>
          <Link className='menulink' to="/features">Features</Link>
          <Link className='menulink' to="/services">Services</Link>
        </nav>
      </div>
      <h1>
        {props.title}
        {accent && accent === 'blue' ? 
        <span className={styles.blue}> {props.accent?.text}</span> :
        <span className={styles.yellow}> {props.accent?.text}</span>}
      </h1>
    </div>
  )
}