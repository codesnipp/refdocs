//Global Variables

// Variables defined in the Global Scope, ie., outside any functions scope.
// In a function, declared without "var" keyword.
// Global variables can't be deleted.

function foo () {
  var a=b=0;      // Here it is evaluated as var a=(b=0), Right to Left evaluation. b becomes a global variable, because
}                 // we are using it without declaring it. These types are called "Implied Globals", which are not variables,
                  // but they are properties attached to the Global Object, so they can be deleted.
                  
                  
// Variable Hoisting

// we can declare multiple "var" statments anywhere in the function, they will act as if they are declared at the top
// of the function. At implementation level, code is handled in 2 ways.
// 1. Variables, Function declarations and format parameters are created in first stage.
// 2. Function expressions & undeclared variables are created.

function () {
 alert(abc);    // Undefined
 var abc = 20;
 alert(abc);    // 20
}

Implemented as,
function() {
  var abc;
  alert(abc);
  abc = 20;
  alert(abc);
}

