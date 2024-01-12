import React, { useEffect, useState } from 'react'
import styles from './manage.module.css'
import { NavLink } from 'react-router-dom'
import ManagedProduct from '../ManagedProduct/ManagedProduct'
import axios from '../api/api.js'


const Manage = () => {
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState([]);

  const fetchProducts = () =>{
    console.log(page)
    axios
      .get('/products', {params:{page : page}})
      .then((res) =>{
        setProducts(res.data)
      })
  }

  useEffect(()=>{
    fetchProducts();
    console.log(products);
  },[page])

  const previousPageHandler= () =>{
    if (page === 1){
      return setPage(1);
    }
    if (page > 1){
      return setPage(page-1);
    }
    console.log(page)
  }

  const nextPageHandler = () => {
    if (page < 90){
      setPage(page+1)
      console.log(page)
    }
  }
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
      <NavLink to='product/create' className={styles.add}>Добавить товар</NavLink>
      <div className={styles.paginator}>
        <button className={styles.arrow} onClick={previousPageHandler}>{'<'}</button>
        <button className={styles.arrow} onClick={nextPageHandler}>{'>'}</button>
      </div>
        {products.map((product)=> <ManagedProduct key={product.product_id} {...product}/>)}
      </div>
    </div>
  )
}

export default Manage