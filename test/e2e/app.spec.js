describe("Todos app", function() {
  it("has a todo", function() {
    browser.get('/')
    var todo = $('#todo')
    expect(todo.getText()).toEqual('ToDo1')
  })
})
//
// describe("app", function() {
//   it("should say 'Hello World' on the page", function() {
//     browser.get('/')
//     expect($$("p").first().getText()).toEqual("Hello world")
//   })
// })
