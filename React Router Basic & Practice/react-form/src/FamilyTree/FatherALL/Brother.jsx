import React, { use } from 'react';
import { assetContext, assetMoney } from '../FamilyTree';

const Brother = () => {
    const newAsset = use(assetContext);
    const [money , setMoney] = use(assetMoney)
    return (
        <div>
            <h3>Brother :{newAsset}</h3>
            <button onClick={()=> setMoney(money + 100)}>Add 100$ </button>
        </div>
    );
};

export default Brother;