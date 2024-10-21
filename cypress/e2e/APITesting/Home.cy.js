describe('Api Testing in the eventzet home component', () => {
  
    before(() => {
       
        return cy.getToken(); 
    });
  
    it('GetEventHomeWrapper', () => {
      
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/EventHomeWrapper/GetEventHomeWrapper?Lat=0&Lng=0&Range=5',
                headers: {
                      'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });

  
    it('GetAccountDetails', () => {
      
       
            const userId = 2;
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AccountSettings/GetAccountDetails?UserID=${userId}`,
                headers: {
                     'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(2000);
                expect(response.statusText).to.equal('OK');
            });
        });
    });
