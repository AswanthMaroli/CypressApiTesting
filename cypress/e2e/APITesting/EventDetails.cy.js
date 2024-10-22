describe('Api Testing in the eventzet event details component', () => {

    let authToken;
  
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });
  
    const eventID=21;
    const userID =2;


    
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
  

    it('GetEventShortURL?EventID', () => {
      
   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventRegistration/GetEventShortURL?EventID=${eventID}`,
                headers: {
                  Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
  


    it('GetEventBannerImageList?PathList', () => {
      
  
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Files/GetEventBannerImageList?PathList=%5B%5D',
                headers: {
                      Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });



    it('GetSubimageList?EventID', () => {
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventRegistration/GetSubimageList?EventID=${eventID}`,
                headers: {
                      Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('GetMyGroup?UserID', () => {
      
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MyGroup/GetMyGroup?UserID=${userID}`,
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
