/// <reference types = "cypress"/>

describe("Pagina de login",() => {
    beforeEach(() =>{
        cy.visit("https://adopet-frontend-cypress.vercel.app/");
        cy.get('[data-test="login-button"]').click();
    })
it("Login correto",() => {
    cy.login("joaoVitor@gmail.com","Senha123");
    })
})