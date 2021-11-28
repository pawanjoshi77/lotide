function diceRoller(num) {

    const numArray = []

    for (let i = 0; i < num; i++)
        numArray[i] = Math.floor(Math.random() * 6 + 1);

    return console.log(`Rolled ${num} dices: ${numArray.join(',')}`);
}

diceRoller(3);