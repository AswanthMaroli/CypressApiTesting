describe('Api Testing in the eventzet organization settings component', () => {

    const userID = 2;
    let authToken;
    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
        });
    });

    it('GetOrganizationDetails', () => {

   
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Organization/GetOrganizationDetails?UserID=${userID}`,
                headers: {
                   Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
          
        });
    });

    it('GetOrganizationImages', () => {

       
            cy.request({
                method: 'POST',
                url: 'https://testservices.eventzet.com/api/Files/GetOrganizationImages',
                body: [
                    {
                        OrgID: 4,
                        OrgName: "e",
                        OrgWebsite:"",
                        OrgDesc: "",
                        FBID: "",
                        Twitter: "",
                        OrgImageUrl: null,
                        ModifiedUser: 2
                    }
                ],
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
