import React, { useContext } from 'react';
import {Route, Redirect} from "react-router-dom";
import ForecastLocationContext from "../../context/forecastlocation/forecastlocationContext";

const PrivateRoute = ({ component: Component, ...rest}) => {
    const forecastlocationContext = useContext(ForecastLocationContext);
    const { currentLocation } = forecastlocationContext;

    return (
        <Route
            {...rest}
            render={props =>
                currentLocation !== null ? (
                    <Redirect to='/' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;