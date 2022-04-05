//  1) basic math functions
//        'add()' is a valid function:
let number = 15;

function add() {
  number += 5;
}
add();

//   2) basic math functions
//        'subtract()' is a valid function:
    
function subtract() {
  number -= 3;
}
subtract();
//   3) basic math functions
//        'multiply()' is a valid function:
  function multiply() {
    number *= 3;
  }
  multiply();

//   4) basic math functions
//        'divide()' is a valid function:
   
function divide() {
  number /= 3;
}
divide();
//   5) basic math functions
//        add(a, b) adds two numbers and returns the result:
function add (m, n){
    return m+n;
}
console.log(add(10,4));

//   6) basic math functions
//        subtract(a, b) subtracts b from a and returns the result:
   function subtract(m, n) {
     return m - n;
   }
   console.log(subtract(10, 4)); 

//   7) basic math functions
//        multiply(a, b) multiplies two numbers and returns the result:
   function multiply(m, n) {
     return m + n;
   }
   console.log(multiply(643584, 1));

//   8) basic math functions
//        divide(a, b) divides a by b and returns the result:
function divide(m, n) {
       return m / n;
     }
     console.log(divide(10, 4));

//   9) basic math functions
//        increment(n) increments n and returns the result:
    

function increment(n) {
      return n +=1;
    }

//   10) basic math functions
//        decrement(n) decrements n and returns the result:
function decrement(n) {
  return n -=1;
} 

//   11) makeInt(n)
//        parses n as an integer and returns the parsed integer:
function makeInt(n) {
  return parseInt(n, 10);
} 

//   12) makeInt(n)
//        assumes base 10:
function makeInt(n) {
      return parseInt(n, 10);
    } 

//   13) makeInt(n)
//        returns NaN as appropriate:
    function makeInt(upuzi) {
      return parseInt("upuzi", 10);
    } 

//   14) preserveDecimal(n)
//        preserves n's decimals (it parses n as a floating point number) and returns the parsed number:
     function preserveDecimal(n) {
       return parseFLoat(n);
     } 

//   15) preserveDecimal(n)
//        returns NaN as appropriate:
