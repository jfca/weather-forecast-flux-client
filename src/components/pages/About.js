import React from 'react';
import AppDetails from "../about/AppDetails";
import AttributionList from "../about/AttributionList";

const About = props => {
    return (
        <section id="about">
            <AppDetails/>
            <AttributionList/>
        </section>
    );
};

export default About;