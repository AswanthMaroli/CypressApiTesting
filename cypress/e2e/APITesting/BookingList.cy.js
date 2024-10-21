describe('Api Testing in the eventzet booking list component', () => {
  
    before(() => {
        // Retrieve and store token before all tests in this describe block
        return cy.getToken(); // Return the getToken command to ensure it completes before proceeding
    });

    const userID=2;
    const eventID=21;
  
    it('GetEventList', () => {
        
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BookingList/GetEventList?UserID=${userID}`,
                headers: {
                 'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
   

    it('GetOrderDetails', () => {
        
   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BookingList/GetOrderDetails?EventID=${eventID}`,
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
