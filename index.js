// 1. Задача на кількість пробілів
const str = prompt('Enter a sentence');
const newStr = str.split(" ").length - 1;
console.log(str);
console.log("You made " + newStr + " backspaces");

// 2.
// const str = 'student@ukr.net'
// console.log(str.startsWith('@'));
// console.log(str.endsWith('@'));
// console.log(str.includes('@'));


const str = prompt('Enter your email');
if (str.startsWith('@')) {
    console.log('Wrong email');
} else if (str.endsWith('@')) {
    console.log('Wrong email');
} else if(str.includes('@')) {
    console.log('Look like OK. Your email include @')
}

// 3. Задача
const str = prompt('Enter your text','Text html javascript html css');
console.log(str);
console.log(str.split('html').length -1);

// 4. Задача на обрізку https
const str = prompt('Enter an internet page with full address', 'http://www.google.com');
if(str.includes('https://')) {
    console.log(str.replace("https://", ""))
}
else if(str.includes('http://')) {
    console.log(str.replace("http://", ""))
}
