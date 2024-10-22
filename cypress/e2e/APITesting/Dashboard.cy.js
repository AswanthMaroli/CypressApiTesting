describe('Api Testing in the eventzet dashboard component', () => {
  
    let authToken;
    const userID=2;
    
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });


   
  
    it('GetDashBoardWrapper', () => {
        
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDashboardWrapper/GetDashBoardWrapper?StartDate=&EndDate=&DateToday=10-21-2024&Months=10&UserID=${userID}`,
                headers: {
                     Authorization: `Bearer ${authToken}`
                },
                timeout: 60000
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
   

    


   

  

});
