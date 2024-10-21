describe('Api Testing in the eventzet Signup Registration Confirm component', () => {

  before(() => {

    return cy.getToken();
  });


  const signUpID = 2;
  const signupRegID = 9;

  it('SaveSignUpRegUser', () => {

    const signUpData = {
      "SignUpRegUserIDPK": 0,
      "UserRegDetails": {
        "SignUpRegID": 0,
        "SignUpID": 2,
        "FirstName": "Aswanth",
        "LastName": "M",
        "Email": "aswanthm385@gmail.com",
        "GenderID": 367,
        "Address1": "testdallas",
        "Address2": "",
        "City": "dfdgf",
        "StateID": 311,
        "PostalCod": "2233",
        "ModifiedUser": 2
      },
      "SlotRegDetails": [
        {
          "TimeSlotID": 6,
          "SignUpCount": 1,
          "RegistrationComment": "qwe",
          "SignUpRegUserID": 0
        },
        {
          "TimeSlotID": 7,
          "SignUpCount": 1,
          "RegistrationComment": "sdf",
          "SignUpRegUserID": 0
        }
      ],
      "SignUpRegQuestion": [
        {
          "TimeSlotID": 6,
          "QuestionID": 1,
          "Answer": "11"
        },
        {
          "TimeSlotID": 7,
          "QuestionID": 1,
          "Answer": "11"
        }
      ]
    };
    

    cy.wrap(Cypress.env('authToken')).then((token) => {
      cy.request({
        method: 'POST',
        url: 'https://testservices.eventzet.com/api/SignUpRegUser/SaveSignUpRegUser',
        body: signUpData,
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


  it('GetRegistrationConfirm?SignUpRegID', () => {

    cy.wrap(Cypress.env('authToken')).then((token) => {
      cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/SignupRegistrationConfirm/GetRegistrationConfirm?SignUpRegID=${signupRegID}`,
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

  it('GetSignUpDetails?SignUpRegID', () => {

    cy.wrap(Cypress.env('authToken')).then((token) => {
      cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/SignUpDesign/GetSignUpDetails?SignUpID=${signUpID}`,
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
