toDoApp.controller('ToDoController', [function(){
  
  var self = this;

  self.todos = [{text: "ToDo1", completed: true}, { text: "ToDo2", completed: false}];

  self.addToDo = function(newTask){
  	self.todos.push({text: newTask, completed: false})
  };

  self.removeToDo = function(){
  	self.todos.pop();
  };

}])
