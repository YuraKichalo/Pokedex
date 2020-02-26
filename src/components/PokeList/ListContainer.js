import React, { useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PokeList from "./PokeList";
import { pokeAPI } from '../../api/api';
import { setPokes, loadMore } from '../../redux/poks-reducer'

const ListContainer = props => {

    const loadPokemons = () => {
        pokeAPI.getPokes(props.loadPokesUrl)
            .then(data => {
                props.setPokes(data.results);
                props.loadMore(data.next.slice(26));
            })
    };

    useEffect(() => {
        loadPokemons()
    }, []);

    return (
        <PokeList pokemons={props.pokemonsNames} loadMore={loadPokemons} />
    );
};

ListContainer.propTypes = {
    setPokes: PropTypes.func.isRequired,
    pokemonsNames: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
    loadPokesUrl: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        pokemonsNames: state.poksReducer.pokemonsNames,
        limit: state.poksReducer.limit,
        offset: state.poksReducer.offset,
        loadPokesUrl: state.poksReducer.loadPokesUrl
    };
};

export default connect(mapStateToProps, { setPokes, loadMore })(ListContainer);