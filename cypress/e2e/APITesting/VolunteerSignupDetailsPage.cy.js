describe('Api Testing in the eventzet Volunteer Signup Details component', () => {
  
    const userID=2;
    const signUpID=2;

    let authToken;
    before(() => {
        
      cy.getToken().then((token) => {
          authToken = token; // Store retrieved token for authorization
      });
  });


      
    it('GetAccountDetails?UserID', () => {
        
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AccountSettings/GetAccountDetails?UserID=${userID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
  

  
    it('GetSignUpShortURL?SignUpID', () => {
        
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/SignUpPublish/GetSignUpShortURL?SignUpID=${signUpID}`,
                headers: {
                   Authorization: `Bearer ${authToken}`
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
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    
    it('GetTimeSlotData?SignUpID', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/SignUpSlots/GetTimeSlotData?SignUpID=${signUpID}`,
                headers: {
                   Authorization: `Bearer ${authToken}`
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
                    Authorization: `Bearer ${authToken}`
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
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    });

