import React, { useEffect, useState } from 'react'
// import Countriesdata from '../Countriesdata'
import CountryCard from './CountryCard';
import { useState } from 'react';
import CountryListShimmer from './CountryListShimmer';

// usestate ==> when we want to create a new state then we use usestate

export default function CountriesList({Query}) {

const [CountriesData,setCountriesData] =useState([])
// const [count,setCount]=useState(0)

// use effect ==> when we want to run our peice of code single time
//               when we want to monitor state i.e we want to run the peice of code when statevariable change just like count

useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then((res)=> res.json())
  .then((data)=>{
    setCountriesData(data);
  })
},[])


// useEffect(()=>{
//   console.log("hii")
// },[count])
 
if(CountriesData.length===0){
  return <CountryListShimmer/>
}

 return (
    <>

   <div className='countries-container'>{CountriesData.filter((Country)=> Country.name.common.toLowerCase().includes(Query) || Country.region.toLowerCase().includes(Query)).map((Country)=> {
    // console.log(Country);


    return (
    <CountryCard
    key={Country.name.common} // unique value
     name={Country.name.common} 
    flag={Country.flags.svg} 
    population={Country.population.toLocaleString('en-IN')} // population comma me aye 
    region={Country.region}
    capital={Country.capital?.[0]}
    data={Country}/>  
    )
   }
  )
}
   </div>
  
</>

  )
}
