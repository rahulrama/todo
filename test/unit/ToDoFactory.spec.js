describe('ToDoFactory',function(){

	beforeEach(module('toDoApp'));

	var toDo;

	beforeEach(inject(function(ToDoFactory){
		toDo = new ToDoFactory("New Task");
	}));

	it("sets complete status to true when calling complete()",function(){
		toDo.complete();
		expect(toDo.completed).toEqual(true);
	});

	it("is not complete by default",function(){
		expect(toDo.completed).toEqual(false);
	});


});