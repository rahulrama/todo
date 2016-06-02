describe("app", function() {

	var mock = require('protractor-http-mock');
	var data = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

	beforeEach(function(){
		mock([{
			request: {
				path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
				method: 'GET'
			},
			response: {
				data: data
			}
		}]);
	});

	afterEach(function(){
		mock.teardown();
	});

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Ollie's Amazing To Do App");
  });

  it("should allow you to add a new todo", function(){
  	browser.get('/');
  	$('#addToDoText').sendKeys('ToDo');
  	$('#addToDoButton').click();
  	expect($$('.item').count()).toEqual(3);
  	expect($$('.item').last().getText()).toEqual('ToDo : not completed');
  });

  it("should allow you to remove the last item in the todo list", function(){
  	browser.get('/');
  	$('#removeToDoButton').click();
  	expect($$('.item').count()).toEqual(1);
  });

  it("should allow you to set a task as complete", function(){
  	browser.get('/');
  	$('#addToDoText').sendKeys('New Task');
  	$('#addToDoButton').click();
  	expect($$('.item').last().getText()).toEqual('New Task : not completed');
  	$$('.setCompleteButton').last().click();
  	expect($$('.item').last().getText()).toEqual('New Task : completed');
  });

  it("should display only active todos when active box is checked", function(){
  	browser.get('/');
  	$('.filterActive').click();
  	expect(toString($$('.item'))).not.toContain('ToDo1 : completed');
  });

  it("should display only complete todos when complete box is checked", function(){
  	browser.get('/');
  	$('.filterComplete').click();
  	expect(toString($$('.item'))).not.toContain('ToDo2 : not completed');
  });

  it("should display all todos when all box is checked", function(){
  	browser.get('/');
  	$('.filterAll').click();
  	expect(toString($$('.item'))).toContain('ToDo2 : not completed');
  	expect(toString($$('.item'))).toContain('ToDo1 : completed');
  });

	it("should clear the completed tasks when the clear button is clicked", function(){
		browser.get('/');
		$('#clearCompletedButton').click();
		expect(toString($$('.item'))).not.toContain('ToDo1 : completed');
		expect($$('.item').count()).toEqual(1);
	})

  var toString = function(array){
  	return array.map(function(x){return x.getText()});
  };

});
