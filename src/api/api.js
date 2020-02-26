import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export const pokeAPI = {
    getPokes(url) {
        return instance.get(url)
            .then(resp => resp.data)
    },
    getPokemon(name) {
        return instance.get(`pokemon/${name}/`)
            .then(resp => resp.data)
    }
};