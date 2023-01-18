import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/dashboard/Dashboard-overview';
import { Router } from '@vaadin/router';

describe('DashboardMenu', () => {

    let el;
    before(async() => {
        el = await fixture(html `<dashboard-overview></dashboard-overview>`);
    });
    it('is accessible', () => {
    
        expect(el).to.be.accessible;
    });


})