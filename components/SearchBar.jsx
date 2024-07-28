import React from 'react'

export default function SearchBar({SetQuery}) {
  return (
     <div className="search-container ">  
        <i  classname="fa-solid fa-magnifying-glass"></i>
         <input type="text" placeholder='search for a country...' onChange={(e)=> SetQuery(e.target.value.toLowerCase()) }  />
     </div>
  )
}
