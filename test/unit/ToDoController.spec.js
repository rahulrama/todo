describe('ToDoController', function(){
  beforeEach(module('toDoApp'));

  var ctrl;
  var factory;

  beforeEach(inject(function($controller,ToDoFactory){
    ctrl = $controller('ToDoController');
    factory = ToDoFactory;
  }));

  it('adds a ToDo object to the todos array with the addToDo() function', function(){
  	ctrl.addToDo('ToDo');
  	expect(ctrl.todos[ctrl.todos.length-1].text).toEqual('ToDo');
  });

  it('sets the task of the ToDo object as not completed when the todo is added', function(){
  	ctrl.addToDo('ToDo');
  	expect(ctrl.todos[ctrl.todos.length-1].completed).toEqual(false);
  });

  it('removes the last task in the array with the removeToDo() function', function(){
  	ctrl.addToDo('ToDo');
  	ctrl.removeToDo();
  	expect(ctrl.todos.length).toEqual(0);
  });

});
