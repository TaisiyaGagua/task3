function computerMove(elements: string[]): string {
    const randCompMoveIndex = Math.floor(Math.random() * elements.length);
    return elements[randCompMoveIndex];
}

export { computerMove };
