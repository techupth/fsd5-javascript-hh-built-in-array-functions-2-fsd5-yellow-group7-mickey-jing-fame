// Solution 1

// function isPalindrome(string) {
//   // Start coding here
//   let backWard = "";
//   for (let letter of string) {
//     backWard = letter + backWard;
//     console.log(backWard);
//   }
//   if (backWard === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //Example case
// console.log(isPalindrome("reviver")); // true
// console.log(isPalindrome("noon")); // true
// console.log(isPalindrome("บวบ")); // true
// console.log(isPalindrome("deliver")); // false

// Solution 2

function isPalindrome(string) {
  // Start coding here
  return string === string.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
