import React from 'react';
import PropTypes from 'prop-types';

// @TODO user should be able to configure the size of the component.
// @TODO css clip values for .circle-wrap, .circle, .mask, and .fill is set by user and based on 'value' property
const PercentageCircle = ({ title, value }) => {
    return (
        <div className="pc-container mx-1">
            <div className="circle-wrap">
                <div className="circle">
                    <div className="mask full">
                        <div className="fill"></div>
                    </div>
                    <div className="mask half">
                        <div className="fill"></div>
                    </div>
                    <div className="inside-circle">{ value }</div>
                </div>
            </div>
            <p className="pc-title">{ title }</p>
        </div>
    );
};

PercentageCircle.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default PercentageCircle;