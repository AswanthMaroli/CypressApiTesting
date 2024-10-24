describe('API Testing in the Login component', () => {

    const baseUrl = 'https://testservices.eventzet.com/api/Login';

    it('LoginAuthenticate - Successful login', () => {

        const requestBody = {
            Email: "aswanthm385@gmail.com",
            Password: "112233"
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/Authenticate`,
            body: requestBody
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            expect(response.duration).to.be.below(3000);

            // Headers
            expect(response.headers).to.have.property('content-type').that.includes('application/json');
            // Body structure and content
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('Token').that.is.a('string').and.is.not.empty;
            expect(response.body).to.have.property('UserID').that.is.a("number");
            expect(response.body).to.have.property('Email').that.equals(requestBody.Email);

            if (response.body.hasOwnProperty('Token')) {
                expect(response.body.Token).to.be.a('string').and.not.be.empty;
                
                // Only perform JWT structure check if token exists
                const token = response.body.Token;
                expect(token.split('.').length).to.equal(3);
              } else {
                cy.log('Warning: Token not present in response');
              }
    
        });
    });

    it('LoginAuthenticate - Invalid credentials', () => {

        const requestBody = {
            Email: "invalid@example.com",
            Password: "wrongpassword"
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/Authenticate`,
            body: requestBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(204);
            expect(response.statusText).to.equal('No Content');
            expect(response.body).to.be.undefined;
        });
    });

    it('LoginAuthenticate - Missing email', () => {

        const requestBody = {
            Password: "112233"
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/Authenticate`,
            body: requestBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('errors').that.is.an('object');
            expect(response.body.errors).to.have.property('Email').that.is.an('array').and.includes('The Email field is required.');
        });
    });

    it('LoginAuthenticate - Missing password', () => {

        const requestBody = {
            Email: "aswanthm385@gmail.com"
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/Authenticate`,
            body: requestBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('errors').that.is.an('object');
            expect(response.body.errors).to.have.property('Password').that.is.an('array').and.includes('The Password field is required.');
    
          
        });
    });

    it('LoginAuthenticate - Invalid email format', () => {

        const requestBody = {
            Email: "invalid-email",
            Password: "112233"
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/Authenticate`,
            body: requestBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(204);
            expect(response.body).to.be.undefined;
        });
    });


    
    it('Verify Login with SQL Injection Attack', () => {

        const requestBody = {
            Email: "' OR '1'='1",
            Password: "' OR '1'='1"
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/Authenticate`,
            body: requestBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(204);
            expect(response.body).to.be.undefined;  // not logined 
        });
    });

});