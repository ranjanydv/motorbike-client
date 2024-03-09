import { useEffect, useState } from 'react';
import axios from 'axios';

import Breadcrumb from '../../shared/Breadcrumbs.jsx';
import Bike from '../../../assets/H2R.jpg'
import PrimaryButton from '../../shared/PrimaryButton.jsx';

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    <section className="">
      <Breadcrumb pageName="Products"/>
      <div className="py-6">
        <h1 className="text-4xl font-semibold">Explore our products</h1>
      </div>
      <div className="mx-auto grid w-full items-center space-y-4 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-md border">
              {/* src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" */}
            <img
              src={Bike}
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">Kawasaki Ninja H2R</h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
              </p>
              <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Racing
              </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Kawasaki
              </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #MotoGP
              </span>

              </div>
              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : </span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-black"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-green-500"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-500"></span>
              </div>
              {/* <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Size : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  8 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  9 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  10 UK
                </span>
              </div> */}
              <span className='mt-4 block'>
                <PrimaryButton text="Add to Cart" small fullWidth />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;