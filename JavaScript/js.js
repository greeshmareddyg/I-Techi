/* JavaScript is a client-side scripting lang used to interact with the user and make dynamic pages. 
    It is an interpreted programming language with object-oriented capabilities. */
	
/* JavaScript variables are containers for storing data values.
    Global varibles, local variables.  var length =6; here lenght is identifier */
	
/* JavaScript variables can hold many data types: numbers, strings, objects, arrays,Boolean etc */
// var namelength =8; numbers
// var myName = greeshma; strings
// var details = {firstName: "Greeshma", lastName: "Reddy"} object
// var studies =["inter","college", "university"]; Array


// reverse function 

function myReverse(){
	var mystring= document.getElementById("reverseName").value;
	document.getElementById("reverse").innerHTML = reverseMyString(mystring);

	function reverseMyString(mystring) {
	  return mystring.split('').reverse().join('');
	}	
}

// function with arguments

function myFunction(firstName,lastName) {
    document.getElementById("parameters").innerHTML =
    "My first name is " + firstName + "</br> Last name is " + lastName + ".";
}

// Properties are the values associated with a JavaScript object.
// Eg: var details = {firstName:"Greeshma", lastName:"Reddy", experience:8, education:"masters"};
// All JavaScript objects inherit their properties and methods from their prototype.

function myName(){
	var person = {
		firstName: "Greeshma",
		lastName : "Reddy",
		fullName : function() {
		   return this.firstName + " " + this.lastName;
		}
	};

	document.getElementById("demo").innerHTML = person.fullName();
}	

// Methods: objectName.methodName()    EG: person.toUpperCase(), person.changeName("Doe")

// All JavaScript objects inherit the properties and methods from their prototype.
//Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype

function myMethod(){
	function person(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    }
}
var myMother = new person("Vijji","Reddy",40,"green");
myMother.changeName("Vijaya");

document.getElementById("method").innerHTML =
"My mother's last name is " + myMother.lastName;
}

// prototype Property:  eg: Person.prototype.nationality = "English";

function myPrototype(){
	function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "India";

var myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("prototype").innerHTML =
"My father's nationality is" + myFather.nationality;
}

// The setInterval() method calls a function or evaluates an expression at specified intervals
//The clearInterval() method clears a timer set with the setInterval() method

function setInt() {
    setInterval(function(){ alert("Hello"); }, 1000);
}


//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
//The clearTimeout() method clears a timer set with the setTimeout() method.




