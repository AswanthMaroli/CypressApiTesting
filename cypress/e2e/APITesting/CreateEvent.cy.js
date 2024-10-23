describe('Api Testing in the eventzet Create Event component', () => {

    let eventID  ;
    let authToken;
    const userID=2;
    let venueID;
    let levelID;
    let timeSlotID;
    let ticketID;
    let addonID;

    before(() => {
        cy.getToken().then((token) => {
          authToken = token; // Store retrieved token for authorization
          cy.log('Auth Token:', authToken); // Log the token to confirm it's retrieved
        });
      });
      



  
    it('SaveEvent', () => {
        
        const reqBody= {
            "EventID": 0,
            "EventOwnershipModeID": 450,
            "EventOwnershipMode": "",
            "EventOwner": 0,
            "EventCreator": userID,
            "Title": "Music Night",
            "City": "",
            "OrganizerTypeID": 372,
            "OrganizerType": "",
            "OrganizationTypeID": 0,
            "EventTypeID": 2,
            "EventType": "",
            "EventCategoryID": 33,
            "EventCategory": "",
            "EventSubCategoryID": 68,
            "EventSubCategory": "",
            "EventModeID": 0,
            "EventMode": "",
            "VenueLocation": "",
            "lat": 0,
            "lng": 0,
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
            "EventStartTime": null,
            "EventEndTime": null,
            "DisplayStartTime": false,
            "DisplayEndTime": false,
            "TimeZone": "",
            "TimeZoneID": 0,
            "Description": "Music Night - 2024",
            "OrganizerEmail": "aswanthm385@gmail.com",
            "OrganizerPhone": "9097978978",
            "ModifiedUser": userID,
            "ModeChecked": false,
            "IsBasicInfoSaved": true,
            "RefundRequst": false,
            "IsPublished": false,
            "CreatedBy": 0,
            "Postedby": "",
            "ImageUrl": "",
            "EventStartDate": "10/26/2024 12:00:00 AM",
            "EventEndDate": "10/28/2024 12:00:00 AM"
          };
          
        
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/BasicInfo/SaveEvent',
                body: reqBody,
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
                timeout: 60000
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(6000);
                expect(response.statusText).to.equal('OK');
                expect(response.body).to.have.property('ID').and.not.eq(0);
                eventID = response.body.ID;
                cy.writeFile('cypress/fixtures/SavedDatas.json', { eventID });
                cy.log(eventID);
                cy.log(eventID);
            });
        });


        it('SaveEventVenues', () => {
        
            const reqBody= {
                "EventID": eventID,
                "ModifiedUser": userID,
                "VenueMode": 42,
                "EventVenueDetail": [
                  {
                    "VenueID": 0,
                    "VenueUID": "bc2e4ee0-0bdd-4c5f-b680-a453fa63b799",
                    "EventID": 0,
                    "VenueMode": 42,
                    "ToBeAnnounced": false,
                    "VenueName": "Texas, USA",
                    "VenueAddress": "Texas city hall",
                    "City": "",
                    "Country": "",
                    "LocationID": 0,
                    "LocationUID": "",
                    "Latitude": 31.9685988,
                    "Longitude": -99.9018131,
                    "Title": "",
                    "OnlineEventURL": "",
                    "Instructions": "",
                    "ModifiedUser": userID
                  }
                ]
              };
              
            
                cy.request({
                    method: 'POST',
                    url: 'https://testservices.eventzet.com/api/Venues/SaveEventVenues',
                    body: reqBody,
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    },
                    timeout: 60000
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.duration).to.be.below(6000);
                    expect(response.statusText).to.equal('OK');
                    expect(response.body).to.have.property('ID').and.not.eq(0);
                });
            });
    



    it('GetEventDataByEventID?EventID', () => {
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventRegistration/GetEventDataByEventID?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                expect(response.body.EventDetails).to.have.property('EventID').eq(eventID);
            });
        });

        
    it('GetCategoryByTypeName?CategoryTypeName', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://testservices.eventzet.com/api/Category/GetCategoryByTypeName?CategoryTypeName=EventMode',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
            expect(response.body[0]).to.have.property('ID').and.not.eq(0);
        });
    });


        it('GetEventVenues?EventID', () => {
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Venues/GetEventVenues?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
              
            });
        });

        // save city

        it('SaveEventVenues', () => {
        
            const reqBody= {
                "EventID": eventID,
                "ModifiedUser": userID,
                "VenueMode": 42,
                "EventVenueDetail": [
                  {
                    "VenueID": 0,
                    "VenueUID": "8d493d63-0832-44aa-bb01-692fdf8e3198",
                    "EventID": 0,
                    "VenueMode": 42,
                    "ToBeAnnounced": true,
                    "VenueName": "",
                    "VenueAddress": "",
                    "City": "Dallas",
                    "Country": "",
                    "LocationID": 0,
                    "LocationUID": "",
                    "Latitude": 0,
                    "Longitude": 0,
                    "Title": "",
                    "OnlineEventURL": "",
                    "Instructions": "",
                    "ModifiedUser": userID
                  }
                ]
              };
              
            
                cy.request({
                    method: 'POST',
                    url: 'https://testservices.eventzet.com/api/Venues/SaveEventVenues',
                    body: reqBody,
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    },
                    timeout: 60000
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.duration).to.be.below(6000);
                    expect(response.statusText).to.equal('OK');
                    expect(response.body).to.have.property('ID').and.not.eq(0);
                    
                });
            });

            it('GetEventDataByEventID?EventID', () => {
        
                cy.request({
                    method: 'GET',
                    url: `https://testservices.eventzet.com/api/EventRegistration/GetEventDataByEventID?EventID=${eventID}`,
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.duration).to.be.below(3000);
                    expect(response.statusText).to.equal('OK');
                    expect(response.body.EventDetails).to.have.property('EventID').eq(eventID);
                });
            });


            it('GetEventVenues?EventID', () => {
        
                cy.request({
                    method: 'GET',
                    url: `https://testservices.eventzet.com/api/Venues/GetEventVenues?EventID=${eventID}`,
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.duration).to.be.below(3000);
                    expect(response.statusText).to.equal('OK');
                    expect(response.body[0]).to.have.property('VenueID').and.not.eq(0);
                    venueID=response.body[0].VenueID;
                });
            });

          // save online 

            it('SaveEventVenues', () => {
        
                const reqBody={
                    "EventID": eventID,
                    "ModifiedUser": userID,
                    "VenueMode": 43,
                    "EventVenueDetail": [
                      {
                        "VenueID": 0,
                        "VenueUID": "8fb8a974-05ff-41f8-b619-e264a7f2bd8c",
                        "EventID": 0,
                        "VenueMode": 43,
                        "ToBeAnnounced": false,
                        "VenueName": "",
                        "VenueAddress": "",
                        "City": "",
                        "Country": "",
                        "LocationID": 0,
                        "LocationUID": "",
                        "Latitude": 0,
                        "Longitude": 0,
                        "Title": "Online Trading Course",
                        "OnlineEventURL": "zoom link",
                        "Instructions": "test",
                        "ModifiedUser": userID
                      }
                    ]
                  };
                  
                 
                
                    cy.request({
                        method: 'POST',
                        url: 'https://testservices.eventzet.com/api/Venues/SaveEventVenues',
                        body: reqBody,
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        },
                        timeout: 60000
                    }).then((response) => {
                        expect(response.status).to.equal(200);
                        expect(response.duration).to.be.below(6000);
                        expect(response.statusText).to.equal('OK');
                        expect(response.body).to.have.property('ID').and.not.eq(0);
                    });
                });
    
                it('GetEventDataByEventID?EventID', () => {
                   
                    cy.request({
                        method: 'GET',
                        url: `https://testservices.eventzet.com/api/EventRegistration/GetEventDataByEventID?EventID=${eventID}`,
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    }).then((response) => {
                        expect(response.status).to.equal(200);
                        expect(response.duration).to.be.below(3000);
                        expect(response.statusText).to.equal('OK');
                        expect(response.body.EventDetails).to.have.property('EventID').eq(eventID);
                    });
                });
    
    
                it('GetEventVenues?EventID', () => {
            
                    cy.request({
                        method: 'GET',
                        url: `https://testservices.eventzet.com/api/Venues/GetEventVenues?EventID=${eventID}`,
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    }).then((response) => {
                        expect(response.status).to.equal(200);
                        expect(response.duration).to.be.below(3000);
                        expect(response.statusText).to.equal('OK');
                        expect(response.body[2]).to.have.property('VenueID').and.not.eq(0);
                    });
                });



                it('SaveEventLevels', () => {
        
                    const reqBody={
                        "ID": 0,
                        "EventID": eventID,
                        "ModifiedUser": userID,
                        "TierList": [
                          {
                            "TierID": 0,
                            "TierName": "Regular",
                            "DelStatus": false
                          },
                          {
                            "TierID": 0,
                            "TierName": "Silver",
                            "DelStatus": false
                          }
                        ]
                      };
                    
                      
                        cy.request({
                            method: 'POST',
                            url: 'https://testservices.eventzet.com/api/Levels/SaveEventLevels',
                            body: reqBody,
                            headers: {
                                Authorization: `Bearer ${authToken}`
                            },
                            timeout: 60000
                        }).then((response) => {
                            expect(response.status).to.equal(200);
                            expect(response.duration).to.be.below(6000);
                            expect(response.statusText).to.equal('OK');
                            expect(response.body).to.have.property('ID').and.not.eq(0);
                        });
                    });

   
    it('GetEventDates?EventID', () => {
        
     
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Timeslot/GetEventDates?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });

        it('GetEventLevels?EventID', () => {
        
     
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Levels/GetEventLevels?EventID=${eventID}`,
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                levelID = response.body[1].TierID;
            });
        });



        it('SaveEventTimeSlots', () => {
        
            const reqBody={
                "ID": 0,
                "EventID": eventID,
                "ModifiedUser": userID,
                "TimeEventSlots": [
                  {
                    "SlotID": 0,
                    "StartDate": "10/26/2024 12:00:00 AM",
                    "EndDate": "10/26/2024 12:00:00 AM",
                    "StartTime": "2/1/1900 12:00:00 PM",
                    "EndTime": "2/1/1900 4:00:00 PM",
                    "TimeZoneID": 286,
                    "DelStatus": false
                  }
                ]
              };
              
              
                cy.request({
                    method: 'POST',
                    url: 'https://testservices.eventzet.com/api/Timeslot/SaveEventTimeSlots',
                    body: reqBody,
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    },
                    timeout: 60000
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.duration).to.be.below(6000);
                    expect(response.statusText).to.equal('OK');
                    expect(response.body).to.have.property('ID').and.not.eq(0);
                });
            });


            
    it('GetEventDates?EventID', () => {
        
     
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/Timeslot/GetEventTimeSlots?EventID=${eventID}`,
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
        });
    });


    it('GetPricingDetails', () => {
        
     
        cy.request({
            method: 'GET',
            url: 'https://testservices.eventzet.com/api/Pricing/GetPricingDetails',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('GetTierList?EventID', () => {
        
     
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/AddTicket/GetTierList?EventID=${eventID}`,
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('GetEventVenues?EventID', () => {
        
     
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/Venues/GetEventVenues?EventID=${eventID}`,
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('GetEventTimeSlots?EventID', () => {
        
     
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/Timeslot/GetEventTimeSlots?EventID=${eventID}`,
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
            timeSlotID = response.body[0].SlotID;
        });
    });

    it('GetAddOnPricingDetails', () => {
        
     
        cy.request({
            method: 'GET',
            url: 'https://testservices.eventzet.com/api/Pricing/GetAddOnPricingDetails',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
        });
    });


    it('SaveTicketDetails', () => {
        
        const reqBody={
            "TicketIDPK": 0,
            "EventID": eventID,
            "VenueID": venueID,
            "SlotID": timeSlotID,
            "TierID": levelID,
            "TicketTypeID": 275,
            "PricingID": 2,
            "TicketName": "Paid Ticket",
            "StockQuantity": 100,
            "Quantity": 0,
            "Price": 10,
            "TaxRate": 10,
            "MaximumTickets": 10,
            "SalesStartDate": "10/22/2024 12:00:00 AM",
            "SalesStartTime": "2/1/1900 1:05:00 PM",
            "SalesEndDate": "10/24/2024 12:00:00 AM",
            "SalesEndTime": "2/1/1900 5:05:00 PM",
            "ShowDatesatCheckout": true,
            "ModifiedUser": userID
          };
          
          
          
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/AddTicket/SaveTicketDetails',
                body: reqBody,
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
                timeout: 60000
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(6000);
                expect(response.statusText).to.equal('OK');
                expect(response.body).to.have.property('ID').and.not.eq(0);
            });
        });
    
    

     
    it('GetTicketList?EventID', () => {
        
        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/AddTicket/GetTicketList?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                ticketID = response.body[0].TicketIDPK;
            });
        });



    it('SaveAddOnTicketDetails', () => {
        
        const reqBody={
            "AddOnID": 0,
            "EventID": eventID,
            "TicketID": ticketID,
            "TierID": 0,
            "AddOnName": "Paid Addon",
            "StockQuantity": 100,
            "AvailableQuantity": 0,
            "Quantity": 0,
            "Price": 10,
            "PricingID": 2,
            "PricingDetailsID": 2,
            "AddOnTypeID": 616,
            "TaxRate": 10,
            "MaximumAddOns": 10,
            "Description": "",
            "ModifiedUser": userID,
            "DelStatus": false
          };
          
          
          
          
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/TicketAddOn/SaveAddOnTicketDetails',
                body: reqBody,
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
                timeout: 60000
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(6000);
                expect(response.statusText).to.equal('OK');
                expect(response.body).to.have.property('ID').and.not.eq(0);
            });
        });


    
    it('GetTicketAddOnList?EventID', () => {
        
    
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/TicketAddOn/GetTicketAddOnList?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    


    it('UploadBannerImage', () => {
        
        const filePath = 'austin-city-limits.jpg';
        

        cy.fixture(filePath, 'binary').then((fileContent) => {

            const formData = new FormData();
            formData.append('files', Cypress.Blob.binaryStringToBlob(fileContent), filePath);
            formData.append('EventID', eventID); 
          
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/EventUploader/UploadBannerImage',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVfByVvPaBlemrIpy', 
                },
                body: formData,
                timeout: 60000,
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(6000);
                expect(response.statusText).to.equal('OK');
                expect(response.body).to.have.property('message').and.include('Files uploaded Successfully');
            });
        });
    });


      it('UploadSubImages', () => {
        const filePath = '20210905_0378-1-scaled.jpg';
        

        cy.fixture(filePath, 'binary').then((fileContent) => {

            const formData = new FormData();
            formData.append('files', Cypress.Blob.binaryStringToBlob(fileContent), filePath);
            formData.append('EventID', eventID); 

      
                cy.request({
                    method: 'POST',
                    url: 'https://testservices.eventzet.com/api/EventUploader/UploadSubImages',
                    headers: {
                        Authorization: `Bearer ${authToken}`,
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




    it('SaveEventDetails', () => {

        const reqBody = {
            EventDetailsIDPK:0,
            EventID:eventID,
            IsEventDetailsSaved:true,
            ModifiedUser:userID}
        
      
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/EventDetails/SaveEventDetails',
                body:reqBody,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
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


    it('SaveVideoURL', () => {

        const reqBody = {
            "EventID": eventID,
            "ModifiedUser": userID,
            "Videos": [
              {
                "EventDetailsIDPK": 0,
                "VideoURL": "https://www.youtube.com/watch?v=gPpQNzQP6gE",
                "VideoTypeID": 617
              },
              {
                "EventDetailsIDPK": 0,
                "VideoURL": "https://vimeo.com/1002833698",
                "VideoTypeID": 619
              },
              {
                "EventDetailsIDPK": 0,
                "VideoURL": "https://rumble.com/embed/v5bdflh/?pub=4",
                "VideoTypeID": 618
              }
            ]
          }
          
        
      
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/EventDetails/SaveVideoURL',
                body:reqBody,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


    it('GetBannerImageInfo?EventID', () => {

        
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/EventDetails/GetBannerImageInfo?EventID=${eventID}`,
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
    

    

   it('SaveCustomerInfo', () => {

        

            const reqBody =   {
                "CustomerInformation": {
                  "CustomerInfoIDPK": 0,
                  "EventID": eventID,
                  "SpecialInstructions": "No Smoking",
                  "Message": "Hy all",
                  "ReplyToEmail": "",
                  "CustomizeReply": "",
                  "IsCustomerDetailsSaved": true,
                  "ModifiedUser": userID,
                  "IsEventPublished": false
                },
                "Questions": [
                  {
                    "QuestionIDPK": 0,
                    "Question": "Please enter your age?",
                    "Answer": "",
                    "RequiredQuestion": false,
                    "DelStatus": false
                  }
                ]
              };
              
              
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/CustomerInfo/SaveCustomerInfo',
                body: reqBody,
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


        it('GetEventPublishList?EventID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Publish/GetEventPublishList?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


        it('GetEventDetails?EventID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BasicInfo/GetEventDetails?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });



        it('GetEventTimeSlots?EventID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Timeslot/GetEventTimeSlots?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


        it('GetEventPublishWrapper', () => {

    
            const reqBody =  {
                "EventDataType": "EventDataType",
                "State": "State",
                "RefundPolicy": "RefundPolicy",
                "EventTax": "EventTax",
                "EventAccessibility": "EventAccessibility",
                "PublishType": "PublishType",
                "EventStatus": "EventStatus",
                "EventApprovalStatus": "EventApprovalStatus"
              }
              
              
              
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/EventPublishWrapper/GetEventPublishWrapper',
                body: reqBody,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
                
            });
        });


        
        it('GetEventTags?EventID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BasicInfo/GetEventTags?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });

        
        it('GetEventInfo?EventID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Publish/GetEventInfo?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });

        it('GetPublishDetails?EventID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Publish/GetPublishDetails?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });

        it('GetEventLocation?EventID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/BasicInfo/GetEventLocation?EventID=${eventID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });




it('SavePublishData', () => {

    const reqBody  = {
        "PublishDetailsIDPK": null,
        "EventID": 30,
        "RefundRequst": true,
        "IsEventPublishDetailsSaved": true,
        "RefundPolicyID": 355,
        "RefundPolicy": null,
        "IsServiceChargeGivenByEventCreator": null,
        "IsNeedToChargeTax": null,
        "ModifiedUser": 2,
        "EventTaxInfo": null
      }
      
        cy.request({
            method: 'POST',
            url: 'https://testservices.eventzet.com/api/Publish/SavePublishData',
            body:reqBody,
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');

        });
     });


     it('EventStatusChange?EventID&ModifiedUser', () => {

       
            cy.request({
                method: 'PUT',
                url: `https://testservices.eventzet.com/api/Publish/EventStatusChange?EventID=${eventID}&ModifiedUser=${userID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
    
            });
         });

         it('MyEventsWrapper?UserID', () => {

            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/MyEvents/MyEventsWrapper?UserID=${userID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


        it('DeleteDashboardEvent?EventID', () => {
        
            cy.request({
                method: 'DELETE',
                url: `https://testservices.eventzet.com/api/DashboardEventList/DeleteDashboardEvent?EventID=${eventID}&ModifiedUser=${userID}`,
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










