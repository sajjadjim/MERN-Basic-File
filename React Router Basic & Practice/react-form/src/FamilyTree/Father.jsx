import React from 'react';
import Myself from './FatherALL/Myself';
import Sister from './FatherALL/Sister';
import Brother from './FatherALL/Brother';

const Father = ({asset}) => {
    return (
        <div>
          <p>Father part this </p> 
          <section style={{display:'flex'}}>
            <Myself asset={asset}></Myself>
            <Sister></Sister>
            <Brother></Brother>
            </section> 
        </div>
    );
};

export default Father;