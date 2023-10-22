const roomMatrix = [
    [
        /*0.0*/ {},
        /*0.1*/ { heading: "Boss Fight!", description: "Room 1", choices: [] },
        /*0.2*/ {}
    ],
    [
        /*1.0*/ { heading: "Dark Room", description: "The room is dark.", choices: [ "<button class=\"choice-button\" disabled onclick='addInventory(0,\"VERY Fancy Sword\",\"It is incredibly sharp and shiny!\",\"onehand\",10,\"yes\"); this.remove()'>You see nothing...</button>" ] },
        /*1.1*/ { heading: "Room 6", description: "Room 3", choices: [] },
        /*1.2*/ {}
    ],
    [
        /*2.0*/ { heading: "Room 7", description: "Room 4", choices: [] },
        /*2.1*/ { heading: "Room 8", description: "", choices: ["<button class=\"choice-button\" onclick='addInventory(0,\"Chipped Sword\",\"Slightly better than an old femur.\",\"onehand\",6,\"yes\"); this.remove()'>Chipped Sword</button>", "<button class=\"choice-button\" onclick='addInventory(1,\"Cracked Shield\",\"You can see right through it.\",\"shield\",1,\"yes\"); this.remove()'>Cracked Shield</button>", "<button class=\"choice-button\" onclick='addInventory(2,\"Rusty Chainmail\",\"Watch out for tetanus!\",\"torso\",2,\"no\"); this.remove()'>Rusty Chainmail</button>"] },
        /*2.2*/ { heading: "Room 9", description: "Room 6", choices: [] }
    ],
    [
        /*3.0*/ { heading: "Room 10", description: "Room 7", choices: ["<button class=\"choice-button\" onclick='gold(0,5); this.remove()'>TAKE 5 GOLD</button>"] },
        /*3.1*/ {},
        /*3.2*/ { heading: "Room 12", description: "Room 9", choices: ["<button class=\"choice-button\" onclick='lightSwitch()'>LIGHT SWITCH</button>"] }
    ]
];

let gameState = {
    //Game starts with starting room declared as the current room
    currX: 2,
    currY: 1
};

let player = {
    name: 'Mr Choppy',
    gold: 0,
    handL: "",
    handR: "",
    torso: "",
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

    //Updates all player info divs
    document.getElementById('playerName').innerHTML = player.name;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('torso').innerHTML = player.torso;
    document.getElementById('inventory').innerHTML = player.inventory;

    //Only add item names to inventory
    document.getElementById('inventory').innerHTML = "";
    for (let item of player.inventory) {
        document.getElementById('inventory').innerHTML += "<div>" + item.itemName + "</div>";


    }

    //Creates array for drop down menu
    let equipHand = player.inventory.filter(item => item.combat === "yes" && (item.type === "onehand" || item.type === "shield"));
    let equipTorso = player.inventory.filter(item => item.type === "torso");

    //Empties inventory before populating it

    document.getElementById("leftHand").innerHTML = "<option value=" + player.handL.itemName + ">" + player.handL.itemName + "</option>";
    document.getElementById("rightHand").innerHTML = "<option value=" + player.handR.itemName + ">" + player.handR.itemName + "</option>";
    document.getElementById("torso").innerHTML = "<option value=" + player.torso.itemName + ">" + player.torso.itemName + "</option>";





    //Populates leftHand drop down with items equippable to hand slots
    for (let item of equipHand) {
        const o = document.createElement("option");
        o.text = item.itemName;
        o.value = item.itemName;
        document.getElementById("leftHand").appendChild(o);
    }

    //Populates leftHand drop down with items equippable to hand slots
    for (let item of equipHand) {
        const o = document.createElement("option");
        o.text = item.itemName;
        o.value = item.itemName;
        document.getElementById("rightHand").appendChild(o);
    }

    //Populates leftHand drop down with items equippable to hand slots
    for (let item of equipTorso) {
        const o = document.createElement("option");
        o.text = item.itemName;
        o.value = item.itemName;
        document.getElementById("torso").appendChild(o);
    }


    //Empties choice box to prevent duplicates
    document.getElementById('choice-box').innerHTML = "";

    //updates values of each room
    document.getElementById('heading-box').innerHTML = roomMatrix[X][Y].heading;
    document.getElementById('text-box').innerHTML = roomMatrix[X][Y].description;
    
    //Adds all buttons in the choices array for each room
    for (let button of roomMatrix[X][Y].choices) { 
        document.getElementById('choice-box').innerHTML += button;
    }

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
    roomMatrix[1][0].description = 'The room is well lit.';
    roomMatrix[1][0].choices[0] = "<button class=\"choice-button\" onclick='addInventory(0,\"VERY Fancy Sword\",\"It is incredibly sharp and shiny!\",\"onehand\",10,\"yes\"); this.remove()'>Shiny Sword</button>";
}


function addInventory(choiceNumber,itemName,description,type,value,combat) {
    //Adds 'item' to inventory
    player.inventory.push({ itemName, description, type, value, combat });
    //Prevents button from being created in roomMatrix once collected
    roomMatrix[gameState.currX][gameState.currY].choices[choiceNumber] = "";
    //Update content so player dropdown shows up to date information
    updateContent(); 

}

//Allows player to pick up gold they find
function gold(choiceNumber, amount) {
    player.gold += amount;
    roomMatrix[gameState.currX][gameState.currY].choices[choiceNumber] = "";
    updateContent();
}

//Change theme
function changetheme(theme) {
    document.getElementById("page").className = theme;
}

//Temporarily shows the name of the color when hovered over
function themename(color) {
    document.getElementById("colorname").innerText = "[ " + color + " ]"
}

//Changes the name back to blank when mouse leaves color square
function resetcurrentcolor() {
    document.getElementById("colorname").innerHTML = "";
}




function updateInventory(item,slot) {
    //find the first instance of item and change it to equipped
    const equippedItem = player.inventory.find((element) => element.itemName === item);
    index = player.inventory.indexOf(equippedItem);
    console.log(equippedItem)
    console.log(index);
    switch (slot) {
        case "handL":
            player.inventory.splice(index, 1)
            player.handL = equippedItem;
            break;
        case "handR":
            player.handR = equippedItem;
            player.inventory.splice(index, 1);
            break;
        case "torso":
            player.torso = equippedItem;
            player.inventory.splice(index, 1);
            break;
    }
    updateContent();
}