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

//6 - 
