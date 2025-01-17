import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import { Router } from '@vaadin/router';

describe('Success screen ', () => {
  // Write test cases inside this block
  let el;
  before(async() => {
    el = await fixture(html `<loan-success></loan-success>`);
  });
  it('is accessible', () => {
    expect(el).to.be.accessible;
  });
  it('should navigate to the / route', () => {
    const spy = Sinon.spy(Router, 'go');
    el._toHome();
    expect(spy.calledWith('/')).to.be.true;
    spy.restore();
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  let el;
  before(async() => {
    el = await fixture(html `<loan-error></loan-error>`);
  });
  it('is accessible', () => {
    expect(el).to.be.accessible;
  });
  it('should navigate to the / route', () => {
    const spy = Sinon.spy(Router, 'go');
    el._toHome();
    expect(spy.calledWith('/')).to.be.true;
    spy.restore();
  });
});
