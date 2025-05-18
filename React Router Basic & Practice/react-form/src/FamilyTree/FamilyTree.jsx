import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const assetContext = createContext('')
export const assetMoney = createContext(0)
const FamilyTree = () => {
    const asset = 'diamond'
    const newAsset='Gold'
    const [money , setMoney] = useState(0);
    return (
        <div className='family-tree'>
            <h2>Family Tree this...</h2>
            <h3>Total Family Money {money}$ </h3>
            <assetMoney.Provider value={[money , setMoney]}>
            <assetContext.Provider value={newAsset}>
        <Grandpa asset={asset}></Grandpa>
            </assetContext.Provider>
            </assetMoney.Provider>
            
        </div>
    );
};

export default FamilyTree;