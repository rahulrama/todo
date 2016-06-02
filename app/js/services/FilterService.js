toDoApp.service('FilterService', function(){

var self = this;

	self.ammendToDos = function(status,todos){
  	if (status === 'Active'){
  		return todos.filter(function(x){ return x.completed === false});
  	};
  	if (status === 'Complete'){
  		return todos.filter(function(x){ return x.completed === true});
  	};
  	if (status === 'All'){
  		return todos;
  	};
	};

});
