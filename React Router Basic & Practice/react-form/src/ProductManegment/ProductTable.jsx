import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h1>Products :{products.length}</h1>
            <table>
                <thead>
                    <tr>
                    <td>Products</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product , index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;