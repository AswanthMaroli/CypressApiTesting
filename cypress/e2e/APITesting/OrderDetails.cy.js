describe('Api Testing in the eventzet order details component', () => {
  
 
    let authToken;
    let eventID;
    let orderID;
    let orderNumber;
    let regID;

    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; 
        });
    
        cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
            eventID = data.eventID;
        });
    
        cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
            orderID = data.orderID;
        });
    
        cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
            orderNumber = data.orderNumber;
        });
           
        cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
            regID = data.regID;
        });
    
    });


    it('GetEventRegInfo', () => {
      
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventRegistration/GetEventRegInfo?EventRegID=${regID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
          
        });
    });

    it('IsTicketReleased', () => {
       
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventRegistration/IsTicketReleased?EventRegID=${regID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
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
                url: `https://testservices.eventzet.com/api/EventRegistration/GetOrderDetails?EventRegID=${regID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK'); // order number 
            
        });
    });
  
    it('GetOrderDetailsWrapper', () => {0 
 
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/OrderDetailsWrapper/OrderDetailsWrapper?OrderID=${orderID}&EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetRefundDetails', () => {
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/RefundRequest/GetRefundDetails?OrderNo=${orderNumber}`,
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



