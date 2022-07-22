// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function fizzbuzz(){
    for (let i = 1; i <= 100; i++)
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
fizzbuzz()

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function multiples(){
    sum = 0;
    for(let v = 0; v <= 1000; v++)
    if(v % 3 === 0 && v % 5 === 0){
        sum += v
    }
    console.log(sum);
}
multiples()

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function odd_even(){
    for(let j = 0; j <= 20; j++)
    if(j % 2 === 0){
        console.log( j + " is even");
    }else{
        console.log(j + " is odd");
    }
}
odd_even()

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
function largest(){
    let num = [-2, 4, -5, 6, 0]
    greatest = 0
    for(let x = 0; x < num.length; x++)
    if(num[x] > greatest){
        greatest = num[x]
    }
    console.log(greatest);
}
largest()

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function large(){
    let num1 = 10;
    let num2 = 40;
    if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}
large()

// Write a JavaScript program to find leap years from 2000 to 2022
function leap_year(){
    for(let y = 2000; y <= 2022; y++)
    if(y % 4 === 0){
        console.log(y);
    }
}
leap_year()