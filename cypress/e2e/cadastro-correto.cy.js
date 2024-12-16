/// <reference types = "cypress"/>

describe("Cadastro da pagina", () =>{
    beforeEach(() => {
        cy.visit(" https://adopet-frontend-cypress.vercel.app/");
        cy.get("[data-test='register-button']").click();
    })
    it("Cadastrar um usuário corretamente preenchendo todos os capmpos", () => {
        cy.cadastro("Joao Vitor","joaoVitor@gmail.com","Senha123");
    })

})