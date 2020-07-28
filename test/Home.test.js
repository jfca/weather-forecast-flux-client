import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/components/pages/Home";

describe('Home', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a welcome message', () => {
        render(<Home/>);
        expect(container.querySelector('h1')).not.toBeNull();
        expect(container.querySelector('h1').textContent).toEqual('Welcome');
        expect(container.querySelector('p')).not.toBeNull();
        expect(container.querySelector('p').getAttribute('class'))
            .toEqual('lead');
        expect(container.querySelector('p').textContent)
            .toEqual('Please enter a city name in the search bar');
    })
});