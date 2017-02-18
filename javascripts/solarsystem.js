//capitalize your iife ... this is common practive called Pasquae case

var SolarSystem = (function(oldSolarsystem) {
	/// write a getter for an array of planets
	var dwarfPlanets = ""

		oldSolarsystem.getDwarfPlanets = function(){
			return	"they are rejects";
		};
		oldSolarsystem.setDwarfPlanets = function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		}
		return SolarSystem;
})(SolarSystem || {});