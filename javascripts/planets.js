var	SolarSystem = (function(oldSolarSystem) {
	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neputune"];
	var numPlanetsLandedPeopleOn = 0;
		
		oldSolarSystem.getPlanets = function(){ //getter 
			return	planets; // allowing us to access the gett
		};
		oldSolarSystem.getPlanetsLandedPeopleOn = function() { //still a getter
			return numPlanetsLandedPeopleOn;
		};
		oldSolarSystem.setPlanetsLandedPeopleOn = function(){ //this is a setter 
			numPlanetsLandedPeopleOn++;
		};

	return oldSolarSystem;

})(SolarSystem || {});