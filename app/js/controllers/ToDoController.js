toDoApp.controller('ToDoController', ['ToDoFactory', 'ToDoService', function(ToDoFactory,ToDoService){
  
  var self = this;

  ToDoService.getAll().then(function(response){
  	self.todos = response;
  })

  self.addToDo = function(newTask){
  	self.todos.push(new ToDoFactory(newTask))
  };

  self.removeToDo = function(){
  	self.todos.pop();
  };

}])
