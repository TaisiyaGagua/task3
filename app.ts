import { getElements } from "./cla_processor";
import { checkCLA } from "./check_cla";
import { displayMenu } from "./ui_handler";
import { computerMove } from "./comp";
import { calculateGameResult } from "./game_rules";
import { Action } from "./input_actions";
import { showTable } from "./help_table";
import { showHMAC } from "./hmac_generation";

const checkResult = checkCLA(process.argv.slice(2));
let gameElements: string[];
if (checkResult.isCorrect === true) {
    gameElements = getElements(process.argv.slice(2));
} else {
    console.log(checkResult.errorMessage);
    checkResult;
}
let compMove = computerMove(gameElements);

const key = showHMAC(compMove);
displayMenu(callback, gameElements);

function callback(action: Action, input?, elements?) {
    switch (action) {
        case Action.Exit: {
            console.log("Goodbye!");
            break;
        }
        case Action.Help: {
            showTable(gameElements);
            break;
        }
        case Action.Move: {
            const choiceIndex = parseInt(input) - 1;

            if (choiceIndex >= 0 && choiceIndex < elements.length) {
                const selectedElement = elements[choiceIndex];
                console.log(`Your move: ${selectedElement}`);

                console.log(`Computer move: ${compMove}`);
                if (compMove === gameElements[choiceIndex]) {
                    console.log("Draw!");
                    console.log(key);
                    break;
                } else {
                    console.log(
                        calculateGameResult(gameElements, choiceIndex, compMove)
                    );
                    console.log(key);
                }

                break;
            }
        }

        case Action.Error: {
            console.log("Invalid input. Please enter a valid move.");
            displayMenu(callback, elements);
            break;
        }
    }
}
