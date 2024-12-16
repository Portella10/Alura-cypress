/// <reference types = "cypress"/>

describe('Api Adopet', () => {

    it('Mensagens da API',()=>{
        cy.request({
             method:'GET' ,
             url:'https://adopet-api-i8qu.onrender.com/mensagem/953004c4-18cc-40e2-b97c-358c8728c912',
             headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
    })

    })
     
})




