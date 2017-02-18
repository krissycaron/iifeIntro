var	SolarSystem = (function(oldSolarSystem) {
	
	var spaceShips = [];

		oldSolarSystem.getAmountofSpaceships = function(){
			return spaceShips;
		};
		 oldSolarSystem.setAmountofSpaceships = function(newSpaceship){
			spaceShips.push(newSpaceship);
		};
		oldSolarSystem.wreckSpaceships = function(){ 
			spaceShips.pop();
		};
	return oldSolarSystem; 

})(SolarSystem || {});