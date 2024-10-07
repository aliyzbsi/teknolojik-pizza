describe("Header Component Test", () => {
  beforeEach(() => {
    // Uygulama URL'sine git
    cy.visit("http://localhost:5173");
  });

  it("Butonun çalıştığını test et", () => {
    // Butona tıklayıp yönlendirme olup olmadığını kontrol et
    cy.get('button[data-cy="aciktimButon"]').contains("ACIKTIM").click();
    cy.url().should("include", "/order");
  });
});
