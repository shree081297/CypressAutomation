describe('This file will cover all the Simplilearn Login Test scenarios', () => {
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
    })
  
    it('Validate Login Success', () => {
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(".app_logo").contains("Swag Labs");
        
    })

    it('Validate Login Failure', () => {
        
    })
})