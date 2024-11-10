const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

const onlyTopics = (todos)=> todos.topic;


function getTodoTopics(todos) {
  let result =[];
  result = todos.map(onlyTopics);

  return result;
}

let newTodos = getTodoTopics(todos);

console.log(newTodos);

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
