import React from 'react';

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <h2>{product.title}</h2>
      <p className='price'>Price: ₹{product.price}</p>
      <p className='rating'>
        Rating: {product.rating?.rate ?? 'Not Available'}
      </p>
      <p className='description'>{product.description}</p>
      <div className='buy-now'>Buy Now</div>
    </div>
  );
}

export default ProductCard;
