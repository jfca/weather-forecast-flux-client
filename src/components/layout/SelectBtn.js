import React from 'react';

const SelectBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a href="#location-select-modal"
               className="btn-floating btn-large blue darken-2 modal-trigger"
            >
                <i className="large material-icons">add_location</i>
            </a>
        </div>
    );
};

export default SelectBtn;