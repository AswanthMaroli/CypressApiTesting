describe('Api Testing in the eventzet home component', () => {
  
    let authToken;

    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });
  
    it('GetEventHomeWrapper', () => {
      
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/EventHomeWrapper/GetEventHomeWrapper?Lat=0&Lng=0&Range=5',
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
      
       
            const userId = 2;
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AccountSettings/GetAccountDetails?UserID=${userId}`,
                headers: {
                     Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(2000);
                expect(response.statusText).to.equal('OK');
            });
        });
    });
