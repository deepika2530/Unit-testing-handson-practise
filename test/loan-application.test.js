import { html, fixture, expect } from '@open-wc/testing';
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

    it('should increment value', () => {
      el. __increment();
      expect(el.counter).to.equal(6);
  });
});
