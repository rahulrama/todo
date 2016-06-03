describe('FilterService', function(){

  beforeEach(module('toDoApp'));

	var data = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

	beforeEach(inject(function(FilterService){
		filter = FilterService;
	}));

	it('should return only completed tasks when status is set to complete',function(){
		expect(filter.amendToDos('Complete',data)).toEqual([{text: "ToDo1", completed: true}]);
	});

	it('should return only incomplete tasks when status is set to active',function(){
		expect(filter.amendToDos('Active',data)).toEqual([{text: "ToDo2", completed: false}]);
	});

	it('should return all tasks when status is set to all',function(){
		expect(filter.amendToDos('All',data)).toEqual(data);
	});

});
