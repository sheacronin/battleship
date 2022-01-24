# BattleBug

[Live Site](https://sheacronin.github.io/battleship/).

An insect-themed Battleship game that can be played against a computer or another human.

## How to Play

First, select whether each player is a computer or not, then optionally enter any human player's name. Click "Play" and Player 1's empty board will appear.

Player 1 enters the coordinates for where the topmost and leftmost unit of each bug will be placed on the board by typing the coordinate in each bug's input box (in the format of a capital letter and number, for example, "A1") and clicking "Place". Each bug can be rotated before being placed with the rotation icon button. If the player does not wish to manually place every bug, they can click the "Place Bugs Randomly" button for their remaining bugs to be placed randomly on their board. Once Player 1 places all their bugs, a human Player 2 will have the opportunity to do the same.

Once all bugs are placed on the boards, Player 1 will go first and may click any coordinate on their enemy's board. The message banner at the top of the page will announce if the attack was a hit or a miss, and the clicked unit will turn red for a hit and grey for a miss. Next, Player 2 will take their turn and the cycle will continue.

The message banner will announce when a bug has been "swatted", or all of its units have been hit by the opposing player. This bug will appear greyed out on the board.

The game will end when all of one player's bugs have been swatted. The player who swatted all of the bugs on the opposing board wins! A button to play again will appear. When clicked, the user will be returned to the setup screen.

## Features

If two humans are playing BattleBug, a screen instructing the previous player to pass to the next player will appear after each turn is taken.

On smaller screens and mobile devices, the player will see only one board at a time, primarly the enemy board. During their turn, the player can click the "Other Board" button to see the other board that they are not currently viewing. Larger screens will see both boards at the same time.

## Technology

This game was built with JavaScript using Test Driven Development with Jest. The player, game loop, board, and bugs are each broken up into their own modules with separate responsibilities.
