import {
    wepArr,
    roomArr,
    personasArr,
} from "./MUD"

const setWpnToRdn = function (wepQty) { // Select random weapon by index of 0 - weapons.length
    return wepArr[Math.trunc(Math.random() * wepQty)];
}



const game = () => {
    let currentRoom = Foyer;
    while (!exit) {
        console.log(currentRoom.desc);
        switch (currentRoom) {
            case Foyer:
                currentRoom.wepInRoom.push(setWpnToRdn(wepArr.length));
                currentRoom.wepInRoom.push(setWpnToRdn(wepArr.length));
                currentRoom.wepInRoom.push(setWpnToRdn(wepArr.length));
                console.log(`This room has this weapons: ${wepInRoom.toString()}`)
                break;
            case

        }
    }
}