import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import LoanApplication from '../../Unit-testing-handson-practise/src/LoanApplication';

customElements.define('loan-application', LoanApplication);
describe('LoanApplication', () => {
  // Write test cases inside this block
  let el;
    before(async() => {
        el = await fixture(html `<loan-application></loan-application>`);
    });
  
    it('is accessible', () => {
      expect(el).to.be.accessible;
    });

  //   it('constructor initializes values', () => {
  //     expect(el.counter).to.equal(5);
  // });
});
