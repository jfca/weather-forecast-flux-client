import React, { useContext } from 'react';
import {Route, Redirect} from "react-router-dom";
import LocationContext from "../../context/location/locationContext";

const PrivateRoute = ({ component: Component, ...rest}) => {
    const forecastlocationContext = useContext(LocationContext);
    const { currentLocation } = forecastlocationContext;

    return (
        <Route
            {...rest}
            render={props =>
                currentLocation === null ? (
                    <Redirect to='/' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;