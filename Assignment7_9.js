let str = "hello world";

// convert the string to uppercase
let upperCaseStr = str.toUpperCase();
console.log("Uppercase string: ", upperCaseStr);

// convert only the first character to uppercase
let firstCharUpperCaseStr = str.charAt(0).toUpperCase() + str.slice(1);
console.log("First character uppercase string: ", firstCharUpperCaseStr);

// convert the string to lowercase
let lowerCaseStr = str.toLowerCase();
console.log("Lowercase string: ", lowerCaseStr);

// break the string into two halves and swap them
let halfLength = Math.floor(str.length / 2);
let swappedStr = str.slice(halfLength) + str.slice(0, halfLength);
console.log("Swapped string: ", swappedStr);

// count the repeating characters
let charCount = {};
for (let char of str) {
  charCount[char] = (charCount[char] || 0) + 1;
}
console.log("Character count: ", charCount);

// reverse the string
let reversedStr = str.split("").reverse().join("");
console.log("Reversed string: ", reversedStr);
