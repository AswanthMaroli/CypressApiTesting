describe('Api Testing in the eventzet event list component', () => {
  
    let authToken;
    const userID=2;

    before(() => {
      
        cy.getToken().then((token) => {
            authToken = token; // Store retrieved token for authorization
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

    

    it('GetDashboardEventList', () => {
     
     
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/DashboardEventList/GetDashboardEventList?UserID=${userID}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });
    

    it('GetSharedEventList', () => {
      
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/DashboardEventList/GetSharedEventList?UserID=${userID}`,
                headers: {
                 Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.duration).to.be.below(3000);
                expect(response.statusText).to.equal('OK');
            });
        });


    it('GetPermissionTypeDetails', () => {
        
            cy.request({
                method: 'GET',
                url: 'https://testservices.eventzet.com/api/DashboardEventList/GetPermissionTypeDetails?PermissionID=20&EventID=40',
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
