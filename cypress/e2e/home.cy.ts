describe("Home page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.findByText("Get started by editing").should("exist");
  });
});
