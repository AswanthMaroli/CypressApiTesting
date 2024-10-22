describe('Api Testing in the eventzet Pricing component', () => {
    
    const userID =2;
    let authToken;
   
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });

  


    it('GetPricingDetails', () => {
        
 
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Pricing/GetPricingDetails',
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetAccountDetails', () => {
        
     
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AccountSettings/GetAccountDetails?UserID=${userID}`,
                headers: {
                      Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetAddOnPricingDetails', () => {
        
   
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Pricing/GetAddOnPricingDetails',
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
  


