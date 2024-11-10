const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

const checkTrue = todos => todos.completed;

function getCompletedTodo(todos) {
  let result = [];
  result = todos.filter(checkTrue);
  return result;
}

let completedTodo = getCompletedTodo(todos);
console.log(completedTodo);

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
