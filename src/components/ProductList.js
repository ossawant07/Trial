import React from 'react';
import '../components/ProductList.css'
import ProductItem from '../components/ProductItem'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
