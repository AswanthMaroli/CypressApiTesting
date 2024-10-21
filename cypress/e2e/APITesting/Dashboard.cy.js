describe('Api Testing in the eventzet dashboard component', () => {
  
    before(() => {
        
        return cy.getToken(); 
    });

    const userID=2;
  
    it('GetDashBoardWrapper', () => {
        
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDashboardWrapper/GetDashBoardWrapper?StartDate=&EndDate=&DateToday=10-21-2024&Months=10&UserID=${userID}`,
                headers: {
                     'Authorization': `Bearer ${Cypress.env('authToken')}`
                },
                timeout: 60000
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
   

    


   

  

});
