import  { useState } from 'react';
import './country.css'
export default function country  ({country , handleVisited ,handleVisitedFlags}){
// console.log(country)
const [visit,setVisited] = useState(false)

const handleButton = () =>{
setVisited(!visit)
handleVisited(country)
}

//AS A Check Marked Code here
// const [marked , setMarked] = useState(false)
// const CheckMarkedButton = ()=>{
// setMarked(!marked)
// }

    return (
            <div className={`border-2 mt-5 p-5 rounded-xl grid  justify-items-center gap-5 ${visit && 'visited-card'}`}>
            <h2 className='text-2xl'>Name : <span className='text-green-600'>{country.name.common}</span></h2>
            <img className='w-40 h-auto' src={country.flags?.png}></img>
            <p>Official Name : {country.name.official}</p>
            <p>Population : {country.population} </p>
            <p>Region : {country.region}</p>
            <p>Independent :{country.independent ? 'Free' : 'Not Free'}</p>
            <button className={`${visit && 'button-color'}`} onClick={handleButton}>
                { visit?'Visited' : 'Not Visited'}
                </button>
            <button onClick={()=>  handleVisitedFlags(country.flags.png)}>Done ✅</button>
            {/* <button onClick={CheckMarkedButton}>{marked ? 'Check Mark' : "Not Check"}</button> */}
        </div>
    );
};


