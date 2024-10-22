describe('Api Testing in the eventzet  signup message component', () => {
  
    const signUpID=2;
    const userID =2;
    var shortUrl='';
    let authToken;

    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });

  

    it('GetSignUpList?UserID', () => {
        
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MySignUps/GetSignUpList?UserID=${userID}`,
                headers: {
                       Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                shortUrl=response.body;
                
            });
        });
   
    
    it('GetSignUpShortURL', () => {
        
     
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
                shortUrl=response.body;
                
            });
        });
    

    it('SignupEMail', () => {

        const requestBody={

            EventCategory : "EventCategory",
            Mail : "jackwilly963@gmail.com",
            Message: "msg",
            SignUpID: signUpID,
            SignupLink:`https://test.eventzet.com/signupwindow/${shortUrl}`,
            SignupTitle: "Tarang 2.0",
            Subject: "test"
         }
        
      
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/Message/SignupEMail',
                body: requestBody,
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
