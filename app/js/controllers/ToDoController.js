toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory){
  
  var self = this;

  self.todos = [];

  self.addToDo = function(newTask){
  	self.todos.push(new ToDoFactory(newTask))
  };

  self.removeToDo = function(){
  	self.todos.pop();
  };

}])
