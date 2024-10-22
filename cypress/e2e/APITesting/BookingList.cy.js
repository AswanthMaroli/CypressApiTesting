describe('Api Testing in the eventzet booking list component', () => {


    
    const userID=2;
    const eventID=21;
    let authToken;
  
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });

  
    it('GetEventList', () => {
        
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BookingList/GetEventList?UserID=${userID}`,
                headers: {
                 Authorization: `Bearer ${ authToken }`
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
                  Authorization: `Bearer ${ authToken }`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


});
