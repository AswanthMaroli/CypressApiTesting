describe('Api Testing in the eventzet Permission component', () => {
  
    const userID = 2;
    let authToken;
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });
    


    it('GetEvents?UserID', () => {
        
  
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventList/GetEvents?UserID=${userID}`,
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    
  
    it('GetCategoryByTypeName?CategoryTypeName=AccessibilityType', () => {
        
  
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=AccessibilityType',
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetCategoryByTypeName?CategoryTypeName=PermissionType', () => {
        
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=PermissionType',
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetCategoryByTypeName?CategoryTypeName=PermissionAcceptanceType', () => {
        
      
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=PermissionAcceptanceType',
                headers: {
                  Authorization: `Bearer ${authToken}`
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
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetMyPermissions', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Permission/GetMyPermissions?UserID=${userID}`,
                headers: {
                     Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetReceivedPermissions', () => {
        
   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Permission/GetReceivedPermissions?UserID=${userID}`,
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
