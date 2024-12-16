/// <reference types = "cypress"/>

describe("Imagens",() => {
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/home")
    })
    it("Verificando imagens do home",() => {
        cy.get('#root > main > section > div > div:nth-child(1) > img').should("be.visible");
        cy.get('.cards > :nth-child(2) > img').should("be.visible");
        cy.get(':nth-child(3) > img').should("be.visible");
        cy.get(':nth-child(4) > img').should("be.visible");
        cy.get(':nth-child(5) > img').should("be.visible");
        cy.get(':nth-child(5) > img').should("be.visible");
    })
})