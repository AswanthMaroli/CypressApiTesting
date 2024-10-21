describe('Api Testing in the eventzet created signup list component', () => {
  
    before(() => {
  
        return cy.getToken(); 
    });

    const userID=2;
  
  
    it('GetCategoryByTypeName', () => {
        
 
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus`,
                headers: {
                     'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetSignUpList', () => {
        
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MySignUps/GetSignUpList?UserID=${userID}`,
                headers: {
                  'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            
        });
    });




});
