var	SolarSystem = (function(oldSolarSystem) {
	
	var spaceShips = [];

		oldSolarSystem.getAmountofSpaceships = function(){
			return spaceShips;
		};
		 oldSolarSystem.setAmountofSpaceships = function(newSpaceship){ //setters do not have a "return"
			spaceShips.push(newSpaceship);
		};
		oldSolarSystem.wreckSpaceships = function(){ // go with what makes sense for the for the name of the function or the key
			spaceShips.pop(); // pulls off last object of the array 
		};
	return oldSolarSystem; 

})(SolarSystem || {}); // augment and old solarsytem or augment an empty object 