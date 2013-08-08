// JavaScript Scope

var foo = function () {
    var a = 3,
        b = 5;
    console.log("from foo " + a + ", " + b);    // 3, 5
    var bar = function () {
        var b = 7,
            c = 11;     // note that b is declared as a local variable to bar function and assigned a value.
        a += b + c;     // variable a is accessible from foo, and we are changing the value of a here.
        console.log("from bar " + a + ", " + b);        // 21, 7
    };
    console.log("from before bar" + a + ", " + b);      // 3, 5
    bar();

    console.log("from outside bar" + a + ", " + b); //21, 5 . Since var b = 7 is in the function scope of bar,
    // it is not accessible outside bar, so we get the value of b = 5 from function foo. If b was not declared as a local variable
    // in bar, it would have resulted in 21, 7
};
foo();

// http://madebyknight.com/javascript-scope/

function () {
    if (true) {
        var a = 5;
    }
    alert(a);                   // 5
}

// Javascript doesn't change scope when entering if statements, loops, but will change the scope when entering a function.
// If you enter that if statement,new variable "a" will be allocated at the scope of that function.
// Anything else in that function, even if it's not in the if statement, has access to the variable a. but nothing outside of that function has access to "a".
// This is called ""Function Scope". Javascript has "Function Scope," and not "Block Scope".

var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        alert(a);            // First alerts 8
    }
    again();
    alert(a);               // Second alerts 7
}
test();​
alert(a);                   // Third alerts 6

// The first, found in again(), will alert the value 8. The next, found in test(), will alert 7.
// The third, found at the end, will alert 6. Each time, the Javascript interpreter searches for the most local variable
// it can find, and uses that one. So, when executing again(), despite there being an a that has a value of 7,
// and an a that has a value of 6, the interpreter never finds them, because the one directly within again() is most local.

// JavaScript Closure

// http://madebyknight.com/javascript-scope/
// http://javascriptissexy.com/understand-javascript-closures-with-ease/
// http://www.javascriptkit.com/javatutors/closures.shtml

// Closure is a inner function, which has access to its outer function's variables or scope. Closure scope chain consists
// of its own variables, outer function's variables and global variables.

function studentId (firstName, lastName) {
    var gender = "Male";
    
   function subject (theSubject) { 
        return lastName + " " + firstName + " " + gender + " " + theSubject;
        // this inner function has access to the outer function's variables, including the parameters.
    }
    return subject;
}

var stud = studentId ("John", "Doe"); // the outer function studentId has returned.

stud("English"); // The closure "subject" is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameters

// Closures store references to outer function's parameters, but not the actual values. Because closures have access to the updated values of the outer function’s variables
// they can also lead to bugs when the outer function’s variable changes with a for loop. 


function getFunc() {        // getFunc() returns a reference to another, anonymous function.
    var a = 7;
    return function (b) {
        alert(a + b);
    }
}
var f = getFunc();
f(5);                       // returns 12

// Once getFunc() returns, you might think that all of its local variables would be deallocated,
// the anonymous function, which alerts to the screen, still has access to the variable a.  
// Later on, we call that function, and it still has access to all of the variables it had access to at the time of creation.
// All of these variables that the function has access to at its creation create a closure, which sticks around 
// for as long as the function pointer itself does. Later on, we call that function, and it still has access 
// to all of the variables it had access to at the time of creation. All of these variables that the function has access to 
// at its creation create a closure, which sticks around for as long as the function pointer itself does. 
// Because of this, when we call f(5), the function is still able to see that a has a value of 7, and it therefore alerts 12.



