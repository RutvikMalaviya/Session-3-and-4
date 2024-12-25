 // Excercise 1

function sumOfNumbersInString(str) {
     
    const numbers = str.match(/\d+/g);
  
       
    const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
  
    return sum;
  }
  
 
  let inputString = "foo844ar8cat2tc2";
  console.log(sumOfNumbersInString(inputString)); // Output
  