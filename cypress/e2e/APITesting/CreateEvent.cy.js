describe('Api Testing in the eventzet Create Event component', () => {

    let eventID = '';
  
    before(() => {
        
        return cy.getToken(); 
    });

    const userID=2;
  
    it('SaveEvent', () => {
        
        const reqBody= {
            "EventID": 0,
            "EventOwnershipModeID": 450,
            "EventOwnershipMode": "",
            "EventOwner": 0,
            "EventCreator": 5,
            "Title": "Tarang 2.0",
            "City": "",
            "OrganizerTypeID": 372,
            "OrganizerType": "",
            "OrganizationTypeID": 0,
            "EventTypeID": 2,
            "EventType": "",
            "EventCategoryID": 33,
            "EventCategory": "",
            "EventSubCategoryID": 67,
            "EventSubCategory": "",
            "EventModeID": 42,
            "EventMode": "",
            "VenueLocation": "Austin, TX, USA",
            "lat": 30.267153,
            "lng": -97.7430608,
            "OnlineEventUrl": "",
            "OnlineEventInstructions": "",
            "EventTags": [
              {
                "TagID": 0,
                "TagName": "#music",
                "DelStatus": false
              }
            ],
            "ReservedSeat": false,
            "EventStartTime": "2/1/1900 3:00:00 PM",
            "EventEndTime": "2/1/1900 11:00:00 PM",
            "DisplayStartTime": false,
            "DisplayEndTime": false,
            "TimeZone": "",
            "TimeZoneID": 286,
            "Description": "Austin City Tarang Festival",
            "OrganizerEmail": "aswanthm385@gmail.com",
            "OrganizerPhone": "90980890890",
            "ModifiedUser": 5,
            "ModeChecked": false,
            "IsBasicInfoSaved": true,
            "RefundRequst": false,
            "IsPublished": false,
            "CreatedBy": 0,
            "Postedby": "",
            "ImageUrl": "",
            "EventStartDate": "7/13/2024 12:00:00 AM",
            "EventEndDate": "7/13/2024 12:00:00 AM"
          };

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/BasicInfo/SaveEvent',
                body: reqBody,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                timeout: 60000
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(6000);
                expect(response.statusText).to.equal('OK');
                expect(response.body).to.have.property('ID').and.not.eq(0);
                eventID = response.body.ID;
                cy.log(eventID);
            });
        });
    });

    
    it('GetCategoryByTypeName?CategoryTypeName=EventDataType', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=EventDataType',
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

    it('GetEventDetails?EventID', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BasicInfo/GetEventDetails?EventID=${eventID}`,
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

   
    it('GetEventStatus?EventID', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BasicInfo/GetEventStatus?EventID=${eventID}`,
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

     
    it('GetBannerImageInfo?EventID', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDetails/GetBannerImageInfo?EventID=${eventID}`,
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
    
    it('GetVideoInfo?EventID', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDetails/GetVideoInfo?EventID=${eventID}`,
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

    it('GetSubimageList?EventID', () => {
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventRegistration/GetSubimageList?EventID=${eventID}`,
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


    // Event Details

    it('UploadBannerImage', () => {
        const filePath = 'austin-city-limits.jpg';
        

        cy.fixture(filePath, 'binary').then((fileContent) => {

            const formData = new FormData();
            formData.append('files', Cypress.Blob.binaryStringToBlob(fileContent), filePath);
            formData.append('EventID', eventID); 

           
            cy.wrap(Cypress.env('authToken')).then((token) => {
              
                cy.request({
                    method: 'POST',
                    url: 'https://testservices.eventzet.com/api/EventUploader/UploadBannerImage',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVfByVvPaBlemrIpy', 
                    },
                    body: formData,
                    timeout: 60000,
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.duration).to.be.below(3000);
                    expect(response.statusText).to.equal('OK');
               
                });
               
            });
        });
    });

      it('UploadSubImages', () => {
        const filePath = '20210905_0378-1-scaled.jpg';
        

        cy.fixture(filePath, 'binary').then((fileContent) => {

            const formData = new FormData();
            formData.append('files', Cypress.Blob.binaryStringToBlob(fileContent), filePath);
            formData.append('EventID', eventID); 

           
            cy.wrap(Cypress.env('authToken')).then((token) => {
              
                cy.request({
                    method: 'POST',
                    url: 'https://testservices.eventzet.com/api/EventUploader/UploadSubImages',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data;  boundary=----WebKitFormBoundaryqaCndmbDPQwvMEvB', 
                    },
                    body: formData,
                    timeout: 60000,
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.duration).to.be.below(3000);
                    expect(response.statusText).to.equal('OK');
               
                });
               
            });
        });
    });



    it('SaveEventDetails', () => {

        const reqBody = {
            EventDetailsIDPK:0,
            EventID:eventID,
            IsEventDetailsSaved:true,
            ModifiedUser:5}
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/EventDetails/SaveEventDetails',
                body:reqBody,
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


    it('GetEventDetails?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDetails/GetEventDetails?EventID=${eventID}`,
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

    it('GetTierList?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AddTicket/GetTierList?EventID=${eventID}`,
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


    it('GetBannerImageInfo?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDetails/GetBannerImageInfo?EventID=${eventID}`,
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

    
    it('GetPricingDetails', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/Pricing/GetPricingDetails',
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

        
    it('GetVideoInfo?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDetails/GetVideoInfo?EventID=${eventID}`,
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


    it('GetEventStatus?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BasicInfo/GetEventStatus?EventID=${eventID}`,
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

    
    it('GetSubimageList?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventRegistration/GetSubimageList?EventID=${eventID}`,
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

    it('GetTicketList?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AddTicket/GetTicketList?EventID=${eventID}`,
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

    it('GetTicketAddOnList?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/TicketAddOn/GetTicketAddOnList?EventID=${eventID}`,
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

    it('GetPaidTicketTier?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/TicketAddOn/GetPaidTicketTier?EventID=${eventID}`,
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



    it('SaveTicketTier', () => {

        const reqBody = {
            TierIDPK:0,
            EventID:eventID,
            TierName:"Gold",
            ModifiedUser:5,
            IsEventPublished:false,
            DelStatus:false }
        
        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/AddTicket/SaveTicketTier',
                body:reqBody,
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

    it('GetTierList?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AddTicket/GetTierList?EventID=${eventID}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                const firstObject = response.body[0];
                expect(firstObject.TierIDPK).to.be.a('number');
                expect(firstObject.TierName).to.equal('Regular');
                
            });
        });
    }); 

    it('SaveTicketDetails-FreeTicket', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {

            const reqBody = {

                TicketIDPK: 0,
                EventID: eventID,
                TicketTypeID: 276,
                TierID: 140,
                PricingID: 1,
                TicketName: "Free Ticket",
                Quantity: 100,
                Price: 0,
                MaximumTickets: 8,
                SalesStartDate: "7/10/2024 12:00:00 AM",
                SalesStartTime: "2/1/1900 12:00:00 PM",
                SalesEndDate: "7/12/2024 12:00:00 AM",
                SalesEndTime: "2/1/1900 1:00:00 PM",
                ShowDatesatCheckout: true,
                ModifiedUser: 5
              }
              
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/AddTicket/SaveTicketDetails',
                body: reqBody,
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

    
    it('SaveTicketDetails-PaidTicket', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {

            const reqBody = {
                TicketIDPK: 0,
                EventID: 85,
                TicketTypeID: 275,
                TierID: 141,
                PricingID: 2,
                TicketName: "Paid Ticket",
                Quantity: 100,
                Price: 10,
                MaximumTickets: 10,
                SalesStartDate: "7/11/2024 12:00:00 AM",
                SalesStartTime: "2/1/1900 9:00:00 AM",
                SalesEndDate: "7/13/2024 12:00:00 AM",
                SalesEndTime: "2/1/1900 10:00:00 AM",
                ShowDatesatCheckout: true,
                ModifiedUser: 5
            }
              
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/AddTicket/SaveTicketDetails',
                body: reqBody,
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

     it('GetTicketList?EventID', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AddTicket/GetTicketList?EventID=85`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                expect(response.body[0].TicketName).to.equal('Free Ticket');
                expect(response.body[0].EventTypeID).to.equal(276);
                expect(response.body[1].TicketName).to.equal('Paid Ticket');
                expect(response.body[1].EventTypeID).to.equal(275);

            });
        });
    });


   it('SaveCustomerInfo', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {

            const reqBody =     {
                CustomerInformation: {
                    CustomerInfoIDPK: 0,
                    EventID: 85,
                    SpecialInstructions: "Please Keep Your Phone Silent ",
                    Message: "Hy Welcome ",
                    ReplyToEmail: "",
                    CustomizeReply: "",
                    IsCustomerDetailsSaved: True,
                    ModifiedUser: 5,
                    IsEventPublished: False
                },
                Questions: [
                    {
                        QuestionIDPK: 0,
                        Question: "Enter your age ?",
                        DelStatus: False
                    }
                ]
            }
              
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/CustomerInfo/SaveCustomerInfo',
                body: reqBody,
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


    it('GetEventPublishWrapper', () => {

        const reqBody ={

            EventDataType: "EventDataType",
            State: "State",
            RefundPolicy: "RefundPolicy",
            EventTax: "EventTax",
            EventAccessibility: "EventAccessibility",
            PublishType: "PublishType",
            EventStatus: "EventStatus",
            EventApprovalStatus: "EventApprovalStatus"
        }

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'POST',
                url: `https://testservices.eventzet.com/api/EventPublishWrapper/GetEventPublishWrapper`,
                body:reqBody,
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


it('SavePublishData', () => {

    const reqBody  = {

        PublishDetailsIDPK: null,
        EventID: 85,
        RefundRequst: null,
        IsEventPublishDetailsSaved: true,
        RefundPolicyID: 0,
        RefundPolicy: null,
        IsServiceChargeGivenByEventCreator: null,
        IsNeedToChargeTax: null,
        ModifiedUser: 5,
        EventTaxInfo: {
            EventTaxID: 0,
            EventID: 85,
            EventOwnerID: 5,
            StateID: 0,
            State: "",
            SalesTaxID: "",
            TaxName: "",
            TaxRate: 0
        }
    }

    cy.wrap(Cypress.env('authToken')).then((token) => {
        cy.request({
            method: 'POST',
            url: 'https://testservices.eventzet.com/api/Publish/SavePublishData',
            body:reqBody,
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




it('SavePublishData', () => {

    const reqBody  = {

        PublishDetailsIDPK: null,
        EventID: 85,
        RefundRequst: null,
        IsEventPublishDetailsSaved: true,
        RefundPolicyID: 0,
        RefundPolicy: null,
        IsServiceChargeGivenByEventCreator: null,
        IsNeedToChargeTax: null,
        ModifiedUser: 5,
        EventTaxInfo: {
            EventTaxID: 0,
            EventID: 85,
            EventOwnerID: 5,
            StateID: 0,
            State: "",
            SalesTaxID: "",
            TaxName: "",
            TaxRate: 0
        }
    }

    cy.wrap(Cypress.env('authToken')).then((token) => {
        cy.request({
            method: 'POST',
            url: 'https://testservices.eventzet.com/api/Publish/SavePublishData',
            body:reqBody,
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




