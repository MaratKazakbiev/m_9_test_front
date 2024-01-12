import React from 'react'
import styles from './managedproduct.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import axios from '../api/api.js'


const ManagedProduct = ({title, price, product_id}) => {
  
  const deleteHandler = (product_id) => {
    return () => {
      axios.post('product/delete', {product_id:product_id})
        .then(response => {
          location.reload();
        })
    }
  }
  
  return (
    <div className={styles.product}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.id}>{product_id}</p>
      </div>

      <div className={styles.buttons}>
        <button className={styles.button}>
          <NavLink to={`product/edit/${product_id}`} className={styles.link}>Редактировать</NavLink>
        </button>
        <button 
          className={styles.button} 
          style={{backgroundColor:'red'}} 
          onClick={deleteHandler(product_id)}
        >
            Удалить
        </button>
      </div>
    </div>
  )
}

export default ManagedProduct