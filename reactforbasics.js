G. Mani
reactjs full tutorial
https://www.youtube.com/watch?v=cxaW66ycuyA&list=PLfxCjC8FUaZSxk0Rha1XsTaOqpDGlF8gr

Outside a function let and var?
When you declare a variable using var and let outside of a function then var will create a property in the global object 
whereas let don’t create a property in global object.

//output
var abc = 10;
let xyz = 20;
 
console.log(abc); // 10
console.log(xyz); // 20
 
console.log(this.abc); // 10
console.log(this.xyz); // undefined

///////////////////////////////////////////

2. Inside a function ?



//////////////////////////////////////////
3. Inside a block
If you declared the variable within the block then only let variable can’t be accessed outside that block.

{
  var abc = 10;
  let xyz = 20;
  
  console.log(abc); // 10
  console.log(xyz); // 20
}

console.log(abc); // 10
console.log(xyz); // ReferenceError: xyz is not defined
//Output
{
  var abc = 10;
  let xyz = 20;
  
  console.log(abc); // 10
  console.log(xyz); // 20
}
 
console.log(abc); // 10 - var-correct
console.log(xyz); // ReferenceError: xyz is not defined let-wrong

///////////////////////////////////////////////////////

4. Loop
When you define the variables in loop and try to access it then let variable will throw an error.

for (var a = 0; a < 10; a++) {
  var b = a * 2;
}
console.log(a); // 3 var- correct
console.log(b); // 4 var- correct

for (let x = 0; x < 10; x++) {
  let y = x * 2;
}
console.log(x); // ReferenceError: x is not defined- wrong
console.log(y); // ReferenceError: y is not defined - wrong

for (var a = 0; a < 10; a++) {
  var b = a * 2;
}
console.log(a); // 3
console.log(b); // 4
 
for (let x = 0; x < 10; x++) {
  let y = x * 2;
}
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined


////////////////////////////////
5. Loop with closure
Let’s take an example with setTimeout and try to print log of the variables.
for (var a = 0; a < 5; a++) {
    setTimeout(() => console.log(a), 0);
  }
  // Output: 5 5 5 5 5 -wrong
   
   
  for (let x = 0; x < 5; x++) {
    setTimeout(() => console.log(x), 0);
  }
  // Output: 0 1 2 3 4-correct

  Based on the logs we can say that it will be safe to use let for loops with closure.
                                          njjj


  ////////////////////////
  6. Redeclaration
While you work with the strict mode then re-declaring the variable with let will prompt the error.

'use strict';
var abc = 10;
var abc = 20; // Working fine. 'abc' is replaced-correct 

'use strict';
let xyz = 10;
let xyz = 20; // SyntaxError: Identifier 'xyz' has already been declared-wrong

7.const
If you are declaring the variable using const then you can’t be re-assigned it
const a = 10;
a = 20; // TypeError: Assignment to constant variable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
































































































































































