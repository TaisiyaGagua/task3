import readline from "readline";
import { Action } from "./input_actions";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function displayMenu(
    callback: (action: any, input?, elements?) => void,
    elements: string[]
): void {
    console.log("Available moves:");

    elements.forEach((element, index) => {
        console.log(`${index + 1} - ${element}`);
    });

    console.log("0 - exit");
    console.log("? - help");

    rl.question("Enter your move: ", (input) => {
        if (input === "0") {
            callback(Action.Exit);
            rl.close();
        } else if (input === "?") {
            callback(Action.Help); // ТАБЛИЦА
            displayMenu(callback, elements);
        } else if (/^\d+$/.test(input)) {
            callback(Action.Move, input, elements);
        } else {
            callback(Action.Error);
        }
    });
}

export { displayMenu };
