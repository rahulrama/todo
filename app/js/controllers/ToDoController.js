toDoApp.controller('ToDoController', ['ToDoFactory', 'ToDoService', 'FilterService', function(ToDoFactory,ToDoService,FilterService){

  var self = this;

  ToDoService.getAll().then(function(response){
  	self.todos = response;
    self.total = self.todos.length;
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
  	var temp = FilterService.amendToDos(self.filter,self.todos);
    self.total = temp.length;
    return temp;
    };

  self.clearCompleted = function() {
    self.todos = self.todos.filter(function(x){ return x.completed === false }) 
  }
}])
