import React from 'react';
import Father from './Father';
import Aunt from './Aunt';
import Uncle from './Uncle';

const Grandpa = ({asset}) => {
    return (     
        <div>
            <h3>GandPa</h3>    
            <section style={{display:'flex'}}>               
        <Father asset={asset}></Father>
           <Aunt></Aunt>
           <Uncle></Uncle>
        </section>
        </div>
    );
};

export default Grandpa;