import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/dashboard/Dashboard.js';
import { Router } from '@vaadin/router';

describe('DashboardMenu', () => {

    let el;
    before(async() => {
        el = await fixture(html `<dash-board></dash-board>`);
    });
    it('is accessible', () => {
    
        expect(el).to.be.accessible;
    });


})