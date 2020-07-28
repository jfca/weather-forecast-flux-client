import React from "react";
import ReactDOM from "react-dom";
import LocationSection from "../src/components/locations/LocationSection";
import LocationName from "../src/components/locations/LocationName";
import { countries,cities } from "../src/testData";

describe('LocationName', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with an id', () => {
        render(<LocationName country={countries.byId['344']} city={cities.byId['7533612']} />);
        expect(container.querySelector('#location-name')).not.toBeNull();
    });

    it('renders a country and city label', () => {
        render(<LocationName country={countries.byId['344']} city={cities.byId['7533612']} />);
        expect(container.querySelector('#location-name span'))
            .not.toBeNull();
        expect(container.querySelector('#location-name span').textContent)
            .toMatch('Hong Kong Special Administrative Region, Kowloon City');
    });
});

describe('LocationSection', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with an id', () => {
        render(<LocationSection country={countries.byId['344']} city={cities.byId['7533612']} />);
        expect(container.querySelector('#location-section')).not.toBeNull();
    });
});
