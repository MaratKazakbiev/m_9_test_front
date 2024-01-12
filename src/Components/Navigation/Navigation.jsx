import React from 'react'
import styles from './navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
    <NavLink to='products' className={ ({ isActive }) => isActive ? styles.activeLink : styles.nonActiveLink}>Товары</NavLink>
    <NavLink to='manage' className={ ({ isActive }) => isActive ? styles.activeLink : styles.nonActiveLink}>Управлять товарами</NavLink>
    </div>
  )
}

export default Navigation