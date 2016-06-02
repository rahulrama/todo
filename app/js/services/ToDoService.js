toDoApp.service('ToDoService', ['ToDoFactory', '$http', function(ToDoFactory,$http){

	var self = this;

	self.getAll = function(){

		return $http.get('http://quiet-beach-24792.herokuapp.com/todos.json').then(function(response){
			return response.data.map(function(todo){
				return new ToDoFactory(todo.text, todo.completed);
			});
		});

	};

}]);