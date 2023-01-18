import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  let el;
    before(async() => {
        el = await fixture(html `<loan-header></loan-header>`);
    });
    it('is accessible', () => {
        expect(el).to.be.accessible;
    });
});
