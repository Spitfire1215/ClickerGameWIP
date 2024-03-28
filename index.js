//The starting point for the number of each building currently owned
let pixels = 0;
let goblins = 0;
let barbarians = 0;
let buffOgres = 0;
let centaurs = 0;
let dwarfmfs = 0;
let archmages = 0;

//sets the value of pixels being gained per x seconds
let goblinvalue = 0.5;
let barbarianvalue = 3;
let buffogrevalue = 9;
let centaurvalue = 22;
let dwarfvalue = 35;
let archmagevalue = 69;

//This text will change with each and every button press//
const text = document.querySelector("#text");

//Unit purchasing buttons//
const archmage = document.querySelector('#archmage');
const dwarfmf = document.querySelector('#dwarfmf');
const centaur = document.querySelector('#centaur');
const buffogre = document.querySelector('#buffogre');
const barbarian = document.querySelector('#barbarian');
const goblinw = document.querySelector('#goblinw');

//Number of each unit owned//
const archmageNumber = document.querySelector("#archmageNumber");
const dwarfmfNumber = document.querySelector("#dwarfmfNumber");
const centaurNumber = document.querySelector("#centaurNumber");
const buffogreNumber = document.querySelector("#buffogreNumber");
const barbarianNumber = document.querySelector("#barbarianNumber");
const goblinwNumber = document.querySelector("#goblinwNumber");

const pixelText = document.querySelector("#pixelText");

const clicker = document.querySelector('#clicker');

//initialize buttons
clicker.onclick = addPixels;
goblinw.onclick = buyGoblinw;
barbarian.onclick = buyBarbarian;
buffogre.onclick = buyBuffOgre;
centaur.onclick = buyCentaur;
dwarfmf.onclick = buyDwarfmf;
archmage.onclick = buyArchmage;

//when button is clicked: adds 1 pixel, updates pixels mined number
function addPixels() {
    pixels += 1;

    pixelText.innerText = pixels;
    text.innerText = ('You mined a Pixel!');
};

//A list of functions for purchasing buildings
function buyGoblinw() {
    if (pixels >= 50) {
    pixels -= 50;
    goblins++;
    pixelText.innerText = pixels;
    goblinwNumber.innerText = goblins;
    text.innerText = ('You hired a Goblin Worker! He grabs a picaxe and clumsily begins mining for Pixels.');
    } else {
text.innerText = "You don't have enough pixels. The Goblin flips you off and hobbles away.";
}
};

function buyBarbarian() {
    if (pixels >= 180) {
        pixels -= 180;
        barbarians++;
        pixelText.innerText = pixels;
        barbarianNumber.innerText = barbarians;
        text.innerText = ('You hired a Barbarian Miner! He takes a hearty bite of mutton, then grabs a picaxe and a mug of mead and begins mining for Pixels.');
        } else {
    text.innerText = "You don't have enough pixels. The Barbarian shoots you an intimidating look and exhales through his nose before walking away.";
    }
};

function buyBuffOgre() {
    if (pixels >= 560) {
        pixels -= 560;
        buffOgres++;
        pixelText.innerText = pixels;
        buffogreNumber.innerText = buffOgres;
        text.innerText = ('You hired a Buff Ogre! He replaces the tree trunk-like club he normally carries around with a picaxe! He flexes his biceps at you and gives a slightly unsettling, but friendly grin. He then begins to mine.');
        } else {
    text.innerText = "You don't have enough pixels. The Buff Ogre gives you a puzzling look before getting distracted by spotting a nearby mirror and promptly walks over and flexes to himself, completely forgetting that he was talking to you.";
    }
};

function buyCentaur() {
    if (pixels >= 999) {
        pixels -= 999;
        centaurs++;
        pixelText.innerText = pixels;
        centaurNumber.innerText = centaurs;
        text.innerText = ('You hired a Centaur Hauler! He equips his lower horse half with a harness capable of carrying pixels and quickly gallops off to collect and deliver them.');
        } else {
    text.innerText = "You don't have enough pixels. The Centaur scoffs and gallops away.";
    }
};

function buyDwarfmf() {
    if (pixels >= 2100) {
        pixels -= 2100;
        dwarfmfs++;
        pixelText.innerText = pixels;
        dwarfmfNumber.innerText = dwarfmfs;
        text.innerText = ('You hired a Dwarf Mine Foreman! He pushes a crate into the work area to stand on to make himself appear taller and to see the surroundings better and begins supervising the other units.');
        } else {
    text.innerText = "You don't have enough pixels. The Dwarf spits on the ground towards you with an audible 'Puhhh' sound, turns around and stomps away.";
    }
};

function buyArchmage() {
    if (pixels >= 6500) {
        pixels -= 6500;
        archmages++;
        pixelText.innerText = pixels;
        goblinwNumber.innerText = archmages;
        text.innerText = ('You hired an Archmage! He gives a slight chuckle as he raises his arm with an open hand. A magic staff seemed to appear out of thin air in his grasp as he closed his hand. "Teleportiere mich woanders hin!" he exclaimed, causing a quick flash of light, leaving nothing but a fresh baked cream puff and hot coffee on the table for his new boss (You, dummy.). He had transported himself to the work area and was already casting powerful spells that put the other worker types to shame in terms of efficiency.');
        } else {
    text.innerText = "You don't have enough pixels. The Archmage shakes his head in dissapointment before casting a spell. 'Teleportiere mich woanders hin!' he exclaimed, causing a quick flash of light. The light had gone away, and so had the Archmage.";
    }
};

//how many pixels and how often you receive them from the above units

function goblinPixels() {
    if (goblins >= 1) {
    pixels += goblins + goblinvalue;
    pixelText.innerText = pixels;
}
};

(setInterval(goblinPixels, 2000));

function barbarianPixels() {
    if (barbarians >= 1) {
    pixels += barbarians + barbarianvalue;
    pixelText.innerText = pixels;
}
};

(setInterval(barbarianPixels, 2000));

function buffogrePixels() {
    if (buffOgres >= 1) {
    pixels += buffOgres + buffogrevalue;
    pixelText.innerText = pixels;
}
};

(setInterval(buffogrePixels, 2000));

function centaurPixels() {
    if (centaurs >= 1) {
    pixels += centaurs + centaurvaluevalue;
    pixelText.innerText = pixels;
}
};

(setInterval(centaurPixels, 1000));

function dwarfPixels() {
    if (dwarfmfs >= 1) {
    pixels += dwarfmfs + dwarfvalue;
    pixelText.innerText = pixels;
}
};

(setInterval(dwarfPixels, 1000));

function archmagePixels() {
    if (archmages >= 1) {
    pixels += archmages + archmagevalue;
    pixelText.innerText = pixels;
}
};

(setInterval(archmagePixels, 1000));

//unit description dropdown

function dropdownDescription1() {
    var desc1 = document.getElementById("description1");
    if (desc1.style.display === "none") {
      desc1.style.display = "block";
    } else {
      desc1.style.display = "none";
    }
  };

  function dropdownDescription2() {
    var desc2 = document.getElementById("description2");
    if (desc2.style.display === "none") {
      desc2.style.display = "block";
    } else {
      desc2.style.display = "none";
    }
  };

  function dropdownDescription3() {
    var desc3 = document.getElementById("description3");
    if (desc3.style.display === "none") {
      desc3.style.display = "block";
    } else {
      desc3.style.display = "none";
    }
  }

  function dropdownDescription4() {
    var desc4 = document.getElementById("description4");
    if (desc4.style.display === "none") {
      desc4.style.display = "block";
    } else {
      desc4.style.display = "none";
    }
  }

  function dropdownDescription5() {
    var desc5 = document.getElementById("description5");
    if (desc5.style.display === "none") {
      desc5.style.display = "block";
    } else {
      desc5.style.display = "none";
    }
  }

  function dropdownDescription6() {
    var desc6 = document.getElementById("description6");
    if (desc6.style.display === "none") {
      desc6.style.display = "block";
    } else {
      desc6.style.display = "none";
    }
  }