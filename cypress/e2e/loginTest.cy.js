describe("Тесты на авторизацию сайта библиотека", () => {
  
  beforeEach(() => {
    cy.visit("/");
  })
  
  it("Успешная авторизация в библиотеке", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible").true;
    //cy.contains("Добро пожаловать").should("have.length", 1)
  })

  it("Ввод пустого поля Email", () => {
    cy.login(null, "123");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    })
  })

  it("Ввод пустого Password", () => {
    cy.login("bropet@mail.ru", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });
})
