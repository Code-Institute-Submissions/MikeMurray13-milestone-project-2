const roomMatrix = [
    [
        /*0.0*/
        {},
        /*0.1*/
        {
            heading: "THE GROAN IN THE DOOR",
            description: "In the flickering torchlight, you realise that escape would not come easily. The great monster is a fearsome guardian of the dungeon's secrets, a sentinel of darkness that will not yield without a battle of epic proportions. A deep breath, a steady grip on your weapon, and a heart steeled by resolve are your only companions as you brace to confront the monstrous obstruction standing between you and your freedom....<br>...THIS ADVENTURE ENDS HERE!",
            choices: []
        },
        /*0.2*/
        {}
    ],
    [
        /*1.0*/
        {
            heading: "ABYSS",
            description: "The room's obscurity feels almost sentient, as if it hungers for the very essence of light, leaving an oppressive, unrelenting void in its wake. It engenders a sense of claustrophobia, a fear that the boundaries of reality have been breached, and one stands on the precipice of an abyss.<br>Sounds within the room are eerily muffled, voices and footsteps dampened by the unyielding gloom.Breathing in this abyss feels heavier, as if the air itself has been tainted by the shadows.Fear and uncertainty intertwine, for the room's profound darkness seems a harbinger of secrets and mysteries best left undisturbed.<br>In this unnaturally dark room, the boundaries between reality and the surreal blur, leaving those who dare to enter to ponder whether they have crossed into a realm where light and reason hold no dominion.< br > ",
            choices: ["<button class=\"choice-button\" disabled onclick='addInventory(0,\"VERY Fancy Sword\",\"It is incredibly sharp and shiny!\",\"onehand\",\"weapon\",10); this.remove()'>You see nothing...</button>"]
        },
        /*1.1*/
        {
            heading: "ANTECHAMBER",
            description: "The flickering torchlight reveals dank, moss-covered walls and iron bars, while a chilling silence clings to the air. To the north, a foreboding chamber beckons.Its entrance, flanked by statues eroded by centuries of neglect, opens into a cavernous expanse.Within, a relentless, ear- splitting rumble assaults the senses, shaking the very foundation of the dungeon.A vivid, ominous red light bathes the room, casting eerie, elongated shadows that dance upon the floor. You should not proceed until you have explored thoroughly.",
            choices: []
        },
        /*1.2*/
        {}
    ],
    [
        /*2.0*/
        {
            heading: "GRISLY TABLEAU",
            description: "The remnants of a lavish banquet stretch across a long, grimy table, now a wasteland of culinary excess turned to waste. Platters of exquisite dishes lie in disarray, their once-vibrant colors muted by time and neglect. A mold-ridden feast, the fruits, cheeses, and meats, now a revolting collage of decay, crawl with maggots and vermin. Candles, their wax having long since pooled and solidified, stand as grotesque sentinels over the abandoned feast, their flames having surrendered to the cruel passage of time.Goblets, once brimming with fine wine, now hold stagnant, murky liquid teeming with algae and insects. The dungeon's damp walls seem to revel in the revulsion of this scene, as if nature itself conspires to erase all traces of opulence. The abandoned feast is a pitiful testament to the dungeon's relentless decay, a reminder that in this forsaken place, even the grandest of feasts are ultimately devoured by the voracious maw of time and despair.",
            choices: []
        },
        /*2.1*/
        {
            heading: "SHALLOW GRAVES",
            description: "In the heart of a fantastical realm, shrouded in an eerie stillness, you awaken amidst a pit of graves. The surroundings are a grotesque tableau of death and magic. Tombstones of various shapes and sizes jut from the earth like ancient sentinels, each one adorned with runes and symbols that glow faintly with an otherworldly light. The air is heavy with a spectral chill. A gaping hole in the ceiling allows the moon to shine in with an unnatural silver luminance, casting elongated shadows across the burial ground.In the center of this grim tableau, the pit's occupant stirs, bewildered and disoriented. <br>YOU MUST ESCAPE...",
            choices: ["<button class=\"choice-button\" onclick='addInventory(0,\"Chipped Sword\",\"Slightly better than an old femur.\",\"onehand\",\"weapon\",6); this.remove()'>Chipped Sword</button>",
                "<button class=\"choice-button\" onclick='addInventory(1,\"Greatsword\",\"A REALLY big sword...\",\"twohand\",\"weapon\",12); this.remove()'>Greatsword</button>"]
        },
        /*2.2*/
        {
            heading: "COWARD'S ARMOURY",
            description: "The absence of weaponry hangs heavy in the air, a poignant testament to the dungeon's decline and the passage of warriors who have long since departed. The room, once a symbol of strength and readiness, now stands as a haunting reminder of the silence that has come to define this desolate, forsaken place.",
            choices: ["<button class=\"choice-button\" onclick='addInventory(0,\"Cracked Shield\",\"You can see right through it.\",\"onehand\",\"shield\",1); this.remove()'>Cracked Shield</button>"]
        }
    ],
    [
        /*3.0*/
        {
            heading: "LOOTED VAULT",
            description: "The room bears silent witness to a wealth that has been squandered or stolen, leaving behind nothing but echoing silence and forgotten dreams. Dust-laden shelves, once lined with precious gems and rare artifacts, now cradle only shadows. The vault's stone walls seem to weep in solemn resignation, as if mourning the loss of treasures that once gleamed in the torchlight. This empty treasury is a melancholic testament to the passage of time, the rise and fall of empires, and the inexorable force that eventually strips even the mightiest of treasures from their cherished vaults.",
            choices: ["<button class=\"choice-button\" onclick='gold(0,5); this.remove()'>TAKE 5 GOLD</button>"]
        },
        /*3.1*/
        {},
        /*3.2*/
        {
            heading: "CHAMBER OF THE SACRED...SWITCH?",
            description: "The room itself is a hallowed chamber, its walls adorned with intricate runes and ancient symbols that pulse with latent magic. The air crackles with an enigmatic energy, as if the very walls contain secrets long forgotten by the world above. As one approaches the device, a sense of trepidation courses through them, for this device, though simple in appearance, holds the potential to awaken long- dormant forces.With a surge of anticipation, they reach out to engage the arcane switch, aware that the room's mysteries and the power it holds are poised to unveil themselves, revealing a world of hidden knowledge and untold possibilities.",
            choices: ["<button class=\"choice-button\" onclick='lightSwitch(); this.remove();'>LIGHT SWITCH</button>", "<button class=\"choice-button\" onclick='addInventory(1,\"Rusty Chainmail\",\"Watch out for tetanus!\",\"armor\",\"medium\",4); this.remove()'>Rusty Chainmail</button>"]
        }
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
    if (dir == 'north') {
        gameState.currX -= 1;
    };
    if (dir == 'south') {
        gameState.currX += 1;
    };
    if (dir == 'west') {
        gameState.currY -= 1;
    };
    if (dir == 'east') {
        gameState.currY += 1;
    };

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
    let equipHand = player.inventory.filter(item => (item.type === "onehand" || item.type === "twohand"));
    let equipTorso = player.inventory.filter(item => item.type === "armor");

    //Empties inventory before populating it
    player.handL != "" ? document.getElementById("leftHand").innerHTML = "<option value=" + player.handL.itemName + ">" + player.handL.itemName + "</option>" : document.getElementById("leftHand").innerHTML = "<option></option>";
    player.handR != "" ? document.getElementById("rightHand").innerHTML = "<option value=" + player.handR.itemName + ">" + player.handR.itemName + "</option>" : document.getElementById("rightHand").innerHTML = "<option></option>";;
    player.torso != "" ? document.getElementById("torso").innerHTML = "<option value=" + player.torso.itemName + ">" + player.torso.itemName + "</option>" : document.getElementById("torso").innerHTML = "<option></option>";;


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
    if (X == (roomMatrix.length - 1) || roomMatrix[X + 1][Y].hasOwnProperty('description') == false) {
        document.getElementById("south-button").disabled = true;
    } else {
        document.getElementById("south-button").disabled = false;
    };
    if (X == 0 || roomMatrix[X - 1][Y].hasOwnProperty('description') == false) {
        document.getElementById("north-button").disabled = true;
    } else {
        document.getElementById("north-button").disabled = false;
    };
    if (Y == (roomMatrix[X].length - 1) || Object.keys(roomMatrix[X][Y + 1]).length === 0) {
        document.getElementById("east-button").disabled = true;
    } else {
        document.getElementById("east-button").disabled = false;
    };
    if (Y == 0 || Object.keys(roomMatrix[X][Y - 1]).length === 0) {
        document.getElementById("west-button").disabled = true;
    } else {
        document.getElementById("west-button").disabled = false;
    };
}


//Creates an alert when the player tries to leave the page
function leavePageAlert() {
    return "Leaving will cause you to lose any unsaved progress...";
}


//Turns the light on in Room 5
function lightSwitch() {
    roomMatrix[1][0].description = 'The dispelling of darkness was not merely a matter of illumination, but a revelation of hidden realms and forgotten truths. Objects once concealed emerged from the void, and long-forgotten sigils and inscriptions come to light.';
    roomMatrix[1][0].choices[0] = "<button class=\"choice-button\" onclick='addInventory(0,\"VERY Fancy Sword\",\"It is incredibly sharp and shiny!\",\"onehand\",\"weapon\",10); this.remove()'>Shiny Sword</button>";
    roomMatrix[gameState.currX][gameState.currY].description += '<br>The light switch sparks! Nothing changes. Not in this room at least...';
    roomMatrix[gameState.currX][gameState.currY].choices[0] = "<button disabled class=\"choice-button\">Charred Switch</button>";
    updateContent();
}


function addInventory(choiceNumber, itemName, description, type, subtype, value) {
    //Adds 'item' to inventory
    player.inventory.push({
        itemName,
        description,
        type,
        subtype,
        value
    });
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
    document.getElementById("colorname").innerText = "[ " + color + " ]";
}

//Changes the name back to blank when mouse leaves color square
function resetcurrentcolor() {
    document.getElementById("colorname").innerHTML = "";
}


function updateInventory(item, slot) {

    const equippedItem = player.inventory.find((element) => element.itemName === item);
    index = player.inventory.indexOf(equippedItem);

    //1. Splices equipped item from inventory
    //2. Pushes the players currently equipped item back into their inventory
    //3. Updates currently equipped item in appropriate slot
    switch (slot) {
        case "handL":
            /*1*/ player.inventory.splice(index, 1);
            /*2*/ player.handL != "" ? player.inventory.push(player.handL) : "";
            if (equippedItem.type === "twohand") { player.handR != "" ? player.inventory.push(player.handR) : ""; player.handR = equippedItem; };
            /*3*/ player.handL = equippedItem;

            break;
        case "handR":
            /*1*/ player.inventory.splice(index, 1);
            /*2*/ player.handR != "" ? player.inventory.push(player.handR) : "";
            if (equippedItem.type === "twohand") { player.handL != "" ? player.inventory.push(player.handL) : ""; player.handL = equippedItem; };
            /*3*/ player.handR = equippedItem;
            break;
        case "torso":
            /*1*/ player.inventory.splice(index, 1);
            /*2*/ player.torso != "" ? player.inventory.push(player.torso) : "";
            /*3*/ player.torso = equippedItem;
            break;
    }
    updateContent();
}