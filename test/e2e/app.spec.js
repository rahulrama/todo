describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Ollie's Amazing To Do App");
  });

  it("should say 'Hello Everyone' on the page", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello Everyone");
  });

});
