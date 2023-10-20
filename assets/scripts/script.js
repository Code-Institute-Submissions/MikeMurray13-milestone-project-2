const roomMatrix = [
    [
        /*0.0*/ { heading: "Room 1", description: "Room 1", choices: ["<button onclick='addInventory(\"sword\")'>SWORD</button>"] },
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

let inventory = [];

function startGame() {
    //Hide startScreen and displays the main game content box   
    document.getElementById("startScreen").style = "display: none";
    document.getElementById("content").style = "display: block";

    updateContent();
}

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
    document.getElementById('headingBox').innerHTML = roomMatrix[X][Y].heading;
    document.getElementById('textBox').innerHTML = roomMatrix[X][Y].description;
    document.getElementById('choiceBox').innerHTML = roomMatrix[X][Y].choices;

    //Disables buttons that lead to empty rooms or indices outside of roomMatrix
    if (X == (roomMatrix.length - 1) || roomMatrix[X + 1][Y].hasOwnProperty('description') == false) { document.getElementById("southButton").disabled = true; } else { document.getElementById("southButton").disabled = false; };
    if (X == 0 || roomMatrix[X - 1][Y].hasOwnProperty('description') == false) { document.getElementById("northButton").disabled = true; } else { document.getElementById("northButton").disabled = false; };
    if (Y == (roomMatrix[X].length - 1) || Object.keys(roomMatrix[X][Y + 1]).length === 0) { document.getElementById("eastButton").disabled = true; } else { document.getElementById("eastButton").disabled = false; };
    if (Y == 0 || Object.keys(roomMatrix[X][Y - 1]).length === 0) { document.getElementById("westButton").disabled = true; } else { document.getElementById("westButton").disabled = false; };
}



//Creates an alert when the player tries to leave the page
/*
function leavePageAlert() {
    return "Leaving will cause you to lose any unsaved progress...";
}
*/

//Turns the light on in Room 5
function lightSwitch() {
    roomMatrix[1][1].description = 'The room is well lit.';
}


function addInventory(item) {
    inventory.push({ item });
    console.log(inventory);
}

