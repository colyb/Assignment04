//STEP 1
/*
Write a function called halfNumber() that accepts one argument (a number), 
divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
*/
function halfNumber(num)
{
    return num / 2
}
console.log("Half of 5 is " + String(halfNumber(5)))


//STEP 2
/*
Write a function called squareNumber() that accepts one argument (a number), 
square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/
function squareNumber(num)
{
    return num ** 2
}
console.log("The result of squaring the number 3 is " + String(squareNumber(3)))

//STEP 3
/*
Write a function called percentOf() that accepts two numbers, figure out what percent 
the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
*/
function percentOf(firstNum, secondNum)
{
    return String((firstNum / secondNum) * 100) + "%"
}
console.log(`2 is ` + percentOf(2, 4) + ` of 4.`)

//STEP 4
/*
Write a function called findModulus() that accepts two numbers. 
Within the function write a statement that returns the modulus of the first and second parameters. 
It should log a string like "2 is the modulus of 4 and 10."
*/
function findModulus(firstNum, secondNum)
{
    return secondNum % firstNum
}
console.log(findModulus(4, 10) + ` is the modulus of 4 and 10.`)