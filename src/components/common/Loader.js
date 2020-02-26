import React from "react";
import MDSpinner from "react-md-spinner";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite-jss';

const Loader = ({ size }) => {
    return (
        <div className={`card ${css(styles.loaderContainer)}`}>
            <MDSpinner size={size} />
        </div>
    );
};

Loader.propTypes = {
    size: PropTypes.number
};

const styles = StyleSheet.create({
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loader;