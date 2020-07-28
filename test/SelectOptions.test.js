import React from "react";
import ReactDOM from "react-dom";
import CountrySelectOptions from "../src/components/locations/CountrySelectOptions";
import CitySelectionOptions from "../src/components/locations/CitySelectOptions";
import { countries, cities } from "../src/testData";


describe('CountrySelectOptions', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders 3 country option elements', () => {
        render(<CountrySelectOptions countries={countries}/>);
        expect(container.querySelectorAll('option')).toHaveLength(3);
        expect(container.querySelectorAll('option')[0].textContent)
            .toEqual("Hong Kong Special Administrative Region (HK)");
        expect(container.querySelectorAll('option')[0]
            .getAttribute('value')).toEqual("344");
        expect(container.querySelectorAll('option')[1].textContent)
            .toEqual("Hungary (HU)");
        expect(container.querySelectorAll('option')[1]
            .getAttribute('value')).toEqual("348");
        expect(container.querySelectorAll('option')[2].textContent)
            .toEqual("Iceland (IS)");
        expect(container.querySelectorAll('option')[2]
            .getAttribute('value')).toEqual("352");
    });
});

describe('CitySelectOptions', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders 3 city option elements', () => {
        render(<CitySelectionOptions cities={cities}/>);
        expect(container.querySelectorAll('option')).toHaveLength(3);
        expect(container.querySelectorAll('option')[0].textContent)
            .toEqual("Kowloon City");
        expect(container.querySelectorAll('option')[0]
            .getAttribute('value')).toEqual("7533612");
        expect(container.querySelectorAll('option')[1].textContent)
            .toEqual("Sheung Wan");
        expect(container.querySelectorAll('option')[1]
            .getAttribute('value')).toEqual("1818833");
        expect(container.querySelectorAll('option')[2].textContent)
            .toEqual("Tsuen Wan");
        expect(container.querySelectorAll('option')[2]
            .getAttribute('value')).toEqual("1818209");
    });
});
