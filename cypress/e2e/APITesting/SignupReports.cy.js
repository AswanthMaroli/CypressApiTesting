describe('Api Testing in the eventzet  signup reports component', () => {
  
    before(() => {
       
        return cy.getToken(); 
    });

    const userID=2;

  
    it('GetVolunteerList', () => {
        

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/VolunteerList/GetVolunteerList?UserID=${userID}`,
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
                url: `https://testservices.eventzet.com/api/SignupList/GetSignUpList?UserID=${userID}`,
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
