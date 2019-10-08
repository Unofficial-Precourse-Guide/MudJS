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

Room.prototype.setWpnToRdn = function (wepQty) { // Select random weapon by index of 0 - weapons.length
	return wepArr[Math.trunc(Math.random() * wepQty)];
}

// Room.wepInRoom = wepArr[
// 	Math.floor(Math.random() * Math.floor(array.length - 1))
// ]

// WeaponsMC 
// 0 > maxDamage > 100
class Weapon {
	constructor(name = '', desc = '', type, maxDamage = 0) {
		this.name = name
		this.desc = desc
		this.type = type
		this.maxDamage = maxDamage
	}
}

// ['Sword', 'Axe', 'Gun', 'Bat', 'Throwing Star', 'Hammer', 'Flame Thrower', 'Candlestick', 'Dagger', 'Machete', 'ChainSaw']

const Sword = new Weapon;
Sword.name = 'Sword';
Sword.desc = 'Double edge sword';
Sword.type = 'Fire';
Sword.maxDamage = 50;

const Axe = new Weapon;
Axe.name = 'Axe';
Axe.desc = `1700's Battle Axe`;
Axe.type = 'Metal';
Axe.maxDamage = 65;



// PersonaMC
// 0 > health > 100
// 0 > atkSpeed > 100
// 0 > strength > 100
// 0 > skill > 100
class Persona {
	constructor(name = '', desc = '', health = 0, atkSpeed = 0, strength = 0, skill = 0) {
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
Godzilla.desc = `
				Godzilla is depicted as an enormous, destructive, prehistoric sea monster awakened and empowered 
				by nuclear radiation
				`;
Godzilla.health = 240;
Godzilla.atkSpeed = 3;
Godzilla.strength = 55;
Godzilla.skill = 50;



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