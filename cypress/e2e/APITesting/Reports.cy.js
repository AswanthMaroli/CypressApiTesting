describe('Api Testing in the eventzet reports component', () => {
  
    before(() => {
     
        return cy.getToken(); 
    });

    const userID=2;

    it('GetEvents', () => {
        
     
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventList/GetEvents?UserID=${userID}`,
                headers: {
                   'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    
    it('GetAtndList', () => {
        
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AtndList/GetAtndList?UserID=${userID}`,
                headers: {
                  'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

        
    it('GetBookingList', () => {
        

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BookingListReport/GetBookingList?UserID=${userID}`,
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
    

    it('GetTransactionList', () => {
        
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Transaction/GetTransactionList?UserID=${userID}`,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetOrgReport', () => {
        
   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/OrgList/GetOrgReport?UserID=${userID}`,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    
    it('GetEarningsByTicketType', () => {
        
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EarningsByTicketTypeReport/GetEarningsByTicketType?UserID=${userID}`,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetToppurchaser', () => {
        
   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Toppurchasers/GetToppurchaser?UserID=${userID}`,
                headers: {
                     'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('Getpaidbyinvoice', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/PaidByInvoice/Getpaidbyinvoice?UserID=${userID}`,
                headers: {
                   'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    
    it('GetPayouts', () => {
        
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Payouts/GetPayouts?UserID=${userID}`,
                headers: {
                     'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetAddOns', () => {
        
 
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AddOnsList/GetAddOns?UserID=${userID}`,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetGuestList', () => {
        
   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/GuestList/GetGuestList?UserID=${userID}`,
                headers: {
                     'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    
    it('GetRefundRqstList?UserID', () => {
        
     
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/RefundRequest/GetRefundRqstList?UserID=${userID}`,
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
