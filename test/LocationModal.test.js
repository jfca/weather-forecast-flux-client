import React from "react";
import ReactDOM from "react-dom";
import LocationSelectModal from "../src/components/locations/LocationSelectModal";
import { countries,cities } from "../src/testData";

describe('LocationSelectorModal', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with an id', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.querySelector('div#location-select-modal')).not.toBeNull();
    });

    it('renders a select component for countries', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.querySelector('select#countries')).not.toBeNull();
    });

    it('renders a default select option component for countries', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.querySelector('option#default-select-country'))
            .not.toBeNull();
        expect(container.querySelector('#default-select-country').textContent)
            .toMatch('Select Country');
    });

    //@TODO Implement Enzyme testing library to test React components
    it.skip('renders a country select options component', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.find('CountrySelectOptions').exists()).toBeFalsy();
    });

    it('renders a select component for cities', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.querySelector('select#cities')).not.toBeNull();
    });

    it('renders a default select option component for cities', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.querySelector('option#default-select-city'))
            .not.toBeNull();
        expect(container.querySelector('#default-select-city').textContent)
            .toMatch('Select City');
    });

    //@TODO Implement Enzyme testing library to test React components
    it.skip('renders a city select options component', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.find('CitySelectOptions').exists()).toBeFalsy();
    });

    it('renders a submit button for the modal form', () => {
        render(<LocationSelectModal countries={countries} cities={cities} />);
        expect(container.querySelector('#select-location-btn')).not.toBeNull();
    });
});
