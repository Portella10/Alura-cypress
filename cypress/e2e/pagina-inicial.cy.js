/// <reference types = "cypress"/>

describe("Pagina inicial",() => {
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/");

    })
    it("Verificando se o title",() => {
        cy.title().should('eq', 'AdoPet');
    })

    it("verificando o texto",() => {
        cy.contains("Quem ama adota!").should("be.visible");
        cy.contains("Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!").should("be.visible");
    })

    it("Tentando fazer login pelo ícone de mensagem",() =>{
        cy.get('.header__message').click();
        cy.login("joaoVitor@gmail.com","Senha123")
    })
})