import React, { Fragment } from 'react';
import spinner from "./spinner.gif";

const Spinner = () => {
    console.log('spinner');
    return (
        <Fragment>
            <img
                id="spinner"
                src={spinner}
                alt="Loading..."
            />
        </Fragment>
    )
}

export default Spinner;