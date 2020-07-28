import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from 'react-router-dom';
import HamburgerMenu from "../src/components/navigation/HamburgerMenu";

describe('HamburgerMenu', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => ReactDOM.render(component, container);

    it('renders a text field with the quicktake information', () => {
        render(
            <MemoryRouter>
                <HamburgerMenu/>
            </MemoryRouter>
        );
        expect(container.querySelector('li a')).not.toBeNull();
    });
});