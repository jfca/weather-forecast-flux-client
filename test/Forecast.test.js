import React from "react";
import ReactDOM from 'react-dom';
import ForecastDataRow from "../src/components/forecasts/ForecastDataRow";
import ForecastHeadingRow from "../src/components/forecasts/ForecastHeadingRow";
import ForecastSection from "../src/components/forecasts/ForecastSection";
import {
    convertKelvinToCelsius, getIconDescription, buildWeatherIconURL,
    parseTime, buildIdFromDateString, parseDate
} from '../utils/helperFuncs';

const forecasts = [
    {
        id:1581584400,
        datetime: "2020-02-13 09:00:00",
        iconurl: "http://openweathermap.org/img/wn/03d.png",
        alt_desc: "scattered clouds",
        min_temp: convertKelvinToCelsius(293.59),
        max_temp: convertKelvinToCelsius(293.64)
    },
    {
        id:1581566400,
        datetime: "2020-02-13 12:00:00",
        iconurl: "http://openweathermap.org/img/wn/03n.png",
        alt_desc: "scattered clouds",
        min_temp: convertKelvinToCelsius(293.49),
        max_temp: convertKelvinToCelsius(293.53)
    },
    {
        id:1581642000,
        datetime: "2020-02-14 09:00:00",
        iconurl: "http://openweathermap.org/img/wn/03n.png",
        alt_desc: "scattered clouds",
        min_temp: convertKelvinToCelsius(293.49),
        max_temp: convertKelvinToCelsius(293.53)
    },
    {
        id:1581652800,
        datetime: "2020-02-14 12:00:00",
        iconurl: "http://openweathermap.org/img/wn/03n.png",
        alt_desc: "scattered clouds",
        min_temp: convertKelvinToCelsius(293.49),
        max_temp: convertKelvinToCelsius(293.53)
    },
    {
        id:1581663600,
        datetime: "2020-02-14 15:00:00",
        iconurl: "http://openweathermap.org/img/wn/03n.png",
        alt_desc: "scattered clouds",
        min_temp: convertKelvinToCelsius(293.49),
        max_temp: convertKelvinToCelsius(293.53)
    }
];

const empty_forecasts = [
    {
        id:"",
        datetime: "",
        iconurl: "",
        alt_desc: "",
        min_temp: "",
        max_temp: ""
    }
];

describe('ForecastDataRow', () => {
    let forecast;
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a li with the correct id', () => {
        render(<ForecastDataRow forecasts={forecasts.slice(0,2)} />);
        expect(container.querySelector('#fdr')).not.toBeNull();
    });

    it('renders the hourly time of the forecast', () => {
        render(<ForecastDataRow forecasts={forecasts.slice(0,2)}/>);
        expect(container.querySelector('#hour')).not.toBeNull();
        expect(container.querySelector('#hour').textContent)
            .toMatch(parseTime(forecasts[0]));
    });

    it('renders the missing hourly time of the forecast', () => {
        render(<ForecastDataRow forecasts={empty_forecasts}/>);
        expect(container.querySelector('#hour')).not.toBeNull();
        expect(container.querySelector('#hour').textContent)
            .toMatch('NA');
    });

    it('renders a div wrapper and an img element', () => {
        render(<ForecastDataRow forecasts={forecasts.slice(0,2)}/>);
        expect(container.querySelector('#icon')).not.toBeNull();
        expect(container.querySelector(`img[alt="${forecasts[0].alt_desc}"]`))
            .not.toBeNull();
        expect(container.querySelector('img').getAttribute('alt'))
            .toMatch(forecasts[0].alt_desc);
    });

    it('renders a missing div wrapper and img element', () => {
        render(<ForecastDataRow forecasts={empty_forecasts}/>);
        expect(container.querySelector('#icon')).not.toBeNull();
        expect(container.querySelector('div>img')).not.toBeNull();
        expect(container.querySelector('div>img').getAttribute('alt'))
            .toMatch('NA');
    });

    it('renders the min temp value in celsius', () => {
        render(<ForecastDataRow forecasts={forecasts.slice(0,2)}/>);
        expect(container.querySelector('#min-temp')).not.toBeNull();
        expect(container.querySelector('#min-temp').textContent)
            .toEqual(forecasts[0].min_temp);
    });

    it('renders a missing min temp value in celsius', () => {
        render(<ForecastDataRow forecasts={empty_forecasts}/>);
        expect(container.querySelector('#min-temp')).not.toBeNull();
        expect(container.querySelector('#min-temp').textContent)
            .toMatch(empty_forecasts[0].min_temp);
    });

    it('renders the max temp value in celsius', () => {
        render(<ForecastDataRow forecasts={forecasts.slice(0,2)}/>);
        expect(container.querySelector('#max-temp')).not.toBeNull();
        expect(container.querySelector('#max-temp').textContent)
            .toMatch(forecasts[0].max_temp);
    });

    it('renders a missing max temp value in celsius', () => {
        render(<ForecastDataRow forecasts={empty_forecasts}/>);
        expect(container.querySelector('#max-temp')).not.toBeNull();
        expect(container.querySelector('#max-temp').textContent)
            .toMatch(empty_forecasts[0].max_temp);
    });
});

describe('ForecastHeadingRow', () => {
    let forecast;
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a li with the correct id', () => {
        render(<ForecastHeadingRow daily_forecasts={forecasts.slice(0, 2)} />);
        expect(container.querySelector('#fhr')).not.toBeNull();
    });

    it('renders the date in a heading', () => {
        render(<ForecastHeadingRow daily_forecasts={forecasts.slice(0, 2)} />);
        expect(container.querySelector(
            '#fhr' + buildIdFromDateString(forecasts[0].datetime))).not.toBeNull();
        expect(container.querySelector(
            '#fhr' + buildIdFromDateString(forecasts[0].datetime)).textContent)
            .toMatch(parseDate(forecasts[0].datetime));
    });

    it('renders a missing date in a heading', () => {
        render(<ForecastHeadingRow daily_forecasts={empty_forecasts} />);
        expect(container.querySelector(
            '#fhr' + buildIdFromDateString(empty_forecasts[0].datetime)).textContent)
            .toMatch('NA');
    });
});

describe('ForecastSection', () => {
    let forecast;
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with the correct id', () => {
        render(<ForecastSection forecasts={forecasts} />);
        expect(container.querySelector('#fs')).not.toBeNull();
    });

    //@TODO create array sort function that orders forecasts by date then time
    it('renders a list with 1 forecast header and 2 data row components', () => {
        render(<ForecastSection forecasts={forecasts} />);
        expect(container.querySelector('#fs>ul>li>h1')).not.toBeNull();
        expect(container.querySelectorAll('#fs>ul>li>h1')).toHaveLength(1);
        expect(container.querySelector('#fs>ul>li+li')).not.toBeNull();
        expect(container.querySelectorAll('#fs>ul>li')).toHaveLength(3);
    });
});
