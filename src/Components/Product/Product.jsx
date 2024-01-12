import React, { useState } from 'react'
import styles from './product.module.css'
import { NavLink } from 'react-router-dom'

const Product = ({product_id, title, price, photo}) => {

  return (
    <div className={styles.product}>
        <img className={styles.image} 
         src={photo} 
        />
        <NavLink to={`../product/${product_id}`} className={styles.title}>{title}</NavLink>
        <p className={styles.price}><b>{price} ₽</b></p>
        <p className={styles.id}>id:{product_id}</p>

    </div>
  )
}

export default Product