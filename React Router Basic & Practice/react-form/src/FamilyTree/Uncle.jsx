import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <p>Uncle</p>
            <section style={{display:'flex'}}><Cousin name={'Rahim'}></Cousin>
            <Cousin name={'Rahman'}></Cousin></section>
        </div>
    );
};

export default Uncle;