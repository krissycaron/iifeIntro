console.log("Planets", SolarSystem.getPlanets()); // prints the array to the console .. which is being allowed to do so with the array; 

console.log("Planets with people ", SolarSystem.getPlanetsLandedPeopleOn()); //setter displaying the hidden variable property PlanetsLandedPeopleOn

// solarsystem.js:21 Planets ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neputune"]
// solarsystem.js:23 Planets with people  0
// SolarSystem.getPlanetsLandedPeopleOn()
// 0
// SolarSystem.setPlanetsLandedPeopleOn()
// undefined
// SolarSystem.getPlanetsLandedPeopleOn
// function () { //still a getter
// 			return numPlanetsLandedPeopleOn;
// 		}
// SolarSystem.getPlanetsLandedPeopleOn()
// 1


// SolarSystem.setAmountofSpaceships("voyager 1");
// SolarSystem.setAmountofSpaceships("voyager 2");
// SolarSystem.setAmountofSpaceships("voyager 3");
// SolarSystem.setAmountofSpaceships("voyager 4");
// console.log("spaceShips: ", SolarSystem.getAmountofSpaceships());


// main thing is learning the sturcture of an iify, 1 or 2 private variable s and then  a few getters and setters. 
















// var outside = "global"; 

// function scopeStuff(){ 
// 	var	inside = "local";
// 	console.log("outside from inside the function", outside)
// 	console.log("inside from inside the function", inside)
// 	// body...
// }

// console.log("outside from outside the function", outside);//this will run
// console.log("inside from out side the function", inside);//this will not run becasue it is inside the function "undefined"

// //to get a variable private, stick it inside your function,
// scopeStuff();


// var global_base = 500;

// (function throwAway(){
// 	global_base+=500;
// 	console.log(global_base);//1000 
// }) ();


//immiedietly invoked function expression .. 

// function declaration this is just writing the functions
// function expression var X=1

// throwAway();

//parenthisis () literaly "call the function" or "run the function"

// document.getElementById('cat').addEventListner('click', throwAway) 

//immiediatly invoked function ... just want it to run... 


// var cats = (function(){
// 	var color = "black"; 
// 	var type = "tiger";
// 	var name = "fluffy";

// 	return {
// 		//getters & setters
// 		getColor : function(){
// 		var result = "your cat is " + color;
// 		return color; //getter this is how you must write functions inside of an object where you had a = you now have a :
// 		// RETURN gives permission access to the private variables
// 	},
// 		getType : function(){
// 		return type;
// 	},
// 		setColor : function(newColor) { //this is a setter, we are going to set a color this is the only way to make a change to the hidden var "color"
// 		color = newColor;
// 	}

// 	}
// })();

// // console.log(cats.color); // will not print, it is a private variable 

// // console.log(cats); //returns the object "getColor;()"

// // console.log(cats.getColor()); //returning the return value inside the "cats" function .. allowing permission to expose the variable. 

// console.log(cat);
// cats.setColor("pink");
// console.log(cats.getColor());














