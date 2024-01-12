import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import './App.css'

import Navigation from './Components/Navigation/Navigation'
import Products from './Components/Products/Products'
import Manage from './Components/Manage/Manage';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import SingleProduct from './Components/SingleProduct/SingleProduct';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === '/'){
      navigate('/products')
    }
  },[])


  return (
    <>
      <header>
        <Navigation />
      </header>

      <Routes>
        <Route path='products/' element={<Products/>}/>
        <Route path='product/:product_id' element={<SingleProduct/>}/>
        
        <Route path='manage/'>
          <Route path='' element={<Manage/>}/>
          <Route path='product/create' element={<CreateProduct/>}/>
          <Route path='product/edit/:product_id' element={<EditProduct/>}/>
        </Route>
      </Routes> 
    </>
  )
}

export default App
