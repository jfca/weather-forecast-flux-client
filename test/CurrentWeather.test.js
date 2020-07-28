import React from "react";
import ReactDOM from 'react-dom';
import CurrentWeatherRow from '../src/components/currentweather/CurrentWeatherRow';
import CurrentWeatherSection from "../src/components/currentweather/CurrentWeatherSection";
import { currentweather, empty_currentweather } from "../src/testData";

describe('CurrentWeatherRow', () => {
    let currentforecast;
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders the average temperature', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#avg-temp')).not.toBeNull();
        expect(container.querySelector('#avg-temp').textContent)
            .toEqual(currentweather.avg_temp);
    });

    it('renders missing average temperature', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#avg-temp')).not.toBeNull();
        expect(container.querySelector('#avg-temp').textContent).toMatch('NA');
    });

    it('renders short description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#short-desc')).not.toBeNull();
        expect(container.querySelector('#short-desc').textContent)
            .toMatch(currentweather.short_desc);
    });

    it('renders missing short description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#short-desc')).not.toBeNull();
        expect(container.querySelector('#short-desc').textContent).toMatch('NA');
    });

    it('renders long description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#desc')).not.toBeNull();
        expect(container.querySelector('#desc').textContent)
            .toMatch(currentweather.description);
    });

    it('renders missing long description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#desc')).not.toBeNull();
        expect(container.querySelector('#desc').textContent).toMatch('NA');
    });

    it('renders humidity level of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#humidity')).not.toBeNull();
        expect(container.querySelector('#humidity').textContent)
            .toMatch(currentweather.humidity + '%');
    });

    it('renders missing humidity level of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#humidity')).not.toBeNull();
        expect(container.querySelector('#humidity').textContent).toMatch('NA');
    });

     it('renders wind direction of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#winddegree')).not.toBeNull();
        expect(container.querySelector('#winddegree').textContent)
            .toMatch(currentweather.winddegree);
    });

    it('renders missing wind direction of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#winddegree')).not.toBeNull();
        expect(container.querySelector('#winddegree').textContent).toMatch('NA');
    });

     it('renders wind speed of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#windspeed')).not.toBeNull();
        expect(container.querySelector('#windspeed').textContent)
            .toMatch(currentweather.windspeed + ' m/s');
    });

    it('renders missing wind speed of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#windspeed')).not.toBeNull();
        expect(container.querySelector('#windspeed').textContent).toMatch('NA');
    });
});

describe('CurrentWeatherSection', () => {
    let currentforecast;
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders the component id', () => {
        render(<CurrentWeatherSection currentforecast={currentweather}/>);
        expect(container.querySelector('#current-weather-section')).not.toBeNull();
    });

    it('renders the section heading', () => {
        render(<CurrentWeatherSection currentforecast={currentweather} />);
        expect(container.querySelector('#current-weather-title').textContent)
            .toMatch('Current Weather');
    });
});
