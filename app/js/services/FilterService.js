toDoApp.service('FilterService', function(){

var self = this;

	self.amendToDos = function(status,todos){
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
