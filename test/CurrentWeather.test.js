import React from "react";
import ReactDOM from 'react-dom';
import CurrentWeatherRow from '../src/components/currentweather/CurrentWeatherRow';
import CurrentWeatherSection from "../src/components/currentweather/CurrentWeatherSection";
import {convertKelvinToCelsius, getWindDirection} from "../utils/helperFuncs";

const currentweather = {
    avg_temp: convertKelvinToCelsius(293.7),
    short_desc: "Clouds",
    description: "scattered clouds",
    humidity: 83,
    winddegree: getWindDirection(40),
    windspeed: 4.1,
    iconurl: "http://openweathermap.org/img/wn/03d.png"
};

const empty_currentweather = {
    avg_temp: "",
    short_desc: "",
    description: "",
    humidity: "",
    winddegree: "",
    windspeed: "",
    iconurl: ""
};

describe('CurrentWeatherRow', () => {
    let currentforecast;
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with the correct id', () => {
        render(<CurrentWeatherRow currentforecast={currentweather}/>);
        expect(container.querySelector('div#cwr')).not.toBeNull();
    });

    it('renders the average temperature', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#avg-temp').textContent)
            .toEqual(currentweather.avg_temp);
    });

    it('renders missing average temperature', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#avg-temp').textContent).toMatch('NA');
    });

    it('renders short description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#short-desc').textContent)
            .toMatch(currentweather.short_desc);
    });

    it('renders missing short description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#short-desc').textContent).toMatch('NA');
    });

    it('renders long description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#desc').textContent)
            .toMatch(currentweather.description);
    });

    it('renders missing long description of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#desc').textContent).toMatch('NA');
    });

    it('renders humidity level of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#humidity').textContent)
            .toMatch(currentweather.humidity + '%');
    });

    it('renders missing humidity level of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#humidity').textContent).toMatch('NA');
    });

     it('renders wind direction of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#winddegree').textContent)
            .toMatch(currentweather.winddegree);
    });

    it('renders missing wind direction of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
        expect(container.querySelector('#winddegree').textContent).toMatch('NA');
    });

     it('renders wind speed of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={currentweather} />);
        expect(container.querySelector('#windspeed').textContent)
            .toMatch(currentweather.windspeed + ' m/s');
    });

    it('renders missing wind speed of currentweather forecast', () => {
        render(<CurrentWeatherRow currentforecast={empty_currentweather} />);
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
        expect(container.querySelector('div#cws')).not.toBeNull();
    });

    it('renders the section heading', () => {
        render(<CurrentWeatherSection currentforecast={currentweather} />);
        expect(container.querySelector('h1').textContent).toMatch('Current Weather');
    });

    it('renders one header and one currentweather weather row component', () => {
        currentforecast = {};
        render(<CurrentWeatherSection currentforecast={currentforecast}/>);
        expect(container.querySelector('div#cwr')).not.toBeNull();
        expect(container.querySelector('div#cws').children).toHaveLength(2);
    });
});
