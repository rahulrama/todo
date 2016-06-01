describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Ollie's Amazing To Do App");
  });

  it("should have a to do item called 'ToDo1'", function() {
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toEqual("ToDo1")
  })

});
