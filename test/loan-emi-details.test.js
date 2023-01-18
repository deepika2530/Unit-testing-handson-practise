import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { Router } from '@vaadin/router';
import Sinon from 'sinon';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer loanEMI-details.js files
  let el;
  before(async() => {
      el = await fixture(html `<loanemi-details></loanemi-details>`);
      
  });
  it('is accessible', () => {
   // localStorage.setItem('emi', {'interestRate':20});
    console.log(localStorage,'local')
      expect(el).to.be.accessible;
  });

  it('should navigate to the /details route', () => {
    const spy = Sinon.spy(Router, 'go');
    el._toBasicDetails();
    expect(spy.calledWith('/details')).to.be.true;
    spy.restore();
  });

  it('should navigate to the /customer route', () => {
    const spy = Sinon.spy(Router, 'go');
    el._toCustomer();
    expect(spy.calledWith('/customer')).to.be.true;
    spy.restore();
  });
});
