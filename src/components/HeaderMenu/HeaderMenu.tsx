import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../HeaderMenu/headermenu.module.css'
import Logo from '../../img/logo.svg'

export const HeaderMenu: React.FC = () => {
  return (
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
  )
}