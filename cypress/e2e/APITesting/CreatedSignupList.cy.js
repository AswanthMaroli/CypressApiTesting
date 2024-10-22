describe('Api Testing in the eventzet created signup list component', () => {

    let authToken;
    const userID=2;
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });


  
    it('GetCategoryByTypeName', () => {
        
 
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=SignUpStatus`,
                headers: {
                     Authorization: `Bearer ${ authToken }`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetSignUpList', () => {
        
       
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MySignUps/GetSignUpList?UserID=${userID}`,
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
