import React from "react";
import { StyleSheet, css } from 'aphrodite-jss';

import { fontFamilies } from "../../styles/fonts";
import { colors } from "../../styles/colors";

const Header = () => {
    return (
        <div className={css(styles.header)}>
            Pokedex
        </div>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: fontFamilies.modak,
        height: '70px',
        backgroundColor: colors.secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '50px',
        marginBottom: '20px'
    }
});

export default Header;