describe('Api Testing in the eventzet my volunteer signup component', () => {
  
    before(() => {
       
        return cy.getToken();
    });

    const userID=2;
  
  
    it('GetRegisteredSignUpList', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/RegisteredSignupList/GetRegisteredSignUpList?UserID=${userID}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                expect(response.body).to.be.an('array').with.length.greaterThan(0);
                const firstObject=response.body[0];
                expect(firstObject.SignUpRegID).to.be.a('number');
                expect(firstObject.SignUpID).to.be.a('number');
                
            });
        });
    });


  
  

});