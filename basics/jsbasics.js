/* variables and datatypes*/

/*
var firstName =  "Niruta";
console.log(firstName);

var lastName = "Dhimal";
var age = 21;

var fullAge = True;
console.log(fullAge);

var job;
job = "Teacher";
console.log(job);*/

/* variable naming rules*/
/*
var _3years = 3;
var johnMark = "JohnMark";
var $dollar = 10;
var i = 23;
*/

//Variable mutation and type coercion
//Type coercion
/*
var name = "Niruta Dhimal";
var age = 21;

console.log(name + " " + age);

var job, isMarried;
job = "Student";
isMarried = false;
console.log(name + " is a " + age +" year old " +job + ".");
console.log("Is she married?" + "\n"+isMarried);

//Type Mutation
var firstName = "John";
var age ,job;
age = 28;
job = "Teacher";
isMarried = true;

alert(firstName + " is a "+ age + " years old" +job+ ". \n Is he married? " + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " +lastName );
*/

//Basic Operators

//Arithmetic Operators
/*
var now, johnBirthYear, nirutaBirthYear;
now = 2020;
johnAge = 28;
nirutaAge = 21;
x = 59;

johnBirthYear = now - johnAge;
nirutaBirthYear = now - nirutaAge;

console.log(johnBirthYear);
console.log(nirutaBirthYear);
console.log(now + 30);
console.log(now * 20);
console.log(now/10);
console.log(10 % 3);
console.log(3**2);
console.log(++x);
console.log(--x);
console.log(x++);
console.log(x--);
*/

//Assignment operators
/*
var x, y;
y = 20;
x = 10;
console.log(x);
console.log(y);
console.log(x += y);
console.log(x -= y);
console.log(x *= 2);
console.log(y /= 10);
console.log(x %= 3);
console.log(x **= 2);
*/

//string operators
/*
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
console.log(txt3);

var txt1 = "What a very ";
var txt2 = "nice day!";
console.log(txt1 + txt2);
// When we used on string, the "+" operator is called concatenation operator.

//Adding strings and numbers
var x = 20;
var y = 30;
var z = "55";
console.log(x + z);
console.log(x + y + z);
console.log(z + x + y);
*/

//comparison(Relational) operators
/*
var age = 20;
console.log(age == 30);
console.log(age == 20);
console.log(age == "20");
console.log(age === 20);
console.log(age === "20");
console.log(age != 30);
console.log(age !== 20);
console.log(age !== "20");
console.log(age > 18);
console.log(age < 18);
console.log(age >= 18);
console.log(age <= 20);
*/

//logical operators
/*
var x = 20;
var y = 2;
console.log(x < 2 && y > 1);
console.log(x < 2 || y > 1);
console.log(!(x == y));
*/

//conditional(Ternary) operator
/* syntax:
       varName = (condition) ? value1: value2
*/
/*
var age = prompt("Enter the age.");
var votable = (age < 18)? "Too young" : "Old enough";
console.log(votable);
*/

//bitwise operators 
/* 
&                AND
|                OR
~                NOT
^                XOR
<<               Zero fill left shift
>>               Signed right shift
>>>              Zero fill right shift
*/

//typeof operator
/*
var x = 30;
var y = "Hello World!";
console.log(typeof x);
console.log(typeof y);
*/

//operator precedence

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var ageMark = 20;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). */

//Solution
/*
function BMI(m,h){
       return (m / h**2);
}

var markMass, johnMass, markHeight, johnHeight;
markMass = prompt("Enter mass of Mark in kg");
markHeight = prompt("Enter height of Mark in meter");
johnMass = prompt("Enter mass of John in kg");
johnHeight = prompt("Enter height of John in meter");
markBMI = BMI(markMass, markHeight);
jhonBMI = BMI(johnMass, johnHeight);
var decide = markBMI > jhonBMI;
console.log("IS Mark's BMI higher than John's? " + decide);
*/


//Javascript data types
/*
var length = 16;                               //Number
var lastName = "Johnson";                     //string
var x = {firstName:"John", lastName: "Doe"};  //object
var y = "Volvo" + 16;
var z = 20 + 5 + "Volvo";
var x1 = 34.0;
var x2 = 32;
var y1 = 125e5;
var y2 = 125e-5;
var x1Greater = x1 > x2;
console.log(x1Greater);
var cars = ["Volvo", "Audi", "BMW", "Aston Martin"];    //Array
console.log(typeof length);
console.log(typeof lastName);
console.log(typeof x);
console.log(typeof y);
console.log(z);
console.log(typeof x1);
console.log(typeof x2);
console.log(typeof y1);
console.log(typeof y2);
console.log(typeof x1Greater);
console.log(typeof cars);
console.log(typeof function func(){});
*/


//JS Functions

//return product of two passed arguments
/*
function product(p1,p2){
       return p1*p2;
}
var x = product(4,5);
console.log(x);

//Convert Fahrenheit to celsius
function toCelsius(fahrenheit){
       return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(77));
console.log(toCelsius(105));
var text = "The temperature is " + toCelsius(196) + " celsius" ;
console.log(text);
*/

//JS object
/*
var car = {type: "Fait", model: "500", weight: "500kg", color: "black"};
console.log("The car is of type " + car.type);
var person = {
       firstName: "Niruta" ,
       lastName: "Dhimal" ,
       age: 21,
       eyecolor: "black",
       fullName: function() {
              return this.firstName + " " + this.lastName;
       }
}
console.log(person.age);
console.log(person["firstName"]);
console.log(person.fullName());
*/

//Javascript strings
//Javascrip strings are used for sorting or manipulating text.
/*
var x = "John Doe";
var car1 = 'Volvo xC60';
var text = "It's alright";
console.log(x);
console.log(car1);
console.log(text);
console.log(text.length);   //gives the length of the string
var x = "We are the so called \"vikings\" from the north.";  //escape characters "\'", '\"', "\\"
console.log(x);
//strings can also be objects
var x = "John";
var y = new String("John");    //Don't create strings as objects it slows down execution speed. The new keyword complicates the code. It can produce unexpected results.
console.log(typeof x);
console.log(typeof y);    
var str = "Please locate where 'locate' occurs!";
console.log(str);
var pos = str.indexOf("locate");  //indexOf method returns the index of first occurance of specified text in the string
console.log(pos);
var lastPos = str.lastIndexOf("locate"); //lastIndexOf method returns the last occurance of specified text in the string
console.log(lastPos);
pos = str.indexOf("of");  //Both indexof and lastIndexOf returns -1 if the specified text is not found in the string
console.log(pos);
lastPos = str.lastIndexOf("of");
console.log(lastPos);
pos = str.lastIndexOf("locate",15);
/*lastIndexOf() method searches backwards(from end to the beginning), meaning if the second parameter is 15, the search starts at position 15 
and searches to the beginning of the string.*/
/*
console.log(pos);
var locatePos = str.search("locate");
console.log(locatePos);
//Extracting String parts
/* slice(start,end)
substring(start, end)
substr(start, length)*/
/*
var fruits = "apple, banana, mango, cherry, grapes";
var res = fruits.slice(7,25);
console.log(res);
console.log(fruits.slice(-12,-2));
console.log(fruits.slice(7));
console.log(fruits.slice(-20));
//substring method 
//cannot accept negative indexes
console.log(fruits.substring(7,20));
console.log(fruits.substring(7));
//substr method
console.log(fruits.substr(7,6));
console.log(fruits.substr(7));
console.log(fruits.substr(-7));
console.log(fruits.substr(-25,10));
//Replacing string content
var str2 = str.replace("locate","location");
console.log(str2);
var str3 = str2.replace(/Location/i, "locate");
console.log(str3);
var str4 = str.replace(/locate/g, "find");
console.log(str4);
//toUpperCase and toLowerCase
var ucase = str.toUpperCase();
var lcase = str.toLowerCase();
console.log(ucase);
console.log(lcase);
//concat method
var txt1 = "Hello";
var txt2 = "World";
var txt3 = txt1.concat(" ",txt2);
console.log(txt3);
console.log(txt1.concat(", ",txt2));
//trim() method
var txt = "         Hello World!   ";
console.log(txt);
console.log(txt.trim());
//Extracting string characters
/*charAt(position)
charCodeAt(position)
Property access []
*/
/*
console.log(txt3.charAt(0));
console.log(txt3.charCodeAt(0));
console.log(txt3[0]);
//converting string to array using split() method
var x = "a,b,c,d,e"
console.log(x);
var arr = x.split(",");
for(i = 0; i < arr.length; i++) {
       console.log(arr[i]);
}
*/

//JS Numbers
/*
var x = 43.5;
var y = 4;
var z = 143e7;
var a = 143e-6;
var x = 0.1+0.2;
console.log(x);
x = (0.1 * 10 + 0.2 * 10) / 10;
console.log(x);
// NaN (not a number)
var x = 100 / "apple";
console.log(x);
// NaN is a number: type of NaN returns number
console.log(typeof NaN);
// Infinity or (-Infinity)
// is a value javascript will return if you calculate a number outside the largest possible value
var x = 2 / 0;
var y = -2 / 0;
console.log(x);
console.log(y);
console.log(typeof Infinity);
//javascript interprets numeric constants as hexadecimal if they are preceded by 0x
var x = 0xFF;
console.log(x);
// tostring() method can be used to output number from base 2 to 36
var myNumber = 32;
console.log(myNumber.toString(2));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(16));
*/

//Numbers methods
/*

//toString() method returns a number as a string
console.log((123).toString());
console.log((50 + 5).toString());

//toExponential() method
var x = 15553.9988
console.log(x.toExponential(3));
console.log(x.toExponential(2));

//toFixed() method
console.log(x.toFixed(2));
console.log(x.toFixed(0));

//toPrecision() method
var x = 55.2359;
console.log(x.toPrecision(2));
console.log(x.toPrecision(5));

//Converting variables to numbers
//global javascript methods

console.log(Number(true));
console.log(Number(false));
console.log(Number("  10"));
console.log(Number("10"));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));
console.log(Number(new Date("2020-09-20")));

console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

//Number properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
*/

//Javascript Arrays
/*
var cars = ["Saab", "Volvo", "BMW", "SUV"];
var students = new Array("Niruta", "Darpan", "Avaya");
console.log(cars[0]);
cars[0] = "Audi";
console.log(cars[0]);
console.log(cars);
var myArray = [];
myArray[0] = Date.now();
myArray[1] = cars;
console.log(myArray);
//Array properties and methods
console.log(cars.length);
console.log(cars.sort());
console.log(cars[cars.length - 1]);

//Looping through Arrays
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;

//Array.forEach() function
var fruits, text;
fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Guava"];
text = "<ul>";

fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("demo1").innerHTML = text;

function myFunction(value){
       text += "<li>" + value + "</li>";
}

//adding new element in array
fruits.push("Watermelon");
console.log(fruits);
console.log(Array.isArray(fruits));
document.getElementById("demo2").innerHTML = fruits instanceof Array;
*/

//JS Array Methods
/*
var fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Guava"];
var x = fruits.toString()

document.getElementById("demo").innerHTML = x;
document.getElementById("demo1").innerHTML = fruits.join("*");
fruits.pop();
document.getElementById("demo2").innerText = fruits;
document.getElementById("demo3").innerHTML = fruits.push("kiwi");
*/
/*
console.log(fruits);
fruits.shift();
document.getElementById("demo").innerText = fruits;
console.log(fruits.unshift("Apple"));
document.getElementById("demo1").innerText = fruits;
delete fruits[0];
console.log(fruits);
var removed = fruits.splice(2,2,"Lemon","Cherry", "Guava");
document.getElementById("demo2").innerHTML = fruits;
console.log(removed);
fruits.splice(0,1);
console.log(fruits);
var food = ["Burger", "Pizza"];
food = food.concat(fruits);
console.log(food);
food = food.concat("Noodles");
console.log(food);
var citrus = fruits.slice(3);
console.log(fruits);
console.log(citrus);
food1 = food.slice(1,5);
console.log(food1);
*/

//JS Array sort
/*
document.getElementById("demo").innerHTML = fruits.sort();
document.getElementById("demo1").innerHTML = fruits.reverse();
var points = [100,200,5,10,20,25,6,7,2,1];
document.getElementById("demo2").innerHTML = points;
function myFunction(){
       points.sort(function(a,b) {return a-b;});
       document.getElementById("demo2").innerHTML = points;
}

function myFunctionDec(){
       points.sort(function(a,b){return b-a});
       document.getElementById("demo3").innerHTML = points;
}

//The Fisher Yates Method(Modern Method)
function mySortRandom(){
       var i,j,k;
       for(i = points.length -1 ;i > 0; i--){
              j = Math.floor(Math.random() * i);
              k = points[i];
              points[i] = points[j];
              points[j] = k; 
       }
       document.getElementById("demo4").innerHTML = points;
}

//Highest or lowest array value
/*
function myArrayMax(arr){
       return Math.max.apply(null,arr);
}
document.getElementById("demo5").innerHTML = myArrayMax(points);
function myArrayMin(arr){
       return Math.min.apply(null,arr);
}
document.getElementById("demo6").innerHTML = myArrayMin(points);
*/

//My MIN/MAX JavaScript Method
/*

function myArrayMax(arr){
       var len = arr.length;
       var max = -Infinity;
       while(len--){
              if(arr[len] > max){
                     max = arr[len]; 
              }
       }
       return max;
}
document.getElementById("demo5").innerHTML = myArrayMax(points);

function myArrayMin(arr){
       var len = arr.length;
       var min = Infinity;
       while(len--){
              if (arr[len] < min){
                     min = arr[len];
              }
       }
       return min;
}
document.getElementById("demo6").innerHTML = myArrayMin(points);

//Sorting Array Objects
var cars = [
       {type: "Volvo", year: 2016},
       {type: "Saab", year: 2010},
       {type: "BMW", year: 2020},
]

displayCars();


function listCarSort(){
       cars.sort(function(a,b){ return(a.year - b.year);})
       displayCars();

}



function displayCars() {
       document.getElementById("demo7").innerHTML =
       cars[0].type + " " + cars[0].year + "<br>" +
       cars[1].type + " " + cars[1].year + "<br>" +
       cars[2].type + " " + cars[2].year;
}

displayCars1();

//Sorting Array Objects By Name
function sortByName(){
       cars.sort(function(a, b){
              var x = a.type.toLowerCase();
              var y = b.type.toLowerCase();
              if (x < y) {return -1;}
              if (x > y) {return 1;}
              return 0;
       });

       displayCars1();
}

function displayCars1() {
       document.getElementById("demo8").innerHTML =
       cars[0].type + " " + cars[0].year + "<br>" +
       cars[1].type + " " + cars[1].year + "<br>" +
       cars[2].type + " " + cars[2].year;
}
*/

//Js Array Iteration
/*
var txt = "";
var arr = [45,55,65,78,98];
arr.forEach(myfunction);
document.getElementById("demo").innerHTML = txt ;

function myfunction(value){
       txt = txt + value + '<br>';
}

//Array.map()
var num = arr.map(myfunc);
document.getElementById("demo1").innerHTML = num;

function myfunc(value){
       return value*2 ;
}

//Array.filter()
var over50 = arr.filter(myfunc1);
document.getElementById("demo2").innerHTML = over50;

function myfunc1(value, index, array){
       if (value > 50){
            return value;
       }
}

//Array.reduce()
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

document.getElementById("test").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}

//Array.reduceRight()
var sum1 = num.reduceRight(myFunction);
document.getElementById("test1").innerHTML = "The sum is " + sum1 ;

//Array.every()
var allover60 = arr.every(myfuncs);
document.getElementById("test2").innerHTML = "All over 60 is " + allover60;
function myfuncs(value,index,array){
       return value > 60;
}

//Array.some()
var someover60 = arr.some(myfuncs);
document.getElementById("test3").innerHTML = "Some over 60 is " +someover60;

//Array.indexOf()
var fruits = ["Apple", "Banana", "Cherry", "Mango","Apple", "Pineapple"];
var a = fruits.indexOf("Apple");
document.getElementById("fruits").innerHTML = "The available fruits are: <br>" + fruits;
document.getElementById("test4").innerHTML = "The Index of Apple is " + a ;
var b = fruits.lastIndexOf("Apple");
document.getElementById("test5").innerHTML = "The last index of Apple is " + b;

//Array.find()
var first = arr.find(myfuncs);
document.getElementById("test6").innerHTML = "The first element that is greater than 60 in arr is " + first;

//Array.findIndex()
var firstindex = arr.findIndex(myfuncs);
document.getElementById("test7").innerHTML = "The index of first element that is greater than 60 in arr is " + firstindex ;
*/


//JS Date
var d = new Date()
document.getElementById("demo").innerHTML = "The current data and time is " + d;

//creating date object
var date = new Date(2019,11,13,5,26,30,23);
document.getElementById("demo1").innerHTML = "The given date and time is <br> " + date;

var d1 = new Date(2018,7,20,13,5,20);
document.getElementById("demo2").innerHTML = "The specifies date and time is <br> " + d1;

var d2 = new Date(2019, 2,5,5);
document.getElementById("test").innerHTML = "The date and time is <br> " + d2 ;

var d3 = new Date(2020);
document.getElementById("test1").innerHTML = "Giving only one parameter to the new Date() constructor treats it as miliseconds. <br> " + d3;

//Previous Century
var p = new Date(99,7,20);
document.getElementById("test2").innerHTML = "One or two digit years will be interpreted as 19xx. <br>"+ p;
var s = new Date(9,2,4);
document.getElementById("test3").innerHTML = s;
//new Date(date String)
var nd = new Date("August 20, 1999  13:5:30");
document.getElementById("test4").innerHTML = "new Date(datestring) creates a new date object from a date String. <br>" + nd;

var origin = new Date(0);
txt = "JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).<br> Zero time is January 01, 1970 00:00:00 UTC.<br>new Date(milliseconds) creates a new date object as zero time plus milliseconds:<br>";
document.getElementById("test6").innerHTML = txt + origin;
document.getElementById("test7").innerHTML = origin.toUTCString();
document.getElementById("fruits").innerHTML = origin.toDateString();
document.getElementById("try").innerHTML = origin.toISOString();

//ISO Date
var date1 = new Date("2020-05-21");
console.log(date1);
var date2 = new Date("2020-4");
console.log(date2);
var date3 = new Date("2015");
console.log(date3);
d = new Date("2020-05-08T12:50:20Z");
console.log(d);
d1 = new Date("2020-05-08T20:30:20-06:50");
console.log(d1);

//JS Short Dates("MM/DD/YYYY")
d = new Date("03/25/2020");
console.log(d);

//JS long Dates("MMM DD YYYY")
d = new Date("Aug 20 1999");
console.log(d);
d = new Date("25 Mar 2020");
console.log(d);
d = new Date("January 5 2020");
console.log(d);
d = new Date("January 25, 2015");
console.log(d);

//Date inputs- parsing dates
var msec = Date.parse("25 jan 2015");
console.log(msec);
d = new Date(msec);
document.getElementById("test5").innerHTML = d;


