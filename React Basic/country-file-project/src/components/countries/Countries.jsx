import './countries.css'
import { use, useState } from "react";
import Country from "../country/country.jsx";


export default function GetCountriesDetails({ AllCountries }) {
    const countries = use(AllCountries);
    // console.log(countries)
    // UseState here ALL ---------------------------------------
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])
    // ------------------------Country Visited Number Adding------------------------- 
    const handleVisited = (country) => {
        // console.log('Country Are visited Added', country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    //---------------------- Country Flags Added Code Here -----------------------
    const handleVisitedFlags = (flag) => {
        console.log('Visited Country', flag)
        const newFlagVisitedCountry = [...visitedFlag, flag]
        setVisitedFlag(newFlagVisitedCountry)
    }

    return (
        <div>
            <h2>Number OF Country : {countries.length}</h2>
            <p>Total Number of Visited Country :{visitedCountries.length}</p>
            <div className='visited-flag-country'>
                {
                    visitedFlag.map((flag, index) => <img className='img-flag' key={index} src={flag}></img>)
                }
            </div>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    countries.map(country =>
                        <Country key={country.cca3}
                            handleVisited={handleVisited}
                            handleVisitedFlags={handleVisitedFlags}
                            country={country}>
                        </Country>)
                }
            </div>
        </div>
    );
};

