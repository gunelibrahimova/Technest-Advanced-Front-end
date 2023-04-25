import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import Products from '../components/Products/Products'

const MyRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default MyRouter