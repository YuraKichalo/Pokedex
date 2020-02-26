import React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

import { colors } from '../styles/colors'
import ListContainer from "./PokeList/ListContainer";
import Header from "./Header/Header";

const App = () => {
    return (
        <div className={css(styles.appContainer)}>
            <Header />
            <ListContainer />
        </div>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: colors.main,
        minHeight: '100vh'
    }
});

export default App;