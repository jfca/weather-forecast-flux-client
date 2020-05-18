import React from 'react';
import WeatherMap from "../weathermaps/WeatherMap";

const WeatherMaps = props => {
    return (
        <section id="map-dashboard" className="bg-terciary">
            <WeatherMap />
        </section>
    );
};

export default WeatherMaps;