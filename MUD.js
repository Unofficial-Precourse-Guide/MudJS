/// Battle Palace MUD

const wepArr = [] /// on creation weapon added to Array


// RoomMC 
class Room {
	constructor(name = '', desc = '', adjRms = {}, wepInRoom = []) {
		this.name = name
		this.desc = desc
		this.adjRms = adjRms
		this.wepInRoom = wepInRoom
	}
}

// Room.wepInRoom = wepArr[
// 	Math.floor(Math.random() * Math.floor(array.length - 1))
// ]

// WeaponsMC 
class Weapon {
	constructor(name = '', desc = '', type, maxDamage = 0) {
		this.name = name
		this.desc = desc
		this.type = type
		this.maxDamage = maxDamage
	}
}

Weapon.prototype.addToWepArr = function () {}



// PersonaMC
// 0 > health > 500
// 0 > atkSpeed > 10
// 0 > strength > 100
class Persona {
	constructor(name = '', desc = '', health = 0, atkSpeed = 0, strength = 0, skill) {
		this.name = name
		this.desc = desc
		this.health = health
		this.atkSpeed = atkSpeed
		this.strength = strength
		this.skill = skill
	}
}

const Godzilla = new Persona;
Godzilla.name = `Godzilla`;
Godzilla.desc = `Godzilla is depicted as an enormous, destructive, prehistoric sea monster awakened and empowered by nuclear radiation`;
Godzilla.health = 240;
Godzilla.atkSpeed = 3;
Godzilla.strength = 55;



class Hero extends Persona {
	constructor(name, desc, health, atkSpeed, strength, skill) {
		super(name, desc, health, atkSpeed, strength, skill)
	}
}

/// Portal "where the game begins"
const Foyer = new Room;

Foyer.name = 'Foyer'

Foyer.desc = ` 
	You enter the foyer through a large wooden door. 
	To the north is a dark room where you will face an unknown enemy in battle. 
	It is the quickest route to victory but also the most difficult
	`
// Foyer.adjRms = {
// 	North: Conservatory,
// 	East: SEHallway,
// 	West: SWHallway,
// 	South: ExitGame
// }




// Names of Rooms in Mansion
/*
Kitchen 
Ballroom 
Library 
TheHall
Hall 
Lounge 
Cellar
Billard room 
Conservatory 
Parlor 
*/





/// 


/*
Steps 
1. a map comprised of room classes
2. methods to move between rooms / user prompted.  
3. weapons that can move between rooms 
3.1 can only have one weapon at a time
3.2 weapons change user states 
4. methods to pickUp, putDown and carry objects
5. game personas that can battle one another
6. methods for having personas do battle 
6.1 perhaps some Math.random() to determine who wins

*/