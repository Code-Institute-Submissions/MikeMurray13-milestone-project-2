const roomMatrix = [
    [
        /*0.0*/ { heading: "Room 1", description: "Room 1", choices: ["<button onclick='addInventory(\"sword\",\"This is just a sword\",\"onehand\",6,\"yes\",\"no\"); this.disabled=true'>SWORD</button>"] },
        /*0.1*/ {},
        /*0.2*/ { heading: "Room 3", description: "Room 3", choices: [] }
    ],
    [
        /*1.0*/ { heading: "Room 4", description: "Room 4", choices: [] },
        /*1.1*/ { heading: "Room 5", description: "The room is dark.", choices: [] },
        /*1.2*/ { heading: "Room 6", description: "Room 6", choices: [] }
    ],
    [
        /*2.0*/ { heading: "Room 7", description: "Room 7", choices: [] },
        /*2.1*/ {},
        /*2.2*/ { heading: "Room 9", description: "Room 9", choices: ["<button onclick='lightSwitch()'>LIGHT SWITCH</button>"] }
    ]
];

let gameState = {
    //Game starts with starting room declared as the current room
    currX: 1,
    currY: 1
};

let player = {
    name: 'Mr Choppy',
    gold: 0,
    handL: 'fist',
    handR: 'fist',
    armor: 'rags',
    inventory: []
};



//Basic move function
function move(dir) {
    //Updates current coordinates based on which button is pressed
    if (dir == 'north') { gameState.currX -= 1; };
    if (dir == 'south') { gameState.currX += 1 };
    if (dir == 'west') { gameState.currY -= 1 };
    if (dir == 'east') { gameState.currY += 1 };

    //Updates the innerHTML of all fields to that of new page
    updateContent();
}

//Updates content of current room
function updateContent() {
    let X = gameState.currX;
    let Y = gameState.currY;

    //updates values of each room
    document.getElementById('heading-box').innerHTML = roomMatrix[X][Y].heading;
    document.getElementById('text-box').innerHTML = roomMatrix[X][Y].description;
    document.getElementById('choice-box').innerHTML = roomMatrix[X][Y].choices;

    //Disables buttons that lead to empty rooms or indices outside of roomMatrix
    if (X == (roomMatrix.length - 1) || roomMatrix[X + 1][Y].hasOwnProperty('description') == false) { document.getElementById("south-button").disabled = true; } else { document.getElementById("south-button").disabled = false; };
    if (X == 0 || roomMatrix[X - 1][Y].hasOwnProperty('description') == false) { document.getElementById("north-button").disabled = true; } else { document.getElementById("north-button").disabled = false; };
    if (Y == (roomMatrix[X].length - 1) || Object.keys(roomMatrix[X][Y + 1]).length === 0) { document.getElementById("east-button").disabled = true; } else { document.getElementById("east-button").disabled = false; };
    if (Y == 0 || Object.keys(roomMatrix[X][Y - 1]).length === 0) { document.getElementById("west-button").disabled = true; } else { document.getElementById("west-button").disabled = false; };
}



//Creates an alert when the player tries to leave the page
function leavePageAlert() {
    return "Leaving will cause you to lose any unsaved progress...";
}


//Turns the light on in Room 5
function lightSwitch() {
    roomMatrix[1][1].description = 'The room is well lit.';
}

//Adds 'item' to inventory
function addInventory(item,description,type,value,combat,equipped) {
    player.inventory.push({ item, description, type, value, combat, equipped });
    console.log(player);
}

