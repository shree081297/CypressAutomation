import { LoginFunction } from "./CommonFunction.cy";
describe('Para bank Account Summary ', () => {
  
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    })

    it("Account summary",()=>{
        LoginFunction('testuser','password');
        cy.get("div[id='showOverview'] h1[class='title']").contains("Accounts Overview");
        cy.xpath("//b[normalize-space()='$515.50']").contains("$515.50");
    })
})