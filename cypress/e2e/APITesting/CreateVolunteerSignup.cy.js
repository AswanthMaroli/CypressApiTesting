describe('Api Testing in the volunteer signup create component',()=>{

    let authToken;
    let signuID;
    let dateID;
    let locationID;
    let slotID;
    let signUpTimeSlotID;
    let signupQuestionID;
    const userID =2;

    before(()=>{

        cy.getToken().then((token) => {
            authToken = token; 
        });

    });

    it('SaveSignUpDates',()=>{

        const signUpData = {
            SignUpID: 0,
            SignUpTitle: "Health And Fitness",
            SignUpDescription: "World health day program",
            ModifiedUser: userID,
            DraftID: 604,
            Dates: [
                {
                    DateID: 0,
                    DateUID: "bd1a9274-c63d-48df-91ab-6d274b187f24",
                    Date: {
                        Day: 31,
                        Month: 10,
                        Year: 2024,
                        Hours: 0,
                        Minutes: 0,
                        Seconds: 0
                    },
                    LocationID: 0,
                    lat: 32.7766642,
                }]
            };
        
        cy.request({

            method: 'POST',
            url: 'https://testservices.eventzet.com/api/SignUpDates/SaveSignUpDates',
            body:signUpData,
            headers: {
             Authorization: `Bearer ${ authToken }`
            }

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
            expect(response.body.ID).and.not.eq(0);
            signuID=response.body.ID;
            cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
                data.signuID = signuID; // Update signuID
                cy.writeFile('cypress/fixtures/SavedDatas.json', data); 
            });
        });

    });

    it('GetSignupDates?SignUpID', () => {
        
       
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/SignUpDates/GetSignupDates?SignUpID=${signuID}`,
            headers: {
                 Authorization: `Bearer ${ authToken }`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
            expect(response.body[0].DateID).and.not.eq(0);
            expect(response.body[0].LocationID).and.not.eq(0);
            dateID=response.body[0].DateID;
            locationID=response.body[0].LocationID;
            cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
                data.dateID = dateID;
                data.locationID = locationID; 
                cy.writeFile('cypress/fixtures/SavedDatas.json', data); 
            });
        });
    });


    it('SaveSlots',()=>{

        const slotData = {
            ID: 0,
            SignUpID: signuID,
            SlotType: 587,
            ModifiedUser: userID,
            Slot: [
                {
                    SlotUID: "117b2e73-38f7-47dd-ad08-890623c90b46",
                    SlotID: 0,
                    Title: "Volunteers",
                    SignUpCount: 10
                }
            ]
        };
        
        
        cy.request({

            method: 'POST',
            url: 'https://testservices.eventzet.com/api/SignUpSlots/SaveSlots',
            body:slotData,
            headers: {
             Authorization: `Bearer ${ authToken }`
            }

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
          
        });

    });


    it('GetSlots?SignUpID', () => {
        
       
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/SignUpSlots/GetSlots?SignUpID=${signuID}`,
            headers: {
                 Authorization: `Bearer ${ authToken }`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
            expect(response.body[0].SlotID).and.not.eq(0);
            slotID=response.body[0].SlotID;
            cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
                data.slotID = slotID;
                cy.writeFile('cypress/fixtures/SavedDatas.json', data); 
            });
        });
    });



    it('SaveTimeSlots',()=>{

        const timeSlotData = {
            SignUpID: signuID,
            ModifiedUser: userID,
            TimeSlot: [
                {
                    TimeSlotIDPK: 0,
                    TimeUID: "864c4e05-4b59-4c45-b480-7cc92df72b6e",
                    SlotID: slotID,
                    DateID: dateID,
                    SignUpDate: null,
                    LocationDesc: "",
                    StartTime: {
                        Day: 1,
                        Month: 2,
                        Year: 1900,
                        Hours: 15,
                        Minutes: 0,
                        Seconds: 0
                    },
                    EndTime: {
                        Day: 1,
                        Month: 2,
                        Year: 1900,
                        Hours: 17,
                        Minutes: 0,
                        Seconds: 0
                    },
                    DelStatus: false,
                    IsChecked: false,
                    Utilities: {
                        datepipe: {
                            locale: "en-US"
                        }
                    }
                }
            ]
        };
        
        
        
        cy.request({

            method: 'POST',
            url: 'https://testservices.eventzet.com/api/SignUpSlots/SaveTimeSlots',
            body:timeSlotData,
            headers: {
             Authorization: `Bearer ${ authToken }`
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
            url: `https://testservices.eventzet.com/api/SignUpSlots/GetTimeSlotData?SignUpID=${signuID}`,
            headers: {
                 Authorization: `Bearer ${ authToken }`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
            expect(response.body[0].TimeSlotID).and.not.eq(0);
            signUpTimeSlotID=response.body[0].TimeSlotID;
            cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
                data.signUpTimeSlotID = signUpTimeSlotID;
                cy.writeFile('cypress/fixtures/SavedDatas.json', data); 
            });
        });
    });


    it('SaveSignUpSettings',()=>{

        const settingsData = {
            SettingsDetails: {
                SignUpSettingsIDPK: 0,
                SignUpID: signuID,
                SendPeopleReminders: false,
                NotifyByEmail: false,
                ModifiedUser: userID
            },
            Questions: [
                {
                    RecordID: 0,
                    SignUpID: 0,
                    SignUpSettingsIDPK: 0,
                    NotifyByEmail: false,
                    SendPeopleReminders: false,
                    ModifiedUser: 0,
                    ModifiedDate: null,
                    QuestionIDPK: 0,
                    Question: "Please enter your contact information?",
                    RequiredQuestion: false,
                    DelStatus: false,
                    Answer: ""
                }
            ]
        };
        
        
    
        cy.request({

            method: 'POST',
            url: 'https://testservices.eventzet.com/api/SignUpSettings/SaveSignUpSettings',
            body:settingsData,
            headers: {
             Authorization: `Bearer ${ authToken }`
            }

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
          
        });

    });


    it('GetQuestions?SignUpID', () => {
        
       
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/SignUpSettings/GetQuestions?SignUpID=${signuID}`,
            headers: {
                 Authorization: `Bearer ${ authToken }`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
            expect(response.body[0].QuestionIDPK).and.not.eq(0);
           signupQuestionID=response.body[0].QuestionIDPK;
            cy.readFile('cypress/fixtures/SavedDatas.json').then((data) => {
                data.signupQuestionID = signupQuestionID;
                cy.writeFile('cypress/fixtures/SavedDatas.json', data); 
            });
        });
    });


    it('SaveSignUp',()=>{

        const eventData = {
            SignUpID: signuID,
            EventID: 0,
            Title: "Health And Fitness",
            Description: "World health day program",
            SignUpTypeID: 0,
            SignUpCategoryID: 0,
            SignUpImageURL: null,
            ImageFileName: "bnrnull.jpg",
            UploadStatus: false,
            HtmlClass: "themeone",
            ModifiedUser: userID
        };
        
        
        
    
        cy.request({

            method: 'POST',
            url: 'https://testservices.eventzet.com/api/SignUpDesign/SaveSignUp',
            body:eventData,
            headers: {
             Authorization: `Bearer ${ authToken }`
            }

        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
          
        });

    });



    it('UploadSignUpImage', () => {
        
        const filePath = 'Health&Fitness.jpg';
        

        cy.fixture(filePath, 'binary').then((fileContent) => {

            const formData = new FormData();
            formData.append('files', Cypress.Blob.binaryStringToBlob(fileContent), filePath);
            formData.append('SignUpID', signuID); 
          
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/SignUpUploader/UploadSignUpImage',
                headers: {
                    Authorization: `Bearer ${authToken}`,
    
                },
                body: formData,
                timeout: 60000,
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(6000);
                expect(response.statusText).to.equal('OK');
               
            });
        });
    });


    it('GetSignupPublishWrapper', () => {
        
       
        cy.request({
            method: 'GET',
            url: `https://testservices.eventzet.com/api/SignupPublishWrapper/GetSignupPublishWrapper?SignUpID=${signuID}&SignUpStatus=SignUpStatus&SignUpPrivacyStatus=SignUpPrivacyStatus`,
            headers: {
                 Authorization: `Bearer ${ authToken }`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
        });
    });


    it('SignUpStatusChange', () => {
        
       
        cy.request({
            method: 'PUT',
            url: `https://testservices.eventzet.com/api/SignUpPublish/SignUpStatusChange?SignUpID=${signuID}&ModifiedUser=${userID}&SignUpstatus=590&Publishstatus=false`,
            headers: {
                 Authorization: `Bearer ${ authToken }`
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.duration).to.be.below(3000);
            expect(response.statusText).to.equal('OK');
        });
    });


    
    it('SignUpStatusChange', () => {
        
       
        cy.request({
            method: 'PUT',
            url: `https://testservices.eventzet.com/api/SignUpPublish/SignUpPrivacyStatusChange?SignUpID=${signuID}&ModifiedUser=${userID}&SignUpstatus=591&SignUpPrivacyStatus=602&Publishstatus=true`,
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