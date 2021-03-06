import React, {Fragment, useContext, useEffect} from 'react';
import ForecastContext from "../../context/forecasts/forecastContext";
import {secToMill} from "../../utils/helperFuncs";
import ForecastDailyRow from "./ForecastDailyRow";
import LocationContext from "../../context/location/locationContext";
import Spinner from "../layout/Spinner";

const CurrentForecastDetails = props => {
    const forecastContext = useContext(ForecastContext);
    const { loading, forecasts, getForecasts } = forecastContext;

    const locationContext = useContext(LocationContext);
    const { currentLocation, defaultLocation, setCurrentLocation } = locationContext;

    // Set initial current location
    useEffect(() => {
        if (currentLocation === null) {
            setCurrentLocation([
                defaultLocation.location.coordinates[0], /* lon */
                defaultLocation.location.coordinates[1]  /* lat */
            ]);
            getForecasts(defaultLocation.cityID);
        } else {
            getForecasts(currentLocation.cityID);
        }
    }, [currentLocation]);

    const isSameDate = (dateOne, dateTwo) => {
        let shortDateOne;
        let shortDateTwo;
        let result;
        try {
            shortDateOne = secToMill(dateOne);
            shortDateOne = new Date(shortDateOne).toDateString();
            shortDateTwo = secToMill(dateTwo);
            shortDateTwo = new Date(shortDateTwo).toDateString();
            result = shortDateOne === shortDateTwo;
        } catch (e) {
            console.log(e.msg);
            result = false;
        }
        return result;
    };

    const parseForecasts = (forecasts) => {
        let firstTime = true;
        let tempForecastsObj = {};
        let tempDateHeader = '';
        let tempForecastsArr = [];
        let tempWeeklyArr = [];
        for (let i=0; i < forecasts.length; i++) {
            if (!isSameDate(tempDateHeader, forecasts[i].dt)) {
                if (firstTime) {
                    tempDateHeader = forecasts[i].dt;
                    tempWeeklyArr.push(forecasts[i]);
                    firstTime = false;
                    continue;
                }

                tempForecastsObj = {
                    dateHeader: tempDateHeader,
                    hourlyForecasts: tempWeeklyArr,
                }
                tempForecastsArr.push(tempForecastsObj);

                tempDateHeader = forecasts[i].dt;
                tempWeeklyArr = [];
                tempWeeklyArr.push(forecasts[i]);
            } else {
                tempWeeklyArr.push(forecasts[i]);
            }
        }

        return tempForecastsArr;
    }

    return (
        <Fragment>
            {forecasts !== null && !loading ? (
                <section className="grid-rows-5 grid-gap-1 bg-primary p-1">
                {parseForecasts(forecasts.list).map((forecast) => (
                        <ForecastDailyRow
                            key={forecast.dateHeader.toString()}
                            forecastDate={forecast.dateHeader}
                            hourlyForecasts={forecast.hourlyForecasts}
                        />
                    )
                )}
            </section> ) : <Spinner/>}
        </Fragment>
    );
};

export default CurrentForecastDetails;