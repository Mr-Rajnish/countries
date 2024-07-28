import React from 'react'
import './CountryListShimmer.css'

export default function CountryListShimmer() {

    // not a good way of copying multiple div card instead we use loop on empty array and map it 

    // empty array can be created with 2 wats
    // 1. new Array(10).fill('')

    //2. more efficient
  return (
    <div className='countries-container'>
      {
        Array.from({length:10}).map((el,i)=>{
            return  <div key={i} className='country-card  shimmer-card'></div>
          })
      }
      </div>
  )
}
