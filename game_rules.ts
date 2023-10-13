enum CalculationDirection {
    Right,
    Left,
}

function calculateGameResult(
    elements: string[],
    userMoveIndex: number,
    computerMove: string
) {
    const totalElements = elements.length;
    const halfElements = totalElements / 2;
    const rightHalf = elements
        .slice(userMoveIndex + 1)
        .concat(elements.slice(0, userMoveIndex));
    const leftHalf = rightHalf.slice(halfElements);
    const rightHalfWin = rightHalf.slice(0, halfElements);

    if (rightHalfWin.includes(computerMove)) {
        return defineWinLoseConditions(CalculationDirection.Right);
    } else {
        return defineWinLoseConditions(CalculationDirection.Left);
    }

    function defineWinLoseConditions(direction: CalculationDirection) {
        if (direction === CalculationDirection.Left) {
            if (leftHalf.includes(computerMove)) {
                return "You win!";
            } else {
                return "You lose!";
            }
        } else {
            if (rightHalf.includes(computerMove)) {
                return "You lose!";
            } else {
                return "You win!";
            }
        }
    }
}

export { calculateGameResult };
