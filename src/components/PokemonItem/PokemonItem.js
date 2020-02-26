import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite-jss';

import TypeButton from "../common/TypeButton";
import { getBtnColor } from "../services/typeBtnService";
import DetailsModal from "../PokesDetails/DetailsModal";

const PokemonItem = ({ name, pokemon }) => {

    const animated = useRef();

    const reference = ref => {
        animated.current = ref;
    };

    const onItemClick = () => {
        animated.current.show();
    };

    const renderItem = () => {

        return (
            <div className='card'>
                <div onClick={onItemClick} className={`image ${css(styles.imageContainer)}`}>
                    <img className={css(styles.img)} src={pokemon.sprites.front_default}  alt={name}/>
                </div>
                <div className='content'>
                    <div className={`header ${css(styles.header)}`}>{name}</div>
                </div>
                <div className='extra content'>
                    <div className='ui two buttons'>
                        {renderTypeBtns()}
                    </div>
                </div>
                <DetailsModal modalRef={reference} pokemonDetails={pokemon} />
            </div>
        );
    };

    const renderTypeBtns = () => {
        return pokemon.types.map(item => {
            return <TypeButton key={item.type.name} color={getBtnColor(item.type.name)} text={item.type.name} />
        });
    };

    return renderItem();
};

PokemonItem.propTypes = {
    name: PropTypes.string.isRequired,
    pokemon: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center'
    },
    imageContainer: {
        overflow: 'hidden'
    },
    img: {
        '&:hover': {
            transform: 'scale(1.2, 1.2)',
            transition: '0.2s ease',
            cursor: 'pointer'
        }
    }
});

export default PokemonItem;