describe('Api Testing in the eventzet My Tickets  component', () => {
  
    before(() => {
       
        return cy.getToken(); 
    });

    const userID=2;

  
    it('GetUserTickets', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MyTickets/GetUserTickets?UserID=${userID}`,
                headers: {
                   'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            
        });
    });

    it('GetEventSummary', () => {
        
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventSummary/GetEventSummary?UserID=${userID}`,
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
