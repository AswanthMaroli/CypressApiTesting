describe('Api Testing in the Search Event component', ()=>{

  
    let authToken;

    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });

    it('GetEventSearchWrapper',()=>{


        const requestBody={

            EventCategory : "EventCategory",
            EventMode     : "EventMode",
            EventType     : "EventType",
            TicketType    : "TicketType"
         }

       
        cy.request(

            {
                   method: 'POST',
                   url   :'https://testservices.eventzet.com/api/EventSearchWrapper/GetEventSearchWrapper',
                   body  :requestBody,
                   headers: {
                     Authorization: `Bearer ${authToken}`
                }
            }).then((response)=>{
   
                expect(response.status).to.equal(200);
                expect(response.duration).to.below(3000);
                expect(response.statusText).to.equal('OK');
    
          });
        }); 
       
        
    });

    
