describe("Тесты библиотека", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

  it("Добавление книги", () => {
    cy.addBook("Java руководство для начинающих 9-е издание", "Язык программирования", "Герберт Шилдт");
    cy.contains("Герберт Шилдт").should("be.visible").true;
  });

  it("Добавление книги в избранное", () => {
    cy.addBookFavorite("Java руководство для начинающих 9-е издание", "Язык программирования", "Герберт Шилдт");
    cy.contains("Герберт Шилдт").should("be.visible").true;
  });

  it("Удаление книги из избранного", () => {
    cy.addBookFavorite("Java руководство для начинающих 9-е издание", "Язык программирования", "Герберт Шилдт");
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").should("be.visible").true;
  });
});
