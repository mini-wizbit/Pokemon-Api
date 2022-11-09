import React from 'react'
import { useEffect, useState } from 'react'
import { getPokemon } from '../Utils/API-Call'

export default function PokemonSearch() {
const [searchPkm, setSearchPkm] = useState("pikachu")
const [newSearch, setNewSearch] = useState("")

useEffect (()=>{
    console.log("searchPkm -> ", searchPkm)
    getPokemon(searchPkm)
    .then((data)=>{
        console.log(data)
    }
    )
},[searchPkm])

  const handleSumbit = (e) => {
    e.preventDefault();
    setSearchPkm(newSearch)
    setNewSearch("")
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
