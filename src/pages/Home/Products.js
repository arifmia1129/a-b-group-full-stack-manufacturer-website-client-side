import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get("products.json")
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-base-200 md:p-5 p-2 rounded-lg'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;