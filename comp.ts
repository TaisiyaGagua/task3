import { createHmac } from "crypto";

function computerMove(elements: string[]): string {
    let randCompMoveIndex = Math.floor(Math.random() * elements.length);
    return elements[randCompMoveIndex];
}

export { computerMove };
