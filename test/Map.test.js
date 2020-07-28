import ReactDOM from "react-dom";
import MapSection from "../src/components/map/MapSection";
import { cities } from "../src/testData";
import React from "react";

describe('MapSection', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with an id', () => {
        render(<MapSection city={ cities } />);
        expect(container.querySelector('#map-section')).not.toBeNull();
    });
});

describe('Map', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders an img element with an id', () => {
        render(<MapSection city={ cities.byId['7533612'] } />);
        expect(container.querySelector('img#location-map')).not.toBeNull();
    });

    it('renders an alternate text value', () => {
        render(<MapSection city={cities.byId['7533612']} />);
        expect(container.querySelector('img').getAttribute('alt'))
            .toMatch('Map of ' + cities.byId['7533612'].name);
    });
});
