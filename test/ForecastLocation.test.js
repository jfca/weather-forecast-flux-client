import React from "react";
import ReactDOM from "react-dom";
import Header from "../src/components/layout/Header";
import {MemoryRouter} from "react-router-dom";
import ForecastLocation from "../src/components/forecastlocation/ForecastLocation";

describe('ForecastLocation', () => {
    let container;
    const cityName = 'Ottawa';
    const countryCode = 'CA';

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders an icon for the current weathermaps', () => {
        render(
            <MemoryRouter>
                <ForecastLocation countryCode={countryCode} cityName={cityName} />
            </MemoryRouter>
        );
        expect(container.querySelector('#forecast-location i')).not.toBeNull();
        expect(container.querySelector('#forecast-location i')
            .getAttribute('class')).toEqual('fas fa-map-marker-alt');
    });

    it('renders a city name and country code', () => {
        render(
            <MemoryRouter>
                <ForecastLocation countryCode={countryCode} cityName={cityName} />
            </MemoryRouter>
        );
        expect(container.querySelector('#forecast-location span')).not.toBeNull();
        expect(container.querySelector('#forecast-location span').textContent)
            .toEqual(`${cityName}, ${countryCode}`);
    })
});