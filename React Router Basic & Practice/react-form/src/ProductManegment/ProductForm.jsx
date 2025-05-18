import React from 'react';

const ProductForm = ({handlleProducts}) => {
    const handleProduct = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name , price , quantity)
        // create a object type Data
        const newProduct = {
            name , price , quantity
        } 
        // console.log(newProduct)
        handlleProducts(newProduct)

    }
    return (
        <div>
            <form onSubmit={handleProduct}>
                <input type="text" name="name" id="" placeholder='product name' />
                <br />
                <input type="number" name="quantity" id="" placeholder='product quantity' />
                <br />
                <input type="number" name="price" id="" placeholder='product price'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProductForm;