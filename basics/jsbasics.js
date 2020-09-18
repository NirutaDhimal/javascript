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


