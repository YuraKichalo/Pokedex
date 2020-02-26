import React from "react";
import PropTypes from 'prop-types';

const DetailsListItem = ({ rightText, leftText }) => {
    return (
        <div className='item'>
            <div className='right floated content'>{rightText}</div>
            <div className='left floated content'>{leftText}</div>
        </div>
    );
};

DetailsListItem.propTypes = {
    rightText: PropTypes.number.isRequired,
    leftText: PropTypes.string.isRequired
};

export default DetailsListItem;