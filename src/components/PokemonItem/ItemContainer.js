import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { pokeAPI } from '../../api/api'
import PokemonItem from "./PokemonItem";
import Loader from "../common/Loader";

const ItemContainer = ({ name }) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        pokeAPI.getPokemon(name)
            .then(data => {
                setPokemon(data)
            })
    }, []);

    return !pokemon.id ? <Loader size={50} /> : <PokemonItem name={name} pokemon={pokemon} />
};

ItemContainer.propTypes = {
    name: PropTypes.string.isRequired
};

export default ItemContainer;