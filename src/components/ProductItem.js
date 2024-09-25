import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>Rs.{product.price}/-</h3>
      <button style={{'color': 'black',
      'justify-content': 'center',
      'border-radius':'5px',
      'background-color':'white',
      'font-size': '18px',
      'font-stretch': 'expanded',
      'font-family': "Nunito Sans",
      'font-optical-sizing': 'auto',
      'font-weight': '80px',
      'font-style': 'normal',
}}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
