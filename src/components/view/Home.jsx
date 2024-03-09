import Hero from './home/Hero.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  const fetchProducts = async () => {
    await axios.get(`http://localhost:8080/api/v1/products`).then(res => {
      console.log('A', res.data.data);
      if (Array.isArray(res.data.data)) {
        setProducts(res.data.data);
      }
    });
  };
  return (
    <>
      <Hero/>

    </>
  );
}

export default Home;