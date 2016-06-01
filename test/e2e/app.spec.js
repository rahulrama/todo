describe("app", function() {

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Ollie's Amazing To Do App");
  });

  it("should have two todos on the page", function(){
  	browser.get('/');
  	expect($$('.item').count()).toEqual(2);
  });

  it("should have a first todo complete", function(){
  	browser.get('/');
  	expect($$('.item').first().getText()).toEqual('ToDo1 : completed');
  });

  it("should have a second todo not complete", function(){
  	browser.get('/');
  	expect($$('.item').get(1).getText()).toEqual('ToDo2 : not completed');
  });

  it("should allow you to add a new todo", function(){
  	browser.get('/');
  	$('#addToDoText').sendKeys('ToDo3');
  	$('#addToDoButton').click();
  	expect($$('.item').count()).toEqual(3);
  	expect($$('.item').last().getText()).toEqual('ToDo3 : not completed');
  });

  it("should allow you to remove the last item in the todo list", function(){
  	browser.get('/');
  	$('#removeToDoButton').click();
  	expect($$('.item').count()).toEqual(1);
  });

});
