import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManegment = () => {
    const [products , setProducts] = useState([])

    const handlleProducts = (product)=>{
        const newProducts= [...products , product]
        setProducts(newProducts)
    }
    return (
        <div>
            <ProductForm handlleProducts={handlleProducts}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManegment;