import React from 'react';
import AppDetails from "../about/AppDetails";
import AttributionList from "../about/AttributionList";

const About = () => {
    return (
        <main className="about">
            <AppDetails/>
            <AttributionList/>
        </main>
    );
};

export default About;