import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <p>Aunt</p>
            <section style={{display:'flex'}}><Cousin name={'ABul'}></Cousin>
            <Cousin name={'Kasem'}> </Cousin></section>
        </div>
    );
};

export default Aunt;