const jsonData = require('./solar.json');
// Single Line Comment

/* 
Multi
Line
Comment
*/

// implementing statements, variables, let and its uses

var firstNum = 10;  // Number
var secondNum = 5;
var stringVar = 'Hello';    // String
let x = 123;
x.toString();
let y = 9.656;
y.toFixed(0);
y.toFixed(2);
y.toFixed(4);
y.toFixed(6);

var booleanVar = firstNum == secondNum;     // boolean (true or false)

// String operations.
let string1 = 'Krutik';
let string2 = 'Ray';
// let concatString = string1 + " " + string2;
let concatString = string1.concat(" ", string2); 
let stringlen = concatString.length
let stringSlice = concatString.slice(0,6);
let subString = concatString.substr(7,3);
let replaceString = concatString.replace("Ray", "Raythatha");
let trimsrc = "     Rrutik      ";
let trimmed = trimsrc.trim();
let splitStr = concatString.split(' ');
let searchString = 'Hi Hello Hi'
let includesBoolean = searchString.includes('Hello');
let startsWith = searchString.startsWith('Hi');
let endsWith = searchString.endsWith('Hi');

console.log('String: ', concatString);
console.log('Length of string using length', stringlen);
console.log('Slice of string: ', stringSlice);
console.log('Substring of string: ', stringSlice);
console.log('Trimmed string: ', trimmed);
console.log('replacing a character at index 0', trimmed.replace(charAt(0), 'K'));
console.log('Spliited string using split function: ', splitStr);
console.log('Index of a search element: first index: ', searchString.indexOf('Hi'), '\n last index: ', searchString.lastIndexOf('Hi'));
console.log('Searching using search method: ', searchString.search('Hello'));

let stringNum = "55" + 5;
let numString = 5 + 5 + "5"
console.log("Combining string and numbers and vice versa:\n string + num: ", stringNum, "\n num + string", numString);

// String templates and literals

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;


let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

// Constants.. Arrays, Objects.

const PI = 3.14;
const arrNum = [1,2,3,4,5,6]
arrNum.sort()
var randomArr = arrNum.sort( function(a,b) { return 0.5 - Math.random();});
console.log('Randomly sorted array:')
for(let i=0; i<randomArr.length;i++) 
    console.log(randomArr[i]);
const objCar = {
    model : 'swift',
    price : 200000,
    year : 2015,
    fullDesc : function() {
        return this.model + ", " + this.price, ", " + this.year;    // Using anonymous function.
    }
};  // Object

//Calling object elements

// objCar.model OR objCar['model]
console.log(fullDesc());

// typeof

console.log("Typeof function",typeof(firstNum), "\n", typeof(stringVar));
// console.log("InstanceOf function",)

// const operations

PI = 3.20; // Error, as const cannot be modified.
arrNum.push(8);
arrNum[-1] = 7;
arrNum = [0,1,2]; // Error, as we cannot reassign
objCar.model = 'city';
objCar = {
    model: 'amaze',
    price: 500000,
    year: 2018,
};  // Error, as we cannot reassign.

// Scoping of variables.
// Conditions and functions and loops

if (firstNum === 10 && secondNum == 5) {
    let tempNum = 12
    console.log('Sum using let inside block', tempNum + secondNum);
}
console.log('Sum using var: ', firstNum + secondNum);
console.log('Trying to operate let variable outside a block', tempNum + secondNum);
console.log('Trying to operate var variable outside a block', blockvar + secondNum);
{
    var blockvar = 15
    console.log('Sum using var inside block', blockvar + secondNum);
}
console.log('Sum using var outside block', blockvar + secondNum);

function calc(op, num1, num2) {
    switch(op.toLowerCase()) {
        case 'add':
            return num1 + num2;
            break;
        case 'sub':
            return num1 - num2;
            break;
        case 'mul':
            return num1 * num2;
            break;
        case 'div':
            return num1 / num2;
            break;
        case 'exp':
            return num1 ** num2;
            break;
        case 'mod':
            return num1 % num2;
            break;
        default:
            return "Invalid op."
    }
}

var addOut = calc('add', 5,5)
var subOut = calc('sub', 5,5)
var divOut = calc('div', 5,5)
var mulOut = calc('mul', 5,5)
var expOut = calc('exp', 5,5)
var modOut = calc('mod', 5,5)
var invalidOut = calc('kar', 5,5)
console.log('Calculator using function and switch: ', addOut,'\n', subOut,'\n', mulOut,'\n', divOut,'\n',expOut,'\n',modOut,'\n',invalidOut);
    
// Fibonacci Numbers using loop and recursion.
    function fibrec(n) {
        if(n <= 1) {
            return n;
        }
        else {
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }

var fibRec = fibrec(8);
console.log('Fibonacci using recursion: ', fibrec);

    function fibloop(n) {
        let f= new Array(n+2);
        f[0] = 0;
        f[1] = 1;
        if (n<=2) {
            return 1
        }
        for(let i=2; i<n;i++) {
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }
var fibLoop = fibloop(8);
console.log('Fibonacci using loop: ', fibLoop);

// Using for in and for of loops alongwith while loops.

// For in
let prop = "";
for (let x in objCar) {
    prop += objCar[x] + " ";
}
console.log(prop);

// For of
let ele = "";
for (let x in arrNum) {
    ele += arrNum[x] + " "
}
console.log(ele);

// While
let z = 0;
console.log('Printing 1 to 10 skipping even numbers:');
while (true) {
    if (z <= 10) {
        if (z % 2 === 0) {
            continue
        }
        else {
            console.log(z)
        }
        z++;
    }
    break;
}

// Map function

const carsMap = new Map();
carsMap.set('amaze', 2017);     // Overrides the cuurent map, if already exists, else adds a new entry
carsMap.set('city', 2015);
carsMap.set('ciaz', 2019);
carsMap.set('swift', 2012);
carsMap.set('fronty', 2008);
console.log('Cars Map Size', carsMap.size);
carsMap.delete('fronty');
console.log('Does car map has ciaz: ', carsMap.has('ciaz'));

// For each
let val = "";
carsMap.forEach((value, key) => {
    val += key + " = " + value;
})
console.log('Values of cars map using for each: ', val);

// For of in map.
let text = "";
for (const x of carsMap.entries()) {
    text += x;
}
console.log('For of in maps: ', text);


// Dates

const d = new Date();


// default parameter is milliseconds i.e if new Date(10) is specified, it means Jan 1 1970 + 10 milliseconds
// other methods that can be used to store/display date.
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string) new Date("October 13, 2014 11:13:00");
const d2 = new Date(99, 11, 24);    // This denotes Fri Dec 24 1999

console.log(d.toString());
console.log(d.toUTCString()); // Displays in default UTC format.
console.log(d.toDateString()); // Displays as a Date String.
console.log(d.toISOString()); // Displays in ISO Format - ISO Date 	"2015-03-25" (The International Standard)
// (YYYY-MM-DDTHH:MM:SSZ) 

//Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.
// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead.
let millisec = Date.parse("November 15, 2000");     //Date.parse() returns the number of milliseconds between the date and January 1, 1970.

// get methods are there to retrieve various parts of a date. here are some imp ones...
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];   // getMonth returns an int from 0 to 11

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[d.getDay()];     //getDay returns an int from 0 to 6.

// various set methods are there too. out of which here are few of the imp ones

const datedemo = new Date();
datedemo.setDate(datedemo.getDate() + 50);      // The setDate() method can also be used to add days to a date  


// Helpers

// Random
let randInt = Math.floor(Math.random() * 100);        // Returns a random integer from 0 to 100:
let randInt2 = Math.floor(Math.random() * 100) + 1; // Returns a random integer from 1 to 100:

function getRndInteger(min, max) {      // Returns a random number between min and max(excluded)
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndInteger(min, max) {      // Returns a random number between min and max(included)
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Ternary Op Example.
let num = 21;
let evenOdd = (num % 2) ? "Odd":"Even";

// RegEx
// Retrieving google drive from the link

const pattern = '';
const testLink = '';
pattern.test(testLink); // Returns true, if id can be found
pattern.exec(testLink); // Returns the found text as an object. If not found, returns an empty object.

// Type conversions.

parseString = '23.32';
parseNum = 23.41674;
console.log('Parsing to int using parseInt() method: ', parseInt(parseString));
console.log('Parsing to float using parseFloat() method: ', parseFloat(parseString));
console.log('Parsing to string using toString() method: ', parseNum.toString());
console.log('Returns string with number fixed to 3 decimal places. ', parseNum.toFixed(3));
console.log('Returns string with number precised to 3 decimal places. ', parseNum.toPrecision(3));

// Hoisting in Js
// Allowed in var, but not in let (This will result in a ReferenceError), const (Syntax Error)
p = 5; // Assigning before declaring
var p; // Declaring the var.

// Explicit function binding.

const personAbbrName = {
    abbrName: function() {
        return this.firstName[0] + '.' + this.middleName + '.' + this.lastName;
    }
}
const personName = {
    firstName:"Krutik",
    middleName: "A",
    lastName: "Raythatha",
}
  personAbbrName.abbrName.call(personName);  // Will return "K.A.R" 

// Arrow functions and Anonymous Functions

let hi = function() {return "Hi";};
let hello = () => "Hello World!";

// Classes, Constructors, objects, JSON

class Planet {
    constructor(name, order) {
        this.name = name;
        this.order = order;
        this.dob = dob
    }
    getAge() {
        let year = new Date().getFullYear;
        return year - dob;
    }
}

let earth = new Planet('Earth', 3, 2000);
let mars = new Planet('Mars', 4, 2004);
console.log('Age of earth and mars respectively: ', earth.getAge() + ' ' + mars.getAge());

// Json

solarSystem = JSON.parse(jsonData);
console.log('Star Name of solar system json: \n', solarSystem[0]['starName'])