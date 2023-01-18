import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import { Router } from '@vaadin/router';

describe('Customer details', () => {
  // Write test cases inside this block
  // refer customer-details.js files
  let el;
  before(async() => {
      el = await fixture(html `<customer-details></customer-details>`);
  });
  it('is accessible', () => {
      expect(el).to.be.accessible;
  });

  it('should navigate to the /emidetails route', () => {
    const spy = Sinon.spy(Router, 'go');
    el._toEmidetails();
    expect(spy.calledWith('/emidetails')).to.be.true;
    spy.restore();
  });

  it('render should handle form errors', () => {
    
    // const ev = {
    //     target: {
    //         hasFeedbackFor: ['error'],
    //         formElements: [{
    //             hasFeedbackFor: ['error'],
    //             focus: Sinon.spy()
    //         }]
    //     }
    // }
   // el.submitHandler()
   // expect(spy.calledWith('.error-handle')).to.be.true;
});

});
