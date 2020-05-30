import React from "react";
import ReactDOM from "react-dom";
import Header from "../src/components/layout/Header";
import {MemoryRouter} from "react-router-dom";
import Location from "../src/components/location/Location";

describe('Location', () => {
    let container;
    const cityName = 'Ottawa';
    const countryCode = 'CA';

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders an icon for the current maps', () => {
        render(
            <MemoryRouter>
                <Location countryCode={countryCode} cityName={cityName} />
            </MemoryRouter>
        );
        expect(container.querySelector('#forecast-location i')).not.toBeNull();
        expect(container.querySelector('#forecast-location i')
            .getAttribute('class')).toEqual('fas fa-map-marker-alt');
    });

    it('renders a city name and country code', () => {
        render(
            <MemoryRouter>
                <Location countryCode={countryCode} cityName={cityName} />
            </MemoryRouter>
        );
        expect(container.querySelector('#forecast-location span')).not.toBeNull();
        expect(container.querySelector('#forecast-location span').textContent)
            .toEqual(`${cityName}, ${countryCode}`);
    })
});