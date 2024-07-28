
import SearchBar from "./SearchBar"
import SearchMenu from "./SearchMenu"
import CountriesList from "./CountriesList"
import {  useState } from "react"

import { useWindowSize } from "../hooks/useWindowSize"
import { useTheme } from "../hooks/useTheme"




export default function Home(){
    const [Query,SetQuery]=useState('')
    const [isDark]=useTheme()
    const windowSize=useWindowSize()

  return (
    <main className={`${isDark? 'dark' : ''}`}>
    <div className="search-filter-container">
    <SearchBar SetQuery={SetQuery} />
    <SearchMenu SetQuery={SetQuery} />
    </div>
    <h1 style={{textAlign:"center"}}>Welcome to Rajnish Project</h1>
    <p style={{textAlign:"center"}}> Window size :{windowSize.width}X{windowSize.height}</p>
    <br/>
    <CountriesList Query={Query} />
    </main>
  )

}

