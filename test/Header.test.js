import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from 'react-router-dom';
import LocationForm from "../src/components/location/LocationForm";

describe('LocationForm', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders an icon for the searchinput field', () => {
        render(
            <MemoryRouter>
                <LocationForm />
            </MemoryRouter>
        );
        expect(container.querySelector('#search-form-input-container i')).not.toBeNull();
        expect(container.querySelector('#search-form-input-container i')
            .getAttribute('class')).toEqual('fas fa-search-location fa-2x');
    });

    it('renders an input field to search for a city name', () => {
        render(
            <MemoryRouter>
                <LocationForm/>
            </MemoryRouter>
        );
        expect(container.querySelector('#city-search')).not.toBeNull();
        expect(container.querySelector('#city-search')
            .getAttribute('type')).toEqual('text');
        expect(container.querySelector('#city-search')
            .getAttribute('placeholder')).toEqual('Search by City Name...');
        expect(container.querySelector('div#search-form-input-container > input:last-child')
            .getAttribute('type')).toEqual('submit');
    })
});

describe('MainMenu', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders teh main menu', () => {

    });
});