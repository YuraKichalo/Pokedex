// types
const SET_POKEMONS = 'SET_POKEMONS';
const LOAD_MORE = 'LOAD_MORE';

// reducers
const INITIAL_STATE = {
    pokemonsNames: [],
    loadPokesUrl: 'pokemon?limit=12'
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, pokemonsNames: [...state.pokemonsNames, ...action.data.map(p => p.name)] };
        case LOAD_MORE:
            return { ...state, loadPokesUrl: action.url };
        default:
            return state;
    }
};

// AC
export const setPokes = data => ({ type: SET_POKEMONS, data });
export const loadMore = url => ({ type: LOAD_MORE, url });