describe('Api Testing in the eventzet My Tickets  component', () => {
  
    let authToken;
    const userID=2;
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });
    

  
    it('GetUserTickets', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MyTickets/GetUserTickets?UserID=${userID}`,
                headers: {
                   Authorization: `Bearer ${authToken}`
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
                     Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
        
        });
    });




  
  

});
