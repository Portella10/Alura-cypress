/// <reference types = "cypress"/>

describe("Pagina de login",() => {
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/");
        cy.get('[data-test="login-button"]').click();
        cy.intercept("POST", "https://adopet-api-i8qu.onrender.com/adotante/login", {
            statusCode:400,}).as('stubPost')
    })
    it("Login incorreto",() => {
        cy.login("joaovitor.com", "123senha ")
        cy.contains("Por favor, verifique o email digitado").should("be.visible");
        cy.contains("A senha deve conter pelo menos uma letra maiúscula").should("be.visible");
    })
    it("Falha mesmo que os campos sejam preenchidos corretamente",() => {
        cy.login("joaoVitor@gmail.com", "Senha123");
        cy.wait('@stubPost');
        cy.contains("Falha no login. Consulte suas credenciais.").should("be.visible")
    })
})