//hardcode -> caps and underscores
const ATTACK_VALUE = 10; 
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

//Identifiers
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";


//Globals
let chosenMaxLife
try {
    chosenMaxLife = getUserValue();
} catch (error) {
    console.log(error);
    chosenMaxLife = 100;
    alert("invalid input, health set to default of 100")
};
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];


adjustHealthBars(chosenMaxLife);

function getUserValue() {
    let value;

    value = parseInt(prompt("Maximum life for you and the monster", 100));
    if ((isNaN(value) || value <= 0)) {
        throw {message: "invalid user input, not a number!"}
    }
    return value;
}

//Handlers
function endRound() {
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth);

    
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        alert("last stand");
        increasePlayerHealth(initialPlayerHealth);
        currentPlayerHealth = initialPlayerHealth;
    }
    
    checkHealth();
};

function attackHandler(value) {
    const damage = dealMonsterDamage(value);
    currentMonsterHealth -= damage;
    writeToLog(
        value === ATTACK_VALUE? 
            LOG_EVENT_PLAYER_ATTACK : 
            LOG_EVENT_PLAYER_STRONG_ATTACK, 
        damage, 
        currentMonsterHealth, 
        currentPlayerHealth);

    endRound();
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("cannot heal past max health");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = 20;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth);
    endRound();
}

function checkHealth() {

    let result = null;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("you won");
        result = "win";
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("you lost");
        result = "lost";
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("you have a draw!")
        result = "draw";
    }

    if (result) {
        writeToLog(LOG_EVENT_GAME_OVER, 
            result, 
            currentMonsterHealth, 
            currentPlayerHealth);
    }

    if (currentPlayerHealth <= 0|| currentMonsterHealth <= 0) {
        reset(chosenMaxLife);
    }
}

function reset(value) {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(value);
}

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    }
    switch (event) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = "PLAYER";
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = "PLAYER";
            break;
        default:;
            break;
    }
    battleLog.push(logEntry);
}

function printLogHandler() {
    console.clear();
    let i = 1;
    for (const entry of battleLog) {
        console.log(
            `${i} => ${entry.event
            } ${entry.target? entry.target : ""
            }, ${entry.value
            }, player health: ${entry.finalPlayerHealth
            }, monster health: ${entry.finalMonsterHealth}`)
            i++;
    }
}

//Attach event listeners
attackBtn.addEventListener("click", function() {
    attackHandler(ATTACK_VALUE);
});
strongAttackBtn.addEventListener("click", function() {
    attackHandler(STRONG_ATTACK_VALUE);
});
healBtn.addEventListener("click", function() {
    healPlayerHandler();
});
logBtn.addEventListener("click", function() {
    printLogHandler();
});