const roomMatrix = [
    [
        /*0.0*/ { heading: "Room 1", description: "Room 1" },
        /*0.1*/ { heading: "Room 2", description: "Room 2", choices: "<button onclick =\"move('south')\">SOUTH</button>" },
        /*0.2*/ { heading: "Room 3", description: "Room 3" }
    ],
    [
        /*1.0*/ { heading: "Room 4", description: "Room 4", choices: "<button onclick =\"move('east')\">EAST</button>" },
        /*1.1*/ { heading: "Room 5", description: "The room is dark.", choices: "<button onclick =\"move('north')\">NORTH</button><button onclick =\"move('south')\">SOUTH</button><button onclick =\"move('west')\">WEST</button><button onclick =\"move('east')\">EAST</button>"},
        /*1.2*/ { heading: "Room 6", description: "Room 6", choices: "<button onclick =\"move('west')\">WEST</button>" }
    ],
    [
        /*2.0*/ { heading: "Room 7", description: "Room 7" },
        /*2.1*/ { heading: "Room 8", description: "Room 8", choices: "<button onclick =\"move('north')\">NORTH</button><button onclick='lightSwitch()'>LIGHT SWITCH</button>" },
        /*2.2*/ { heading: "Room 9", description: "Room 9" }
    ]
];

let gameState = {
    //Game starts with starting room declared as the current room
    currX: 1,
    currY: 1
}

function startGame() {
    //Hide startScreen and displays the main game content box   
    document.getElementById("startScreen").style = "display: none";
    document.getElementById("content").style = "display: block";
    updateContent();
    //Test method using console
    console.log(roomMatrix[gameState.currX][gameState.currY].description);
    console.log(gameState.currX);
    console.log(gameState.currY);
}

//Basic move function
function move(dir) {
    if (dir === 'north') {gameState.currX -= 1};
    if (dir === 'south') { gameState.currX += 1;};
    if (dir === 'west') { gameState.currY -= 1; };
    if (dir === 'east') { gameState.currY += 1; };
    updateContent();
}

//Displays the values provided by the current room
function updateContent() {
document.getElementById("headingBox").innerHTML = roomMatrix[gameState.currX][gameState.currY].heading;
document.getElementById("textBox").innerHTML = roomMatrix[gameState.currX][gameState.currY].description;
document.getElementById("choiceBox").innerHTML = roomMatrix[gameState.currX][gameState.currY].choices;
}



function leavePageAlert() {
    return "Write something clever here...";
}

function lightSwitch() {
    roomMatrix[1][1].description = 'The room is well lit.'; 
    console.log(roomMatrix[1][1].description);
}