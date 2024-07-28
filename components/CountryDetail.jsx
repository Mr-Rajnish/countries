import React, { useEffect, useState } from 'react'
import './CountryDetails.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import CountryDetailsShimmer from './CountryDetailsShimmer';

import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';


export default function CountryDetail() {

  // custom hook
  const windowSize=useWindowSize();

const [isDark]=useTheme();

  // const countryName= new URLSearchParams(location.search).get('name')

  // using dynamic routing
  const params=useParams()
  // console.log(params);
  const countryName=params.Country;

  const {state}=useLocation();
  // console.log(state)

 
 
  const [CountryData,setCountryData]=useState(null)
  const [NotFound,setNotFound]=useState(false)
  // console.log(CountryData?.borders);
  // console.log(CountryData)

  function updateCountryData(data){
      setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0].common,
      population: data.population.toLocaleString('en-IN'),
      region:  data.region,
      flag: data.flags.svg,
      subregion: data.subregion ,
      capital: data.capital.join(' '),
      topleveldomain: data.tld,
      currencies: Object.values(data.currencies || {}).map((currency) => currency.name).join(', '),
       Language: Object.values(data.languages || {}).join(', '),
       borders:[],
          })

    if(!data.borders){
data.borders=[]
      }

    Promise.all(data.borders.map(border=>{
    return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
       .then((res) => res.json())
       .then(([borderCountry])=> borderCountry.name.common)
      })).then((borders)=>{
       setCountryData((prevState)=>({...prevState,borders}))
     })

  }
  

  useEffect(()=>{
      if(state){
        updateCountryData(state)
        return
        }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>res.json())
    .then(([data])=>{
   // console.log(data);
     updateCountryData(data);

  }).catch((err)=>{
    setNotFound(true)
  })
},[countryName])


 // console.log(countryName)


 if(!CountryData||CountryData.length===0){
   return  <CountryDetailsShimmer/>
 }

  return (
    <main className={`${isDark? 'dark' : ''}`}>
      <h1 style={{textAlign:"center"}}>Welcome to Rajnish Project</h1>
    <p style={{textAlign:"center"}}> Window size :{windowSize.width}X{windowSize.height}</p>
    <div className="country-details-container">
      <span className="back-button" onClick={()=>history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <img src={CountryData.flag} alt={`${CountryData.name} flag`} />
        <div className="details-text-container">
          <h1>{CountryData.name}</h1>
          <div className="details-text">
            <p><b>Native Name: {CountryData.nativeName || CountryData.name} </b><span className="native-name"></span></p>
            <p><b>Population: {CountryData.population} </b><span className="population"></span></p>
            <p><b>Region: {CountryData.region} </b><span className="region"></span></p>
            <p><b>Sub Region: {CountryData.subregion} </b><span className="sub-region"></span></p>
            <p><b>Capital: {CountryData.capital} </b><span className="capital"></span></p>
            <p>
              <b>Top Level Domain: {CountryData.topleveldomain} </b><span className="top-level-domain"></span>
            </p>
            <p><b>Currencies: {CountryData.currencies} </b><span className="currencies"></span></p>
            <p><b>Languages: {CountryData.Language} </b><span className="languages"></span></p>
          </div>
         { CountryData.borders.length!==0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;
          {
             CountryData.borders.map((border)=> <Link key={border} to={`/${border}`}>{border}</Link>)

          }
          
          </div>
        }
        </div>
      </div>
    </div>
  </main>
  )

}