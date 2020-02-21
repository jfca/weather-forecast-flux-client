import React from "react";
import ReactDOM from 'react-dom';
import ForecastDataRow from "../src/components/forecasts/ForecastDataRow";
import ForecastHeadingRow from "../src/components/forecasts/ForecastHeadingRow";
import ForecastSection from "../src/components/forecasts/ForecastSection";
import {parseTime, buildIdFromDateString, parseDate} from '../src/utils/helperFuncs';
import {forecasts, empty_forecasts} from "../src/testData";

describe('ForecastDataRow', () => {
    let forecast;
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a tr with the correct id', () => {
        render(<ForecastDataRow forecasts={forecasts.slice(0,1)} />);
        expect(container.querySelector('#forecast-data-row' +
            buildIdFromDateString(forecasts.slice(0, 1)[0].datetime))).not.toBeNull();
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
        expect(container.querySelector('td>img')).not.toBeNull();
        expect(container.querySelector('td>img').getAttribute('alt'))
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

    it('renders a td with the correct id', () => {
        const key_id = 'fhr' + buildIdFromDateString(forecasts.slice(0, 1)[0].datetime);
        render(<ForecastHeadingRow daily_forecasts={forecasts.slice(0, 2)} />);
        expect(container.querySelector(`#${key_id}`)).not.toBeNull();
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
    let container;

    beforeEach(() => {
        container = document.createElement('div')
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a div with the correct id', () => {
        render(<ForecastSection forecasts={forecasts} />);
        expect(container.querySelector('#forecast-section')).not.toBeNull();
    });

    it('renders a table with 1 forecast heading and 2 table rows', () => {
        render(<ForecastSection forecasts={forecasts} />);
        expect(container.querySelector('table#forecast-section>tbody>tr>td')).not.toBeNull();
        expect(container.querySelectorAll('table#forecast-section>tbody>tr>td'))
            .toHaveLength(24);
    });
});
