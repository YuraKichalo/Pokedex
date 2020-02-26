import React from "react";
import PropTypes from 'prop-types';
import Carousel from 'flat-carousel';
import { StyleSheet, css } from 'aphrodite-jss';

import DetailsListItem from "./DetailsListItem";

const PokesDetails = ({ pokemonDetails }) => {

    const renderCarousel = () => (
        <Carousel
            initialIndex={2}
        >
            {Object.values(pokemonDetails.sprites)
                .filter(img => img ? img : null)
                .map((img, i) => (
                    <div
                        key={i}
                        style={{ backgroundImage: `url(${img})` }}
                        className='demo-item'
                    />
                ))}
        </Carousel>
    );

    const renderPokemonStats = () => {
        return pokemonDetails.stats.map(({ base_stat, stat }) => (
            <DetailsListItem key={stat.name} rightText={base_stat} leftText={stat.name}/>
        ));
    };

    const renderList = () => (
        <div className={`ui inverted divided list ${css(styles.list)}`}>
            {renderPokemonStats()}
            <DetailsListItem rightText={pokemonDetails.moves.length} leftText='total moves'/>
        </div>
    );

    return (
        <div>
            {renderCarousel()}
            {renderList()}
        </div>
    );
};

const styles = StyleSheet.create({
    list: {
        maxWidth: '370px',
        margin: '15px auto !important'
    }
});

PokesDetails.propTypes = {
    pokemonDetails: PropTypes.object.isRequired
};

export default PokesDetails;