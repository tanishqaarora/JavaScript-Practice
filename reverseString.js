// Program to reverse a string

// Any String
let str = 'AaBbCc';

let reversedStr = '';

for(let i = str.length-1; i > 0; i --) {

    reversedStr += str[i];
}

console.log(reversedStr);