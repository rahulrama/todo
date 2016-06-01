toDoApp.factory('ToDoFactory', function(){
	
	var ToDo = function(taskText,completeStatus = false){
		this.text = taskText;
		this.completed = completeStatus;
	};

	ToDo.prototype.complete = function(){
		this.completed = true;
	};

	return ToDo;

});