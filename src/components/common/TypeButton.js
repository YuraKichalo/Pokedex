import React from "react";
import PropTypes from 'prop-types';

const TypeButton = ({ color, text }) => {
    return <div className={`ui small ${color} button`}>{text}</div>
};

TypeButton.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
};

export default TypeButton;