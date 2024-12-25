// Excercise 2


let str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

let val = str.split(",");

let sum = 0;

val.map((num) => {
  sum = parseFloat(num) + sum;
});

console.log(sum);
