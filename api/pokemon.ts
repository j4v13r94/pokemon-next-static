import axios from "axios";

export const pokemon = axios.create({
    baseURL : 'https://pokeapi.co/api/v2'
})



