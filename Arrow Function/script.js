// Arrow Function
// 1.Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let Odd = numbers.filter(a => a % 2);
console.log(Odd);

//2.Convert all the strings to title caps in a string array
let string = ["jeFFreY", "JoHn", "joSEPH"]
let title = string.map(a => a.toLowerCase())
let titlecaps = title.map(a => a[0].toUpperCase() + a.slice(1));
console.log(titlecaps)

//3.Sum of all numbers in an array
let arr = [10, 20, 30, 40]
let sum = arr.reduce((a, b) => {
    return a + b
})
console.log(sum);

//4.Return all the prime numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("" +
    numbers.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

//5.Return all the palindromes in an array
var array = ['rotor', 'hello', '220022', 'level']
var palindrome = array.filter(a => (a.split('').reverse().join('')) == a);


console.log(palindrome)