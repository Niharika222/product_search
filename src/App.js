import React, { useState } from 'react';
import ProductSearch from './components/ProductSearch';
import ProductCard from './components/ProductCard';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState(null);

  return (
    <div className='App'>
      <h1>Product Lookup Tool</h1>
      <ProductSearch
        setProducts={setProducts}
        setError={setErrMsg}
        setStatus={setStatus}
      />
      {(status === 'failed' || errMsg) && (
        <p style={{ color: 'red' }}>{errMsg}</p>
      )}
      {status === 'pending' && <p>Loading product...</p>}
      {status === 'succeeded' && products.length > 0 && (
        <div className='product-container'>
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
