import React, {useState} from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import CartPage from './pages/CartPage';
import Slider from './components/Slider';
import off1 from './components/off1.png';
import off2 from './components/off2.png';
import './components/ProductList.css'
import t1 from './components/products/t1.jpg'
import ProductList from './components/ProductList';
import t2 from './components/products/t2.jpg'
import t3 from './components/products/t3.jpg'
import t4 from './components/products/t4.jpg'
import t5 from './components/products/t5.jpg'
import t6 from './components/products/t6.jpg'
import t7 from './components/products/t7.jpg'
import t8 from './components/products/t8.jpg'
import t9 from './components/products/t9.jpg'
import t10 from './components/products/t10.jpg'
import t11 from './components/products/t11.jpg'
import t12 from './components/products/t12.jpg'
import Footer from './components/Footer.jsx';
import RecommendedBanner from './components/RecommendedBanner.png'
import PaymentSuccess from './pages/PaymentSuccess.js';




const images = [off1, off2];
const products = [
  {
    id: 1,
    name: 'Ramen Graphic Tee',
    price: 600,
    image: t1,
  },
  {
    id: 2,
    name: 'Floral Graphic Tee',
    price: 600,
    image: t2,
  },
  {
    id: 3,
    name: 'Mario Graphic Tee',
    price: 600,
    image: t3,
  },
  {
    id: 4,
    name: 'Graffiti Graphic Tee',
    price: 600,
    image: t4,
  },
  {
    id: 5,
    name: 'Kawaii Pufferfish Graphic Tee',
    price: 600,
    image: t5,
  },
  {
    id: 6,
    name: 'Mt. Fuji Graphic Tee',
    price: 600,
    image: t6,
  },
  {
    id: 7,
    name: 'Ratatouille Graphic Tee',
    price: 600,
    image: t7,
  },
  {
    id: 8,
    name: 'Loons Graphic Tee',
    price: 600,
    image: t8,
  },
  {
    id: 9,
    name: 'Torino Graphic Tee',
    price: 600,
    image: t9,
  },
  {
    id: 10,
    name: 'Pumpkin Bows- Graphic Tee',
    price: 600,
    image: t10,
  },
  {
    id: 11,
    name: 'In Print We Trust- Floral Tee',
    price: 600,
    image: t11,
  },
  {
    id: 12,
    name: 'Blosson Days- Graphic Tee',
    price: 600,
    image: t12,
  },
];

function App() {
  return (
    <div className="App">
      <Home />
      <Slider images={images} /><br />
      <img
    src={RecommendedBanner}
    alt='RecommendedBanner'
    style={{
      'max-width': 'auto',
      'max-height': '1200px',
      'height': '100%',
      'width': '100%',
      'height': 'auto',
    }}
    />
    <ProductList products={products} />
      <Footer />
    </div>
  );
}
export default App;


