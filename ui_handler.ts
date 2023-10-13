import readline from "readline";
import { Action } from "./input_actions";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function displayMenu(
    callback: (action: Action, input?: string, elements?: string[]) => void,
    elements: string[]
): void {
    console.log("Available moves:");

    elements.forEach((element, index) => {
        console.log(`${index + 1} - ${element}`);
    });

    console.log("0 - exit");
    console.log("? - help");

    rl.question("Enter your move: ", (input) => {
        switch (input) {
            case "0":
                callback(Action.Exit);
                rl.close();
                break;
            case "?":
                callback(Action.Help);
                displayMenu(callback, elements);
                break;
            default:
                if (/^\d+$/.test(input)) {
                    const selectedIndex = parseInt(input, 10) - 1;
                    if (selectedIndex >= 0 && selectedIndex < elements.length) {
                        callback(Action.Move, input, elements);
                    } else {
                        callback(Action.Error, input, elements);
                    }
                } else {
                    callback(Action.Error);
                }
                break;
        }
    });
}

export { displayMenu };
