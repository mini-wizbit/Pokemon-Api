import React from 'react'
import { useEffect, useState } from 'react'

export default function PokemonSearch() {
const [searchPkm, setSearchPkm] = useState("")
const [newSearch, setNewSearch] = useState("")

useEffect (()=>{
    console.log("searchPkm -> ", searchPkm)
},[searchPkm])

  const handleSumbit = (e) => {
    e.preventDefault();
    setSearchPkm("")
  }

  return (
    <div>
        <h2>Pokemon Search</h2>
        <div className="searchBox">
            <form onSubmit={(e) =>{handleSumbit(e)}} >
                <label> Search for...</label>
                <input
                value={newSearch}
                onChange={(event)=> {setNewSearch(event.target.value)}}
                ></input>
            </form>
        </div>
    </div>

  )
}
