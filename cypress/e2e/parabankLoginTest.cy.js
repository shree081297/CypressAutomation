import {LoginFunction} from "./CommonFunction.cy";
describe('Para bank Login Scenarios', () => {
  
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    })
    
    it('Login Success', () => {
      
      LoginFunction('testuser','password');
      cy.get('h2').contains('Account Services');
  
    })
  
    it('Login Failure', () => {
      
      LoginFunction('testuser','password1');
      cy.get('p.error').contains('The username and password could not be verified.');
  
    })
  })
  
 
  