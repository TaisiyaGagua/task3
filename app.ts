import { getElements } from "./cla_processor";
import { checkCLA } from "./check_cla";
import { displayMenu } from "./ui_handler";
import { computerMove } from "./generate_pc_move";
import { calculateGameResult } from "./game_rules";
import { Action } from "./input_actions";
import { showTable } from "./help_table";
import { showHMAC } from "./hmac_generation";

function startGame() {
    const checkResult = checkCLA(process.argv.slice(2));

    if (checkResult.isCorrect) {
        const gameElements = getElements(process.argv.slice(2));
        const compMove = computerMove(gameElements);
        const key = showHMAC(compMove);

        displayMenu((action, input, elements) => {
            handleUserAction(
                action,
                input,
                elements,
                gameElements,
                compMove,
                key
            );
        }, gameElements);
    } else {
        console.log(checkResult.errorMessage);
        process.exit();
    }
}

function handleUserAction(
    action: Action,
    input: string | undefined,
    elements: string[] | undefined,
    gameElements: string[],
    compMove: string,
    key: string
) {
    switch (action) {
        case Action.Exit:
            console.log("Goodbye!");
            break;

        case Action.Help:
            showTable(gameElements);
            break;

        case Action.Move:
            const choiceIndex = parseInt(input || "0") - 1;

            if (choiceIndex >= 0 && choiceIndex < (elements || []).length) {
                const selectedElement = elements[choiceIndex];
                console.log(`Your move: ${selectedElement}`);
                console.log(`Computer move: ${compMove}`);

                if (compMove === gameElements[choiceIndex]) {
                    console.log("Draw!");
                } else {
                    console.log(
                        calculateGameResult(gameElements, choiceIndex, compMove)
                    );
                }
                console.log(key);
            }
            process.exit();

        case Action.Error:
            console.log("Invalid input. Please enter a valid move.");
            displayMenu((action, input, elements) => {
                handleUserAction(
                    action,
                    input,
                    elements,
                    gameElements,
                    compMove,
                    key
                );
            }, gameElements);

            break;
    }
}

startGame();
