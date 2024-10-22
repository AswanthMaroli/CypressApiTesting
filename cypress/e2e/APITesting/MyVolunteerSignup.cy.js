describe('Api Testing in the eventzet my volunteer signup component', () => {
  
    let authToken;
    const userID=2;

    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });

   
  
  
    it('GetRegisteredSignUpList', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/RegisteredSignupList/GetRegisteredSignUpList?UserID=${userID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
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
