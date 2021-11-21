//1.Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = function () {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0)
      console.log(arr[i]);
};
odd();

// 2.Convert all the strings to title caps in a string array
let str = ["Apple", "Orange", "Mango", "Banana"];
let convert = function () {
  for (let i = 0; i < str.length; i++)
};
convert();

//3.Sum of all numbers in an array
let arr = [10, 20, 30, 40]
let sum = function () {
  let add = 0
  for (i = 0; i < arr.length; i++) {
    add = add + arr[i]
  }
  console.log(add)
}
sum();

//4.Return all the prime numbers in an array
var a = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
var prime = (function () {
  var b = []
  for (i = 0; i < a.length; i++) {
    for (j = 2; j <= a[i]; j++) {
      if (a[i] % j === 0) {
        break;
      }

    }
    if (a[i] === j) {
      b.push(a[i])
    }
  }
  console.log(b)
})()

//5.Return all the palindromes in an array
var array = ['rotor', 'hello', '220022', 'level']
var b = []
var palindrome = (function () {
  for (var i = 0; i < array.length; i++) {
    var count = 0
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] !== array[i][(array[i].length - 1) - j]) {
        break;
      }
      count++
    }
    if (count === array[i].length) {
      b.push(array[i])
    }
  }
  console.log(b)
})();

//6.Return median of two sorted arrays of same size
var arrA = [6, 2, 72, 33, 95, 76, 39]
var arrB = [9, 7, 55, 43, 20, 66, 59]

var median = function () {
  var arrC = arrA.concat(arrB);
  if (arrC.length % 2 === 0) {
    console.log((arrC[arrC.length / 2] + arrC[arrC.length / 2 - 1]) / 2)
  } else {
    console.log(arrC[Math.floor(arrC.length / 2)])
  }
}
median()

//7.Remove duplicates from an array
let arr = ["Apple", "Orange", "Apple", 1, 2, 3, 4, 2, 3, "Banana"];

let duplicate = function duplicate() {
  console.log(...new Set(arr))
}
duplicate();


// 8.Rotate an array by k times
var a = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
var k = 1

var rotate = (function () {

    for (j = 1; j <= k; j++) {
      temp = a[0]
      for (i = 0; i < a.length - 1; i++) {
        a[i] = a[i + 1]

      }
      a[i] = temp
    }
    console.log(a)
  })
  ()