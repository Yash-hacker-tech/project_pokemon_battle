let pokemons = {
    pikachu: { type: "Electric", img: "https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png", health: 100, moves: ["thunderbolt", "quick_attack", "iron_tail", "electro_ball"] },
    charizard: { type: "Fire/Flying", img: "https://i.pinimg.com/474x/e7/24/4a/e7244aced3860f2bff01f517a6143f97.jpg", health: 100, moves: ["flamethrower", "dragon_claw", "air_slash", "fire_blast"] },
    blastoise: { type: "Water", img: "https://img.pokemondb.net/artwork/large/blastoise.jpg", health: 100, moves: ["hydro_pump", "bite", "skull_bash", "surf"] },
    venusaur: { type: "Grass/Poison", img: "https://img.pokemondb.net/artwork/large/venusaur.jpg", health: 100, moves: ["razor_leaf", "vine_whip", "sludge_bomb", "solar_beam"] },
    alakazam: { type: "Psychic", img: "https://img.pokemondb.net/artwork/large/alakazam.jpg", health: 100, moves: ["psychic", "shadow_ball", "energy_ball", "recover"] },
    gengar: { type: "Ghost/Poison", img: "https://img.pokemondb.net/artwork/large/gengar.jpg", health: 100, moves: ["shadow_ball", "sludge_bomb", "dark_pulse", "thunderbolt"] },
    gyarados: { type: "Water/Flying", img: "https://img.pokemondb.net/artwork/large/gyarados.jpg", health: 100, moves: ["hydro_pump", "dragon_dance", "ice_fang", "crunch"] },
    dragonite: { type: "Dragon/Flying", img: "https://img.pokemondb.net/artwork/large/dragonite.jpg", health: 100, moves: ["dragon_claw", "hurricane", "thunder_punch", "outrage"] },
    pidgeot: { type: "Normal/Flying", img: "https://img.pokemondb.net/artwork/large/pidgeot.jpg", health: 100, moves: ["brave_bird", "heat_wave", "hurricane", "u-turn"] }
};

let moves = {
    thunderbolt: { type: "Electric", damage: 20, pp: 5 },
    quick_attack: { type: "Normal", damage: 10, pp: 10 },
    iron_tail: { type: "Steel", damage: 15, pp: 5 },
    electro_ball: { type: "Electric", damage: 20, pp: 5 },
    flamethrower: { type: "Fire", damage: 25, pp: 5 },
    dragon_claw: { type: "Dragon", damage: 15, pp: 10 },
    air_slash: { type: "Flying", damage: 15, pp: 5 },
    fire_blast: { type: "Fire", damage: 30, pp: 5 },
    hydro_pump: { type: "Water", damage: 25, pp: 5 },
    bite: { type: "Dark", damage: 15, pp: 10 },
    skull_bash: { type: "Normal", damage: 20, pp: 5 },
    surf: { type: "Water", damage: 25, pp: 5 },
    razor_leaf: { type: "Grass", damage: 15, pp: 10 },
    vine_whip: { type: "Grass", damage: 10, pp: 10 },
    sludge_bomb: { type: "Poison", damage: 20, pp: 5 },
    solar_beam: { type: "Grass", damage: 30, pp: 5 },
    psychic: { type: "Psychic", damage: 25, pp: 5 },
    shadow_ball: { type: "Ghost", damage: 20, pp: 5 },
    energy_ball: { type: "Grass", damage: 20, pp: 5 },
    recover: { type: "Normal", damage: 0, pp: 5 },
    dark_pulse: { type: "Dark", damage: 20, pp: 5 },
    dragon_dance: { type: "Dragon", damage: 0, pp: 5 },
    ice_fang: { type: "Ice", damage: 15, pp: 10 },
    crunch: { type: "Dark", damage: 20, pp: 5 },
    hurricane: { type: "Flying", damage: 25, pp: 5 },
    thunder_punch: { type: "Electric", damage: 20, pp: 5 },
    outrage: { type: "Dragon", damage: 30, pp: 5 },
    brave_bird: { type: "Flying", damage: 30, pp: 5 },
    heat_wave: { type: "Fire", damage: 25, pp: 5 },
    u_turn: { type: "Bug", damage: 15, pp: 10 }
};

let typeEffectiveness = {
    Electric: { superEffectiveAgainst: ["Flying", "Water"], notVeryEffectiveAgainst: ["Ground", "Grass", "Dragon", "Electric"], noEffectAgainst: [] },
    Fire: { superEffectiveAgainst: ["Grass", "Ice", "Bug", "Steel"], notVeryEffectiveAgainst: ["Fire", "Water", "Rock", "Dragon"], noEffectAgainst: [] },
    Flying: { superEffectiveAgainst: ["Grass", "Fighting", "Bug"], notVeryEffectiveAgainst: ["Electric", "Rock", "Steel"], noEffectAgainst: [] },
    Water: { superEffectiveAgainst: ["Fire", "Ground", "Rock"], notVeryEffectiveAgainst: ["Water", "Grass", "Dragon"], noEffectAgainst: [] },
    Grass: { superEffectiveAgainst: ["Ground", "Rock", "Water"], notVeryEffectiveAgainst: ["Fire", "Ice", "Poison", "Flying", "Bug", "Grass", "Dragon", "Steel"], noEffectAgainst: [] },
    Poison: { superEffectiveAgainst: ["Grass", "Fairy"], notVeryEffectiveAgainst: ["Poison", "Ground", "Rock", "Ghost", "Steel"], noEffectAgainst: [] },
    Normal: { superEffectiveAgainst: [], notVeryEffectiveAgainst: ["Rock", "Steel"], noEffectAgainst: ["Ghost"] },
    Dragon: { superEffectiveAgainst: ["Dragon"], notVeryEffectiveAgainst: ["Steel"], noEffectAgainst: ["Fairy"] },
    Steel: { superEffectiveAgainst: ["Rock", "Ice", "Fairy"], notVeryEffectiveAgainst: ["Fire", "Water", "Electric", "Steel"], noEffectAgainst: [] },
    Dark: { superEffectiveAgainst: ["Psychic", "Ghost"], notVeryEffectiveAgainst: ["Dark", "Fairy", "Fighting"], noEffectAgainst: [] },
    Bug: { superEffectiveAgainst: ["Grass", "Psychic", "Dark"], notVeryEffectiveAgainst: ["Fire", "Flying", "Rock", "Fighting", "Poison", "Ghost", "Steel", "Fairy"], noEffectAgainst: [] },
    Rock: { superEffectiveAgainst: ["Flying", "Bug", "Fire", "Ice"], notVeryEffectiveAgainst: ["Fighting", "Ground", "Steel"], noEffectAgainst: [] },
    Ice: { superEffectiveAgainst: ["Grass", "Flying", "Ground", "Dragon"], notVeryEffectiveAgainst: ["Fire", "Water", "Ice", "Steel"], noEffectAgainst: [] },
    Ghost: { superEffectiveAgainst: ["Ghost", "Psychic"], notVeryEffectiveAgainst: ["Dark"], noEffectAgainst: ["Normal"] },
    Fairy: { superEffectiveAgainst: ["Dragon", "Dark", "Fighting"], notVeryEffectiveAgainst: ["Fire", "Poison", "Steel"], noEffectAgainst: [] },
    Fighting: { superEffectiveAgainst: ["Normal", "Rock", "Ice", "Dark", "Steel"], notVeryEffectiveAgainst: ["Flying", "Poison", "Bug", "Psychic", "Fairy"], noEffectAgainst: ["Ghost"] },
    Psychic: { superEffectiveAgainst: ["Fighting", "Poison"], notVeryEffectiveAgainst: ["Psychic", "Steel"], noEffectAgainst: ["Dark"] },
    Ground: { superEffectiveAgainst: ["Fire", "Electric", "Poison", "Rock", "Steel"], notVeryEffectiveAgainst: ["Grass", "Bug"], noEffectAgainst: ["Flying"] }
};

let player1, player2;
let currentPlayer = "player1";


let attackSound = new Audio('https://www.myinstants.com/media/sounds/pokemon-hit.mp3');
let superEffectiveSound = new Audio('https://www.myinstants.com/media/sounds/super-effective.mp3');
let tapSound = new Audio('https://www.myinstants.com/media/sounds/button-click.mp3');
let backgroundMusic = new Audio('https://www.myinstants.com/media/sounds/pokemon-battle.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;


function startBattle() {
    backgroundMusic.play();
    player1 = document.getElementById("player1-select").value;
    player2 = document.getElementById("player2-select").value;
    if(player1 === player2)
    {
        disableMoves("player1-moves");
        disableMoves("player2-moves");
        alert("please choose different pokemon");
    }
    document.getElementById("player1-name").innerText = player1.toUpperCase();
    document.getElementById("player2-name").innerText = player2.toUpperCase();
    document.getElementById("player1-img").src = pokemons[player1].img;
    document.getElementById("player2-img").src = pokemons[player2].img;
    document.getElementById("battlefield").style.display = "flex";
    createMoveButtons(player1, "player1-moves");
    createMoveButtons(player2, "player2-moves");
    disablePokemonSelection();
    disableMoves("player2-moves");
    enableMoves("player1-moves");
}

function createMoveButtons(pokemon, elementId) {
    let moveDiv = document.getElementById(elementId);
    moveDiv.innerHTML = "";
    pokemons[pokemon].moves.forEach(move => {
        let button = document.createElement("button");
        button.innerText = `${move.replace("_", " ").toUpperCase()} (${moves[move].damage})`;
        button.onclick = () => attack(pokemon, move);
        moveDiv.appendChild(button);
    });
}




function attack(attacker, move) {
    tapSound.play();
    let defender = (attacker === player1) ? player2 : player1;
    let baseDamage = moves[move].damage;
    let effectiveness = getEffectiveness(moves[move].type, pokemons[defender].type);
    let finalDamage = baseDamage * effectiveness;
    pokemons[defender].health -= finalDamage;
    if (pokemons[defender].health < 0) pokemons[defender].health = 0;

    let effectivenessText = getEffectivenessText(effectiveness);
    document.getElementById("move-info").innerText = `${attacker.toUpperCase()} used ${move.replace("_", " ").toUpperCase()}! It was ${effectivenessText}.`;

    if (effectiveness > 1) {
        superEffectiveSound.play();
        attackSound.play();
    } else {
        attackSound.play();
    }

    updateHealthBar(defender);

    if (pokemons[defender].health <= 0) {
        document.getElementById("winner").innerText = `${attacker.toUpperCase()} wins!`;
        disableMoves("player1-moves");
        disableMoves("player2-moves");
        backgroundMusic.pause();
    } else {
        switchPlayer();
    }
}

function switchPlayer() {
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
        disableMoves("player1-moves");
        enableMoves("player2-moves");
    } else {
        currentPlayer = "player1";
        disableMoves("player2-moves");
        enableMoves("player1-moves");
    }
}

function getEffectiveness(moveType, defenderType) {
    let types = defenderType.split('/');
    let effectiveness = 1;
    types.forEach(type => {
        if (typeEffectiveness[moveType] && typeEffectiveness[moveType].superEffectiveAgainst.includes(type)) {
            effectiveness *= 2;
        } else if (typeEffectiveness[moveType] && typeEffectiveness[moveType].notVeryEffectiveAgainst.includes(type)) {
            effectiveness *= 0.5;
        }
    });
    return effectiveness;
}

function getEffectivenessText(effectiveness) {
    if (effectiveness > 1) {
        return "Super Effective!";
    } else if (effectiveness < 1) {
        return "Not Very Effective.";
    } else {
        return "Normally Effective.";
    }
}

function updateHealthBar(pokemon) {
    let healthPercentage = (pokemons[pokemon].health / 100) * 100;
    if (pokemon === player1) {
        document.getElementById("player1-health").style.width = healthPercentage + "%";
    } else {
        document.getElementById("player2-health").style.width = healthPercentage + "%";
    }
}

function disableMoves(elementId) {
    let buttons = document.getElementById(elementId).children;
    for (let button of buttons) {
        button.disabled = true;
    }
}

function enableMoves(elementId) {
    let buttons = document.getElementById(elementId).children;
    for (let button of buttons) {
        button.disabled = false;
    }
}

function disablePokemonSelection() {
    document.getElementById("player1-select").disabled = true;
    document.getElementById("player2-select").disabled = true;
}
