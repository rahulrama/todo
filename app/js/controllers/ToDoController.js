toDoApp.controller('ToDoController', ['ToDoFactory', 'ToDoService', 'FilterService', function(ToDoFactory,ToDoService,FilterService){

  var self = this;

  ToDoService.getAll().then(function(response){
  	self.todos = response;
  });

  self.filter = 'All';

  self.addToDo = function(newTask){
  	self.todos.push(new ToDoFactory(newTask))
  };

  self.removeToDo = function(){
  	self.todos.pop();
  };

  self.setFilterStatus = function(status){
  	self.filter = status;
  };

  self.filterToDos = function(){
  	return FilterService.ammendToDos(self.filter,self.todos);
  };

  self.clearCompleted = function() {
    self.todos = self.todos.filter(function(x){ return x.completed === false })
  }
}])
