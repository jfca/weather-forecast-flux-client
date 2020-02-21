import React, {Fragment, useEffect, useState} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';
import {currentweather, forecasts, countries, cities} from "./testData";
import LocationSection from "./components/locations/LocationSection";
import CurrentWeatherSection from "./components/currentweather/CurrentWeatherSection";
import ForecastSection from "./components/forecasts/ForecastSection";
import SelectBtn from "./components/layout/SelectBtn";
import MapSection from "./components/map/MapSection";
import LocationSelectModal from "./components/locations/LocationSelectModal";

const  App = () => {
    const [currentCity, setCurrentCity] = useState('7533612'); //Id value
    const [currentCountry, setCurrentCountry] = useState('344'); //Id value

      // Init Materialze CSS
      useEffect(() => {
        M.AutoInit();
      });

    const handleCurrentCity = id => {
        setCurrentCity(id);
    };

    const handleCurrentCountry = code => {
        setCurrentCountry(code);
    };

  return (
    <Fragment>
        <div className="container">
            <SelectBtn/>
            <MapSection city={cities.byId[currentCity]}/>
            <LocationSection
                country={countries.byId[currentCountry]}
                city={cities.byId[currentCity]}
            />
            <CurrentWeatherSection currentforecast={currentweather}/>
            <ForecastSection forecasts={forecasts}/>
            <LocationSelectModal
                selectedCountry={currentCountry}
                selectedCity={currentCity}
                countries={countries}
                cities={cities}
                handleCurrentCountry={handleCurrentCountry}
                handleCurrentCity={handleCurrentCity}
            />
        </div>
    </Fragment>
  );
}

export default App;
