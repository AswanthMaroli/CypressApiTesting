describe('Api Testing in the eventzet event list component', () => {
  
    before(() => {

        return cy.getToken(); 
    });
  
    const userID=2;

    it('GetCategoryByTypeName', () => {
        
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=EventOwnership',
                headers: {
                  'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetDashboardEventList', () => {
     
     
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/DashboardEventList/GetDashboardEventList?UserID=${userID}`,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetSharedEventList', () => {
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/DashboardEventList/GetSharedEventList?UserID=${userID}`,
                headers: {
                 'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


    it('GetPermissionTypeDetails', () => {
        
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/DashboardEventList/GetPermissionTypeDetails?PermissionID=20&EventID=40',
                headers: {
                      'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });



    it('GetCategoryByTypeName', () => {
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=AccessibilityType',
                headers: {
                      'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

      
    it('GetCategoryByTypeName', () => {
      
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=PermissionType',
                headers: {
                      'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

          
    it('GetCategoryByTypeName', () => {
      
      
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=SaleStatus',
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
