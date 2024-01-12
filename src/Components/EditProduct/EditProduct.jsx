import React, { useEffect, useState } from 'react'
import styles from './editproduct.module.css'
import axios from '../api/api.js'
import { useParams } from 'react-router'


const EditProduct = () => {

  const {product_id} = useParams();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [url, setUrl] = useState('https://static.thenounproject.com/png/394239-200.png')

  async function fetchData() {
    let response = await axios.get('product/get', {params:{product_id : product_id}})
    let data = await response.data;
    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price)
    setUrl(data.photo)
  }

  useEffect(() => {
    fetchData();

  },[]);

  function updateData(e){
    e.preventDefault();

    const data = {
      product_id: product_id,
      title: title,
      description: description,
      price: price,
      photo: url,
    };
    
    axios.post('product/update', data);
  }

  return (
    <div className={styles.dashboard}>
      <form className={styles.form} onSubmit={(e)=>updateData(e)}>
        <input 
          type="text" 
          className={styles.input} 
          placeholder='Title' 
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <textarea 
          type="text" 
          className={styles.textArea} 
          placeholder='Description'
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
        />
        <input 
          type='number' 
          min={0} 
          className={styles.input} 
          placeholder='Price'
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
        <input 
          type="url" 
          className={styles.input} 
          placeholder='Photo URL' 
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
        />
        <img className={styles.photo} src={url}/>
        <button className={styles.button} type='submit'>Сохранить</button>
      </form>
    </div>
  )
}

export default EditProduct