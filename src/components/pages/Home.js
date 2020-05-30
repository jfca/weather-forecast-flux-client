import React from 'react';
import LocationMap from "../maps/LocationMap";

const Home = props => {
    console.log('Home');
    return (
        <main className="home">
            <h2 className="my-05 text-center">Click on a marker to select a weather station</h2>
            <LocationMap />
        </main>
    );
};

export default Home;