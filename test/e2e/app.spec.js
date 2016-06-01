describe("app", function() {

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Ollie's Amazing To Do App");
  });

  it("should allow you to add a new todo", function(){
  	browser.get('/');
  	$('#addToDoText').sendKeys('ToDo');
  	$('#addToDoButton').click();
  	expect($$('.item').count()).toEqual(1);
  	expect($$('.item').last().getText()).toEqual('ToDo : not completed');
  });

  it("should allow you to remove the last item in the todo list", function(){
  	browser.get('/');
  	$('#addToDoText').sendKeys('ToDo');
  	$('#addToDoButton').click();
  	$('#removeToDoButton').click();
  	expect($$('.item').count()).toEqual(0);
  });

  it("should allow you to set a task as complete", function(){
  	browser.get('/');
  	$('#addToDoText').sendKeys('New Task');
  	$('#addToDoButton').click();
  	expect($$('.item').last().getText()).toEqual('New Task : not completed');
  	$('#setCompleteButton').click();
  	expect($$('.item').last().getText()).toEqual('New Task : completed');
  });

});
