describe('Api Testing in the eventzet finance component', () => {
  
    let authToken;
    const userID=2;
    
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });

  
    

    it('GetBankAccount', () => {
      

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BankAccount/GetBankAccount?UserID=${userID}`,
                headers: {
                     Authorization: `Bearer ${authToken}`
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
                       Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    
    it('GetEvents', () => {
        
        
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
    


    it('GetTaxPayerInfo', () => {
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/TaxInfo/GetTaxPayerInfo?UserID=${userID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetRefundRqstList', () => {
       
   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/RefundRequest/GetRefundRqstList?UserID=${userID}`,
                headers: {
                     Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    
    

    
    it('GetPricingDetails', () => {
        
 
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Pricing/GetPricingDetails',
                headers: {
                       Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetCategoryByTypeName?CategoryTypeName=AccountHolderType', () => {
       
     
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=AccountHolderType',
                headers: {
                  Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetCategoryByTypeName?CategoryTypeName=BankAccountType', () => {
      
      
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=BankAccountType',
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetCategoryByTypeName?CategoryTypeName=Country', () => {
      
     
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=Country',
                headers: {
                     Authorization: `Bearer ${authToken}`
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
                      Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
  

    it('GetCategoryByTypeName?CategoryTypeName=Currency', () => {
      
      
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=Currency',
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


    it('GetCategoryByTypeName?CategoryTypeName=TaxSituation', () => {
        

            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=TaxSituation',
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


    it('GetCategoryByTypeName?CategoryTypeName=TaxClassification', () => {
        
  
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=TaxClassification',
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    
    it('GetCategoryByTypeName?CategoryTypeName=TaxClassification', () => {
      
     
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=TaxClassification',
                headers: {
                  Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
   

    it('GetCategoryByTypeName?CategoryTypeName=PayeeCode', () => {
        
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=PayeeCode',
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetCategoryByTypeName?CategoryTypeName=TINType', () => {
      
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=TINType',
                headers: {
                    Authorization: `Bearer ${authToken}`
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
                     Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


  
  

});
