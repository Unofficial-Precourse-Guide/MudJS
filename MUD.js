const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

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


/// Battle Palace MUD



// RoomMC 
class Room {
	constructor(name = '', desc = '', adjRms = {}, wepInRoom = []) {
		this.name = name
		this.desc = desc
		this.adjRms = adjRms
		this.wepInRoom = wepInRoom
	}
}

const Foyer = new Room;
Foyer.name = 'Foyer'
Foyer.desc = `You enter the Foyer through a large wooden door. To the north is a dark room where you will face an unknown enemy in battle. It is the quickest route to victory but also the most difficult`;
// Foyer.wepInRoom = wepArr
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

const Gun = new Weapon;
Gun.name = 'Gun';
Gun.desc = `Double Barrel`;
Gun.type = 'Metal';
Gun.maxDamage = 75;

const wepArr = [Sword, Axe, Gun]; /// on creation weapon added to Array



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
Godzilla.desc = `Godzilla is depicted as an enormous, destructive, prehistoric sea monster awakened and empowered by nuclear radiation`;
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

const personasArr = [Hero, Godzilla];
const roomArr = [Foyer];




/*
:'######::::::'###::::'##::::'##:'########::::'##::::::::'#######:::'######:::'####::'######::
'##... ##::::'## ##::: ###::'###: ##.....::::: ##:::::::'##.... ##:'##... ##::. ##::'##... ##:
 ##:::..::::'##:. ##:: ####'####: ##:::::::::: ##::::::: ##:::: ##: ##:::..:::: ##:: ##:::..::
 ##::'####:'##:::. ##: ## ### ##: ######:::::: ##::::::: ##:::: ##: ##::'####:: ##:: ##:::::::
 ##::: ##:: #########: ##. #: ##: ##...::::::: ##::::::: ##:::: ##: ##::: ##::: ##:: ##:::::::
 ##::: ##:: ##.... ##: ##:.:: ##: ##:::::::::: ##::::::: ##:::: ##: ##::: ##::: ##:: ##::: ##:
. ######::: ##:::: ##: ##:::: ##: ########:::: ########:. #######::. ######:::'####:. ######::
:......::::..:::::..::..:::::..::........:::::........:::.......::::......::::....:::......:::
*/


const setWpnToRdn = function (wepQty) { // Select random weapon by index of 0 - weapons.length
	return wepArr[Math.trunc(Math.random() * wepQty)];
}



const game = () => {
	let currentRoom = Foyer;
	let exit = false;
	// let wepInRoom = [];
	while (!exit) {
		console.log(`


:'######::'########::::'###::::'########::'########:::::'######::::::'###::::'##::::'##:'########:
'##... ##:... ##..::::'## ##::: ##.... ##:... ##..:::::'##... ##::::'## ##::: ###::'###: ##.....::
 ##:::..::::: ##:::::'##:. ##:: ##:::: ##:::: ##::::::: ##:::..::::'##:. ##:: ####'####: ##:::::::
. ######::::: ##::::'##:::. ##: ########::::: ##::::::: ##::'####:'##:::. ##: ## ### ##: ######:::
:..... ##:::: ##:::: #########: ##.. ##:::::: ##::::::: ##::: ##:: #########: ##. #: ##: ##...::::
'##::: ##:::: ##:::: ##.... ##: ##::. ##::::: ##::::::: ##::: ##:: ##.... ##: ##:.:: ##: ##:::::::
. ######::::: ##:::: ##:::: ##: ##:::. ##:::: ##:::::::. ######::: ##:::: ##: ##:::: ##: ########:
:......::::::..:::::..:::::..::..:::::..:::::..:::::::::......::::..:::::..::..:::::..::........::


		`)
		console.log(currentRoom.desc);
		switch (currentRoom) {
			case Foyer:
				currentRoom.wepInRoom.push(setWpnToRdn(wepArr.length));
				currentRoom.wepInRoom.push(setWpnToRdn(wepArr.length));
				currentRoom.wepInRoom.push(setWpnToRdn(wepArr.length));
				console.log(`This room has this weapons: ${currentRoom.wepInRoom[0].name.toString()}, ${currentRoom.wepInRoom[1].name.toString()}, ${currentRoom.wepInRoom[2].name.toString()}`)
				console.table(currentRoom.wepInRoom);
				rl.question('select your weapon...  ', (answer) => {
					console.log(`you have selected ${answer}`);
					rl.close();
				})
				exit = true;
				break;

		}
	}
}

game();