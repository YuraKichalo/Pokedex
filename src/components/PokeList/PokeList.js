import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite-jss';

import ItemContainer from "../PokemonItem/ItemContainer";

const PokeList = ({ pokemons, loadMore }) => {

    const renderList = () => {
        return pokemons.map(name => <ItemContainer key={name} name={name} />);
    };

    const handleClick = () => {
        loadMore();
    };

    return (
        <div className={`ui container ${css(styles.container)}`}>
            <div className='ui six doubling cards'>
                {renderList()}
            </div>
            <button onClick={handleClick} className={`fluid ui button ${css(styles.button)}`}>Load more</button>
        </div>
    );
};

PokeList.propTypes = {
    pokemons: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: '20px'
    },
    button: {
        marginTop: '15px !important'
    }
});

export default PokeList;