import React, { useEffect, useState } from 'react'
import styles from './singleproduct.module.css'
import { useParams } from 'react-router'
import axios from '../api/api.js'



const SingleProduct = () => {
  const [product , setProduct] = useState([]);
  const {product_id} = useParams();

  async function fetchData() {
    let response = await axios.get(`product/get`, {params:{product_id : product_id}})
    let data = await response.data;
    setProduct(data);
  }

  useEffect(() => {
    fetchData();
    console.log(product)
  },[]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.photoContainer}>
        <img
          className={styles.photo}
          src={product.photo} 
        />
      </div>

      <div className={styles.infoContainer}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price} ₽</p>
        <p className={styles.id}>id: {product.product_id}</p>
      </div>
    </div>
  )
}

export default SingleProduct