/// <reference types = "cypress"/>

describe("Usuário",()=> {
    it("Nome usuário",()=>{
        cy.request({
            method: "GET",
            url: "https://adopet-api-i8qu.onrender.com/adotante/perfil/953004c4-18cc-40e2-b97c-358c8728c912",
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property("perfil")
            expect(res.body.perfil.nome).to.be.equal("Joao Vitor")
        })  
    })

})