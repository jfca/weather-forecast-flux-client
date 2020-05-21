import React from 'react';
import WeatherMap from "../maps/WeatherMap";

const WeatherMaps = props => {
    return (
        <section id="map-dashboard" className="bg-dark">
            <WeatherMap />
        </section>
    );
};

export default WeatherMaps;