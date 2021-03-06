import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CurrentWeather from "./components/pages/CurrentWeather";
import WeatherMaps from "./components/pages/WeatherMaps";

import CurrentWeatherState from "./context/currentweather/CurrentWeatherState";
import ForecastState from "./context/forecasts/ForecastState";

import './App.css';
import Footer from "./components/layout/Footer";
import SettingsState from "./context/settings/SettingsState";
import ForecastLocationState from "./context/forecastlocation/ForecastLocationState";
import WeatherMapsState from "./context/weathermaps/WeatherMapsState";
import PrivateRoute from "./components/routing/PrivateRoute";

//@TODO create a help section for user documentation

const  App = () => {
    return (
        <SettingsState>
            <ForecastLocationState>
                <CurrentWeatherState>
                    <ForecastState>
                        <WeatherMapsState>
                            <Router>
                                <Fragment>
                                    <Header/>
                                    <div className="container">
                                        <Switch>
                                            <PrivateRoute exact path='/' component={Home}/>
                                            <Route exact path='/current' component={CurrentWeather}/>
                                            <Route exact path='/maps' component={WeatherMaps}/>
                                            <Route exact path='/about' component={About}/>
                                        </Switch>
                                    </div>
                                    <Footer/>
                                </Fragment>
                            </Router>
                        </WeatherMapsState>
                    </ForecastState>
                </CurrentWeatherState>
            </ForecastLocationState>
        </SettingsState>
    );
};

export default App;
