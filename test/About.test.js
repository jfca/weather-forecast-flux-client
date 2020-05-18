import React from "react";
import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import AppDetails from "../src/components/about/AppDetails";
import SettingsContext from "../src/context/settings/settingsContext";
import AttributionList from "../src/components/about/AttributionList";

describe('AppDetails', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders the application title and decription with content', () => {
        let getAppVersion = jest.fn();
        render(
            <SettingsContext.Provider
                value={{
                    appVersion: '1.0.0',
                    getAppVersion
                }}>
                <MemoryRouter>
                    <AppDetails/>
                </MemoryRouter>
            </SettingsContext.Provider>
        );
        expect(container.querySelector('#app-title')).not.toBeNull();
        expect(container.querySelector('#app-desc')).not.toBeNull();
    });

    it('renders the application version number with content', () => {
        let getAppVersion = jest.fn();
        render(
            <SettingsContext.Provider
                value={{
                    appVersion: '1.0.0',
                    getAppVersion
                }}>
                <MemoryRouter>
                    <AppDetails/>
                </MemoryRouter>
            </SettingsContext.Provider>
        );
        expect(container.querySelector('#app-version')).not.toBeNull();
        expect(container.querySelector('#app-version').textContent).toMatch(/\d{1,3}\.\d{1,3}\.\d{1,3}/);
    });

    it('renders the application version number without content', () => {
        let getAppVersion = jest.fn();
        render(
            <SettingsContext.Provider
                value={{
                    appVersion: 'N/A',
                    getAppVersion
                }}>
                <MemoryRouter>
                    <AppDetails/>
                </MemoryRouter>
            </SettingsContext.Provider>
        );
        expect(container.querySelector('#app-version')).not.toBeNull();
        expect(container.querySelector('#app-version').textContent).toMatch(/N\/A/);
    });
});

describe('AttributionList', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders the attribution list with content', () => {
        let getAppVersion = jest.fn();
        render(
            <SettingsContext.Provider
                value={{
                    appVersion: '1.0.0',
                    getAppVersion
                }}>
                <MemoryRouter>
                    <AttributionList/>
                </MemoryRouter>
            </SettingsContext.Provider>
        );
        expect(container.querySelector('#att-list-title')).not.toBeNull();
        expect(container.querySelector('#att-list')).not.toBeNull();
        expect(container.querySelectorAll('.att-list-item').length).toBeGreaterThanOrEqual(1);
    });
});
