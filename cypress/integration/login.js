describe("When login renders", () => {
  it("User can login succesfully", () => {
    cy.visit("/");
    cy.findByLabelText(/name/).type("Ali");
    cy.findByText(/Let's Play/).click();
    cy.url().should("eq", `http://localhost:8080/gameboard`);
  });
});
