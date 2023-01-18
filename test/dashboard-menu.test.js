import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/dashboard/Dashboard-menu.js';
import { Router } from '@vaadin/router';

describe('DashboardMenu', () => {

    let el;
    before(async() => {
        el = await fixture(html `<dashboard-menu></dashboard-menu>`);
    });
    it('is accessible', () => {
    
        expect(el).to.be.accessible;
    });


})