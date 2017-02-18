//capitalize your iife ... this is common practive called Pasquae case

var SolarSystem = (function() {
	/// write a getter for an array of planets
	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neputune"];
	var numPlanetsLandedPeopleOn = 0;
	var dwarfPlanets = ""
	var spaceShips = [];
	var stars = ["Sun", "Alpha Centauri", "Wolf 359"];
	var age = 0;

	return {
		setDate: Date.now(); // method not a function

		getPlanets : function(){ //getter 
			return	planets; // allowing us to access the gett
		},
		getPlanetsLandedPeopleOn: function() { //still a getter
			return numPlanetsLandedPeopleOn;
		},
		setPlanetsLandedPeopleOn: function(){ //this is a setter 
			numPlanetsLandedPeopleOn++;
		},
		 getAmountofSpaceships : function(){
			return spaceShips;
		},
		 setAmountofSpaceships : function(newSpaceship){ //setters do not have a "return"
			spaceShips.push(newSpaceship);
		},
		wreckSpaceships : function(){ // go with what makes sense for the for the name of the function or the key
			spaceShips.pop(); // pulls off last object of the array 
		},
		getDwarfPlanets : function(){
			return	"they are rejects";
		}, 
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		getStars : function() {
			return stars;
		},
		setStars : function() {
			stars.push(newStar);
		},
		getSolarSystemAge : function() {
			return age;
		},
		setSolarSystemAge : function(){
			age++; 
		}
	}
})();

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


SolarSystem.setAmountofSpaceships("voyager 1");
SolarSystem.setAmountofSpaceships("voyager 2");
SolarSystem.setAmountofSpaceships("voyager 3");
SolarSystem.setAmountofSpaceships("voyager 4");
console.log("spaceShips: ", SolarSystem.getAmountofSpaceships());


// main thing is learning the sturcture of an iify, 1 or 2 private variable s and then  a few getters and setters. 

