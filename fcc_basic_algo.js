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
  let targetlength = target.length;
  let strlength = str.length;

  return str.substring(strlength - targetlength) === target ? true : false;
}

confirmEnding("dog", "g");
confirmEnding("maple", "aple");

//7 - Repeat a given str for n times, return empty if n is negative

function repeatStringNumTimes(str, num) {
  let final = "";
  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}

//8 - Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  let substring = str.substring(num);
  return str.replace(substring, "...");
}

//9 - Create a function that parses an array of nums (first arg) and returns the first element that passes
// a condition (second arg), if no element passes, return undefined

function findElement(arr, func) {
  let newArr = arr.find(e => {
    return func(e);
  });
  return newArr;
}

//10 - Check if a value is a boolean primitive, return true or false

function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}

booWho(true); //true
booWho(false); //true
booWho("anything else"); //false

//11 - Camel Case a sentence

function titleCase(str) {
  let lower = str.toLowerCase().split(" ");
  let upper = lower.map((e, i, a) => {
    let first = e[0].toUpperCase();
    return first + e.substring(1);
  });
  return upper.join(" ");
}

//12 - Slice an array (arr1) into n index of another array (arr2)

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//13 - Falsy Bouncer - Remove all falsy values from array

function bouncer(arr) {
  let newArr = arr.filter(e => Boolean(e));
  return newArr;
}

//14 - Find lowest index to splice a num into an array of nums, after the array has been sorted
//array is provided raw, unsorted
//splice must keep sorting in tact
//return the index

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if (arr === []) {
    return 0;
  }
  let sorted = arr.sort(function(a, b) {
    return a - b;
  });
  let found = sorted.find(e => e >= num);
  let index = arr.indexOf(found);
  if (index === -1) {
    return arr.length;
  }
  return index;
}

//15 - Return true if the string in the first element of the array
//contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  let lower = arr.map(e => e.toLowerCase());
  let arr1 = lower[0].split("");
  let arr2 = lower[1].split("");
  let counter = 0;

  for (let i = 0; i < arr2.length; i++) {
    arr1.includes(arr2[i]) ? ++counter : null;
  }
  if (counter === arr2.length) {
    return true;
  } else {
    return false;
  }
}

//16 - Chunky Munky
//Write a function that splits an array (first argument) into groups
//the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  if (arr.length % size === 0) {
    for (let i = arr.length - 1; i > 0; i--) {
      let splice = arr.splice(arr.length - size);
      newArr.push(splice);
    }
    console.log(newArr);

    let finalArr = newArr.filter(e => e[0] !== undefined);
    return finalArr.reverse();
  } else {
    let remainder = arr.length % size;
    console.log(remainder);
    for (let i = 1; i > 0; i--) {
      let splice = arr.splice(arr.length - remainder);
      newArr.push(splice);
    }
    for (let i = arr.length - 1; i > 0; i--) {
      let splice = arr.splice(arr.length - size);
      newArr.push(splice);
    }
    let finalArr = newArr.filter(e => e[0] !== undefined);
    return finalArr.reverse();
  }
}

//SWEET JESUS THIS IS TERRIBLE BUT IT WORKS FOR ALL TEST CASES!

chunkArrayInGroups(["a", "b", "c", "d"], 2); //[["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //[[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]
