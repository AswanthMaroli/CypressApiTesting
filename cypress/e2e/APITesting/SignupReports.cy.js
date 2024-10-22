describe('Api Testing in the eventzet  signup reports component', () => {
  
    const userID=2;
    let authToken;
    before(() => {
        
      cy.getToken().then((token) => {
          authToken = token; // Store retrieved token for authorization
      });
  });

  
    it('GetVolunteerList', () => {
        

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/VolunteerList/GetVolunteerList?UserID=${userID}`,
                headers: {
                     Authorization: `Bearer ${authToken}`
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
                      Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


   


  
  

});
