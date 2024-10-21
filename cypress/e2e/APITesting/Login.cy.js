describe('Api Testing in the Login component', ()=>{


    it('LoginAuthenticate',()=>{


        const requestBody={

                              Email:"aswanthm385@gmail.com",
                              Password:"112233"
                           }

        cy.request(

            {
                   method: 'POST',
                   url   :'https://testservices.eventzet.com/api/Login/Authenticate',
                   body  :requestBody

            }).then((response)=>{
   
                expect(response.status).to.equal(200);
                expect(response.duration).to.below(3000);
                expect(response.statusText).to.equal('OK');
    
        })
        
       
        
    });

    

})