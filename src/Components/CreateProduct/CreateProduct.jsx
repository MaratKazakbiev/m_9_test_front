import React, { useState } from 'react'
import styles from './createproduct.module.css'
import axios from '../api/api.js'

const CreateProduct = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()
  const [url, setUrl] = useState('https://static.thenounproject.com/png/394239-200.png')

  function createProduct(e){
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      price: price,
      photo: url,
    };
    
    axios.post('product/create', data);
  }

  return (
    <div className={styles.dashboard}>
      <form className={styles.form} onSubmit={(e)=>createProduct(e)}>
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
        <button className={styles.button} type='submit'>Создать</button>
      </form>
    </div>
  )
}

export default CreateProduct