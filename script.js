const fizzBuzz = number =>{

    let numbers = [];    
    let result
    for(let i = 1; i <= number ; i++){
        if (i % 3 == 0 && i % 5 == 0){
            result ="fizzbuzz";
        }else if(i % 5 == 0){
            result ="buzz";
        }else if(i % 3 == 0){
            result="fizz";
        }else{
            result = i;
        }
        numbers.push(result);
    }
    console.log(numbers)
} 
const number = parseInt(prompt("Please enter a number", 0));
fizzBuzz(number);