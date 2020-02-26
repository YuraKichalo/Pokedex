import React from "react";
import PropTypes from 'prop-types';
import SkyLight from 'react-skylight';

import PokesDetails from "./PokesDetails";
import { colors } from "../../styles/colors";

const DetailsModal = ({ modalRef, pokemonDetails }) => {

    const modalCustomStyles = {
        backgroundColor: colors.secondary,
        color: colors.white,
        textAlign: 'center'
    };

    return (
        <SkyLight
            hideOnOverlayClicked={true}
            title={pokemonDetails.name.toUpperCase()}
            transitionDuration={1000}
            dialogStyles={modalCustomStyles}
            ref={modalRef}
        >
            <PokesDetails pokemonDetails={pokemonDetails} />
        </SkyLight>
    );
};

DetailsModal.propTypes = {
    modalRef: PropTypes.func.isRequired,
    pokemonDetails: PropTypes.object.isRequired
};

export default DetailsModal;