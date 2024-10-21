describe('Api Testing in the eventzet  signup message component', () => {
  
    before(() => {
     
        return cy.getToken(); 
    });

    const signUpID=2;
    const userID =2;
  
    var shortUrl='';

    it('GetSignUpList?UserID', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MySignUps/GetSignUpList?UserID=${userID}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                shortUrl=response.body;
                
            });
        });
    });
    
    it('GetSignUpShortURL', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/SignUpPublish/GetSignUpShortURL?SignUpID=${signUpID}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                shortUrl=response.body;
                
            });
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
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/Message/SignupEMail',
                body: requestBody,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    });


   


  
  

});
