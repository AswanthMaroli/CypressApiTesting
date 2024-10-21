describe('Api Testing in the eventzet Signup Registration component', () => {
  
    before(() => {
       
        return cy.getToken(); 
    });

    const userID=2;
    const signUpID=116


        
    // it('IsVerifiedByUserID', () => {

   
    //         cy.request({
    //             method: 'POST',
    //             url: 'https://testservices.eventzet.com/api/UserSignup/IsVerifiedByUserID',
    //             body:'2',
    //             headers: {
    //                  'Authorization': `Bearer ${Cypress.env('authToken')}`
    //             }
    //         }).then((response) => {
    //             expect(response.status).to.equal(200);
    //             expect(response.duration).to.be.below(3000);
    //             expect(response.statusText).to.equal('OK');
    //         });
    //     });
    

    
    it('GetQuestions?SignUpID', () => {
        
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/SignUpSettings/GetQuestions?SignUpID=${signUpID}`,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    
  

    it('GetSlotDetailsByDateandSlot?SignUpID', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/SignUpRegUser/GetSlotDetailsByDateandSlot?SignUpID=${signUpID}&SignUpRegID=0`,
                headers: {
                    'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    
    it('GetCategoryByTypeName?CategoryTypeName=SlotType', () => {
        
       
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=SlotType',
                headers: {
                     'Authorization': `Bearer ${Cypress.env('authToken')}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetCategoryByTypeName?CategoryTypeName=RSVPResponseStatus', () => {
        
     
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=RSVPResponseStatus',
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
    

    it('GetSignUpDetails?SignUpID', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/SignUpDesign/GetSignUpDetails?SignUpID=${signUpID}`,
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
