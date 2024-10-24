describe('Api Testing in the eventzet Account Settings component',() => {

    let authToken;
    let eventID;
    let regID;
    let ticketID;
    let addonID;
    let orderNumber;
    let orderID;
    let questionID;
    const userID =2;

  before(() =>{

    cy.getToken().then((token) => {
        authToken = token; 
    });

    cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
        eventID = data.eventID;
    });

    cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
        ticketID = data.ticketID;
    });

    cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
        addonID = data.addonID;
    });

    // cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
    //     regID = data.regID;
    // });
    // cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
    //     questionID = data.questionID;
    // });


  });

  it('SaveRegistration',() =>{

    const reqBody = {
        EventID: eventID,
        EventRegID: 0,
        EventRegMode: 448,
        ModifiedUser: 0,
        Tickets: [
            {
                RegTicketIDPK: 0,
                EventRegID: 0,
                TicketID: ticketID,
                TicketCount: 1,
                UnitPrice: 10,
                PricingID: 2,
                PricingDetailsID: 2,
                TaxRate: 10,
                TaxChargeFixed: 0,
                TaxChargeMinimum: 0,
                TaxCharge: 1,
                ServiceChargeRate: 2.1,
                ServiceChargeFixed: 0.99,
                ServiceChargeMinimum: 0,
                ServiceCharge: 1.2,
                PaymentChargeRate: 2.9,
                PaymentChargeFixed: 0.3,
                PaymentChargeMinimum: 0,
                PaymentCharge: 0.59,
                ServiceChargeCollected: true,
                Total: 25.58,
                ModifiedUser: userID,
                Utilities: {
                    datepipe: {
                        locale: "en-US"
                    }
                }
            }
        ],
        AddOns: [
            {
                RegTicketAddOnID: 0,
                EventRegID: 0,
                TicketID: ticketID,
                AddOnID: addonID,
                Quantity: 1,
                Price: 10,
                AddOnCharge: 10,
                AddOnPricingID: 2,
                AddOnPricingDetailsID: 2,
                TaxRate: 10,
                TaxChargeFixed: 0,
                TaxChargeMinimum: 0,
                TaxCharge: 1,
                ServiceChargeRate: 2.1,
                ServiceChargeFixed: 0.99,
                ServiceChargeMinimum: 0,
                ServiceCharge: 1.2,
                PaymentChargeRate: 2.9,
                PaymentChargeFixed: 0.3,
                PaymentChargeMinimum: 0,
                PaymentCharge: 0.59,
                ModifiedUser: 0,
                Total: 12.79,
                Utilities: {
                    datepipe: {
                        locale: "en-US"
                    }
                }
            }
        ]
    };

    cy.request({ 

        method:'POST',
        url:'https://testservices.eventzet.com/api/EventRegistration/SaveEventRegistration',
        body:reqBody,
        headers: {
            Authorization: `Bearer ${authToken}`
        },
        timeout: 60000

    }).then((response) => {

        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
        expect(response.body.SaveResponse).to.have.property('ID').and.not.eq(0);
        expect(response.body.SaveResponse).to.have.property('Saved').and.eq(true);
        regID=response.body.SaveResponse.ID;
        cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
            data.regID = regID; // Update eventID
            cy.writeFile('cypress/fixtures/SavedDatas.json', data); // Save the updated data
        });
        cy.log('regID =',regID);

    });

  });

    
  it('GetQuestions?EventID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/CustomerInfo/GetQuestions?EventID=${eventID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
        questionID = response.body[0].QuestionIDPK;
        cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
            data.questionID = questionID; // Update eventID
            cy.writeFile('cypress/fixtures/SavedDatas.json', data); // Save the updated data
        });
    });
});

    
it('GetEventRegPaymentInfo?EventRegID&EventID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=${regID}&EventID=${eventID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});


it('GetEventDataByRegID?EventRegID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/GetEventDataByRegID?EventRegID=${regID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});

it('GetEventRegistrationData?EventRegID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/GetEventRegistrationData?EventRegID=${regID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});

it('GetEventRegInfo?EventRegID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/GetEventRegInfo?EventRegID=${regID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});

it('SaveEventRegPlaceOrder',() =>{

    const reqBody = {
        "AttendeesInfo": [
            {
                "AttendeeIDPK": 0,
                "EventRegID": 0,
                "EventID": 0,
                "FirstName": "Aswanth",
                "LastName": "M",
                "Email": "aswanthm385@gmail.com",
                "TicketID": ticketID,
                "TicketName": "",
                "TierID": 0,
                "TierName": ""
            }
        ],
        "ContactInfo": {
            "EventRegID": regID,
            "EventID": eventID,
            "Prefix": null,
            "FirstName": "Aswanth",
            "LastName": "M",
            "Suffix": null,
            "Email": "aswanthm385@gmail.com",
            "GenderID": null,
            "Phone": "6770897564",
            "Address1": "testdallas",
            "Address2": null,
            "City": "dfdgf",
            "StateID": 311,
            "StateName": null,
            "ZipCode": "2233",
            "UserID": userID
        },
        "EventQuestions": [
            {
                "QuestionID": questionID,
                "Question": "Please enter your age?",
                "Answer": "25"
            }
        ]
    };
    

    cy.request({ 

        method:'POST',
        url:'https://testservices.eventzet.com/api/EventRegistration/SaveEventRegPlaceOrder',
        body:reqBody,
        headers: {
            Authorization: `Bearer ${authToken}`
        },
        timeout: 60000

    }).then((response) => {

        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    
    });

  });


  it('IsTicketReleased?EventRegID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/IsTicketReleased?EventRegID=${regID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});



it('GetOrderSummary?EventRegID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/GetOrderSummary?EventRegID=${regID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});


it('GetEventDetails?EventID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/GetEventDetails?EventID=${regID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});

it('GetEventRegPaymentInfo?EventRegID&EventID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/GetEventRegPaymentInfo?EventRegID=${regID}&EventID=${eventID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});

it('GetEventBannerImage?Path=Stage', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/Files/GetEventBannerImage?Path=Stage/Events/${eventID}/Banner/`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});


it('IsTicketReleased?EventRegID', () => {
        
        
    cy.request({
        method: 'GET',
        url: `https://testservices.eventzet.com/api/EventRegistration/IsTicketReleased?EventRegID=${regID}`,
        headers: {
             Authorization: `Bearer ${authToken}`
        },
        timeout: 60000
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
    });
});


it('SaveBillingInfo',() =>{

    const paymentReqBody = {
        "EventRegID": regID,
        "EventID": eventID,
        "PaymentTypeID": 390,
        "CardNumber": "370000000000002",
        "NameOnCard": "aswanth",
        "UserID": userID,
        "TotalAmount": 25.58
    };
    
    

    cy.request({ 

        method:'POST',
        url:'https://testservices.eventzet.com/api/EventRegistration/SaveBillingInfo',
        body:paymentReqBody,
        headers: {
            Authorization: `Bearer ${authToken}`
        },
        timeout: 60000

    }).then((response) => {

        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(3000);
        expect(response.statusText).to.equal('OK');
        expect(response.body).to.have.property('ID').and.not.eq(0);
        expect(response.body).to.have.property('Saved').and.eq(true);
        orderID=response.body.ID;
        cy.log('orderID',orderID);
        cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
            data.orderID = orderID; // Update eventID
            cy.writeFile('cypress/fixtures/SavedDatas.json', data); // Save the updated data
        });
    
    });

  });

  it('GetOrderDetails', () => {
      
    cy.wrap(Cypress.env('authToken')).then((token) => {
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/EventRegistration/GetOrderDetails?EventRegID=${regID}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK'); // order number 
            orderNumber=response.body.OrderDetails.OrderNumber;
            cy.log('orderNumber',orderNumber);
            cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
                data.orderNumber = orderNumber; // Update eventID
                cy.writeFile('cypress/fixtures/SavedDatas.json', data); // Save the updated data
            });
        

        });
    });
});



  it('CreatePayment',() =>{

    const transactionReqBody = {
        "UserID": userID,
        "TransactionId": "",
        "RefId": orderNumber,
        "MerchantAuthentication": {
            "Name": "",
            "TransactionKey": ""
        },
        "TransactionRequest": {
            "TransactionType": "authCaptureTransaction",
            "Payment": {
                "CreditCard": {
                    "CardNumber": "370000000000002",
                    "ExpirationDate": "2025-03",
                    "CardCode": "245"
                }
            },
            "Order": {
                "InvoiceNumber": orderNumber,
                "Description": ""
            },
            "LineItems": [
                {
                    "ItemId": "0000007528",
                    "Quantity": 1,
                    "UnitPrice": 10
                }
            ],
            "Customer": {
                "Id": "aswanthm385@gmail.com",
                "CustomerType": 0,
                "CustomerName": "M Aswanth",
                "Email": "aswanthm385@gmail.com"
            },
            "PONumber": "0000007420",
            "Charges": [],
            "BillTo": {
                "FirstName": "Aswanth",
                "LastName": "M",
                "Address": "testdallas",
                "City": "dfdgf",
                "State": "Indiana",
                "Zip": "2233"
            },
            "ShipTo": {
                "FirstName": "Aswanth",
                "LastName": "M",
                "Address": "testdallas",
                "City": "dfdgf",
                "State": "Indiana",
                "Zip": "2233"
            },
            "Amount": 25.58
        }
    };
    
    
    

    cy.request({ 

        method:'POST',
        url:'https://testservices.eventzet.com/api/CreditCardPayment/CreatePayment',
        body:transactionReqBody,
        headers: {
            Authorization: `Bearer ${authToken}`
        },
        timeout: 60000

    }).then((response) => {

        expect(response.status).to.equal(200);
        expect(response.duration).to.be.below(4000);
        expect(response.statusText).to.equal('OK');
        expect(response.body).to.have.property('ResponseCode').eq('I00001');
        expect(response.body.Messages[0]).to.have.property('Text').eq('Successful.');
        expect(response.body).to.have.property('ErrorMessage').and.not.eq('Transaction held for review. Payment will be reverted back if debited');
        expect(response.body).to.have.property('ResultCode').eq('Ok');
    });

  });


});