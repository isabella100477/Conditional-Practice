/* Instructions:
Control flow

In this file is a function called test with parameter named grade
grade will represent the value, a number, that will be passed to the function when called

Within the given function, create an if else if chain.

This chain will print the results of the test based off of the value given.



If the grade is 100, Green should print to the console.

If the grade is between 99 and 70, Yellow should print to the console.

If the grade is between 69 and 1, Red should print to the console.

If the grade is 0,No Attempt should print to the console.
*/

function test(grade){
//CODE BELOW HERE
if (grade == 100) {
console.log('Green')
}
else if (grade >= 70 && grade <= 90) {
console.log('Yellow')
}
else if (grade >= 1 && grade <= 69) {
console.log('Red')
}
else if (grade == 0) {
console.log('No Attempt')
}
//CODE ABOVE HERE
}