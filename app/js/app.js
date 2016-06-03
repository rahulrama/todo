var toDoApp = angular.module('toDoApp', []);

toDoApp.filter('custom1', function() {
  return function(todos,status) {
    if (status === 'Active'){
  		display = todos.filter(function(x){ return x.completed === false})
  	}
  	if (status === 'Complete'){
  		display = todos.filter(function(x){ return x.completed === true})
  	}
  	if (status === 'All'){
  		display = todos
  	}
    return display
  }
})
