import React from 'react'
import styles from '../Footer/footer.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../../img/logo.svg'
 

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
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
      </div>
    </div>
  )
}