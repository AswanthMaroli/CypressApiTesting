describe('Api Testing in the eventzet organization settings component', () => {

    before(() => {

        return cy.getToken();
    });

    const userID = 2;

    it('GetOrganizationDetails', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
            cy.request({
                method: 'GET',
                url: `https://testservices.eventzet.com/api/Organization/GetOrganizationDetails?UserID=${userID}`,
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

    it('GetOrganizationImages', () => {

        cy.wrap(Cypress.env('authToken')).then((token) => {
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
