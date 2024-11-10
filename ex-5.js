const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

const getTotal = (total, currentValue) => total+currentValue.score;

function getAverageStudentScore(students) {
  let result;
  let total = students.reduce(getTotal,0);
  result = total/students.length;
  return result;
}

let avg = getAverageStudentScore(students); // Output: 87.5
console.log(avg);
