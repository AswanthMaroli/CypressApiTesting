describe('Api Testing in the eventzet Account Settings component', () => {
  
    before(() => {
  
        return cy.getToken(); 
    });

    const userID=2;
  
  
    it('GetCategoryByTypeName?CategoryTypeName=LoginType', () => {
        
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=LoginType',
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });

    it('GetCategoryByTypeName?CategoryTypeName=Gender', () => {
        
    
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=Gender',
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
 

    it('GetCategoryByTypeName?CategoryTypeName=State', () => {
        
      
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=State',
                headers: {
                 'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });

    it('GetAccountDetails', () => {
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AccountSettings/GetAccountDetails?UserID=${userID}`,
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



