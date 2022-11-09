//const axios = require('axios');

// const pokemonApi = axios.create({
//     baseURL: 'https://pokeapi.co/api/v2/',
//   });

const baseURL = 'https://pokeapi.co/api/v2'

export const getPokemon = (params) => {
    return (

        fetch(`${baseURL}/pokemon/${params}`).then((response) => response.json())
        .then((data)=>{
            return data;
        })
        )
}