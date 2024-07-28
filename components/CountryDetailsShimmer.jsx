import React from 'react'
import './CountryDetailsShimmer.css'

export default function CountryDetailsShimmer() {
  return (
    <div className='country-details'>
        <div className='image'></div>
        <div className='details-text-container'>
            <h1 className='details'></h1>
            <div className='details-text'>

              {
                  Array.from({length:10}).map((el,i)=>{
                  return  <p key={i} className='apply'></p>
                    })
              }
            </div>
        </div>
    </div>
  )
}
