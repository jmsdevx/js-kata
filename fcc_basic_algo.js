//saved examples from free code camp's basic algorithm track

//1 - convert C to F

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

//2 - Reverse String

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");

//3 - Factorialize

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  let numtotal = num;
  let numArr = [];
  for (let i = 1; i <= numtotal; i++) {
    numArr.push(num);
    --num;
  }
  return numArr.reduce((a, b) => a * b);
}

factorialize(5);

//4 - Find the longest word in a string and return its length

function findLongestWordLength(str) {
  let lengthArr = [];
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    lengthArr.push(strArr[i].length);
  }
  lengthArr.sort(function(a, b) {
    return a - b;
  });

  return lengthArr[lengthArr.length - 1];
}

//5 - Return Largest Numbers In Arrays

function largestNumbers(arr) {
  let newArr = arr.map(e => {
    e.sort(function(a, b) {
      return a - b;
    });
    return e[e.length - 1];
  });
  return newArr;
}

largestNumbers([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

//6 - Check if a string ends with the given target string (no .endsWith())

function confirmEnding(str, target) {
    let targetlength = target.length
    let strlength = str.length
  
    return str.substring(strlength - targetlength) === target ? true : false
  }

confirmEnding("dog", "g")
confirmEnding("maple", "aple")

//7 - Repeat a given str for n times, return empty if n is negative

function repeatStringNumTimes(str, num) {
    let final = ""
    for (let i=0;i<num;i++){
      final += str
    }
    return final
  }

//8 - Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
    if(str.length <= num){
    return str
  } 
  let substring = str.substring(num)
  return str.replace(substring, "...")
}

//9 - Create a function that parses an array of nums (first arg) and returns the first element that passes
// a condition (second arg), if no element passes, return undefined

function findElement(arr, func) {
    let newArr = arr.find(e=>{
      return func(e)
    })
    return newArr
  }

//10 - Check if a value is a boolean primitive, return true or false

function booWho(bool) {
    return typeof bool === "boolean" ? true : false
  }

booWho(true) //true
booWho(false) //true
booWho("anything else") //false

