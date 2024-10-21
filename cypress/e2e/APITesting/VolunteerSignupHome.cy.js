describe('Api Testing in the volunteer signup home component', ()=>{


    it('GetSignups',()=>{

        cy.request('Get','https://testservices.eventzet.com/api/SignUpHome/GetSignUps').then((response)=>{

        expect(response.status).to.equal(200);
        expect(response.duration).to.below(2000);
        expect(response.statusText).to.equal('OK');
    
        })
        
        // .its('status').should('equal',200);
        
    });


})