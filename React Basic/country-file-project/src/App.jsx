import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'



// Get Country File ALL
const getCountryAll = async() =>{
const res = await fetch('https://restcountries.com/v3.1/all')
return(res.json())
} 
const AllCountries = getCountryAll();

function App() {
  return (
    <>

<Suspense fallback={<h2>Loading Data File ......</h2>}>
  <Countries AllCountries={AllCountries}></Countries>
</Suspense>

    </>
  )
}

export default App
