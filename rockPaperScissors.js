/* eslint-disable no-undef */
const { expect } = require('chai');

function gameResults(player1, player2) {

    if (player1 === player2) {
        return 'It is a tie!';
    }

    if (player1 === 'rock' && player2 === 'paper') {
        return 'Player 2 wins the game!';
    }

    if (player1 === 'paper' && player2 === 'scissors') {
        return 'Player 2 wins the game!';
    }

    if (player1 === 'scissors' && player2 === 'rock') {
        return 'Player 2 wins the game!';
    }

    return 'Player 1 wins the game!';
}

describe("gameResults", function() {

    it("returns 'Player 2 wins the game' if P1 = rock & P2 = paper", function() {

        const output = gameResults('rock', 'paper');

        expect(output).to.equal("Player 2 wins the game!");
    });

    it("returns 'Player 2 wins the game' if P1 = paper & P2 = scissors", function() {

        const output = gameResults('paper', 'scissors');

        expect(output).to.equal("Player 2 wins the game!");
    });

    it("returns 'Player 2 wins the game' if P1 = scissors & P2 = rock", function() {

        const output = gameResults('scissors', 'rock');

        expect(output).to.equal("Player 2 wins the game!");
    });

});