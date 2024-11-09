import React, { useState } from 'react';
import axios from 'axios';
import { useDebounce } from '../hooks/useDebounce';

const fetchProduct = async (searchTerm) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    if (response.status === 200) {
      const filteredData = response.data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { success: true, data: filteredData };
    }
    return {
      success: false,
      message: response.data?.message || 'Failed to fetch products.',
    };
  } catch {
    return { success: false, message: 'Error fetching product data.' };
  }
};

function ProductSearch({ setProducts, setError, setStatus }) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedFetchProducts = useDebounce(async (term) => {
    if(!term)   {
   setProducts([]);
   setError(null)
   return;
      } 
    setStatus('pending');
    setError(null);
    const res = await fetchProduct(term);
    if (res.success) {
      if (res.data.length > 0) {
        setProducts(res.data);
      } else {
        setProducts([]);
        setError('Product not found.');
      }
    } else {
      setProducts([]);
      setError(res.message);
    }
    setStatus('succeeded');
  }, 500);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log({value})
    debouncedFetchProducts(value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search for a product'
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default ProductSearch;
