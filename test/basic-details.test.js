import { html, fixture, expect, aTimeout } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { Router } from '@vaadin/router';


  describe('Basic details', () => {
    // Write test cases inside this block
    // refer basic-details.js files
    let el;
    before(async() => {
        el = await fixture(html `<basic-details></basic-details>`);
    });
    it('is accessible', () => {
    
        expect(el).to.be.accessible;
    });

    it(' constructor initializes values', () => {
        expect(el.amount).to.equal(10000);
    });

    it('_numToWord() - renders in words', () => {
      const spy = Sinon.spy(el, '_numToWord');
      el._numToWord();
      el.shadowRoot.querySelector('.amount').value = 10000;
      expect(spy).to.have.called
      expect(el.shadowRoot.querySelector('#word').innerHTML.trim()).to.equal('ten thousand');
      spy.restore();
  });

    it('should convert numbers to words', () => {  
      el.shadowRoot.querySelector('.amount').value = "1234";
      el._numToWord();
      expect(el.shadowRoot.querySelector('#word').innerHTML).to.equal('one thousand two hundred and thirty four only ')
    });

    it('should navigate to the / route', () => {
      const spy = Sinon.spy(Router, 'go');
      el._toDashboard();
      expect(spy.calledWith('/')).to.be.true;
      spy.restore();
    });


    it('should capture details when amount less than 10000' ,async () => {  
      el.shadowRoot.querySelector('.amount').value = "9000";
      el._captureDetails()
      await aTimeout(0);
      expect([...el.shadowRoot.querySelector('.amount').classList].indexOf('e-handle')).to.not.equal(-1);
    });

    xit('should capture details when amount less than 10000' ,async () => {  
      el.shadowRoot.querySelector('.amount').value = "9000";
      el._captureDetails()
      await aTimeout(3000);
      expect([...el.shadowRoot.querySelector('.amount').classList].indexOf('e-handle')).to.be.equal(-1);
    });


    it('should make a POST request to the correct endpoint with the correct data and when amount greater than 10000', () => {
    
      const fetch = Sinon.spy(window, 'fetch');
      el.shadowRoot.querySelector('.type').value = "test";
      el.shadowRoot.querySelector('.amount').value = "67889";
      el.shadowRoot.querySelector('.period').value = "5";
      el._captureDetails();
      
     console.log(fetch,'fetch')
      expect(fetch).to.have.been.calledWith('https://loanfeapi.herokuapp.com/calculate-emi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'test', amount: '67889', period: '5'}),
      });
    });

    


    
 


});

