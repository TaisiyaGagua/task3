// function calculateGameResult(
//     elements: string[],
//     userMoveIndex: number,
//     computerMove: string
// ) {
//     const availableCombinations = elements.length - 1;
//     const winLoseCount = availableCombinations / 2;

//     enum CalculationDirection {
//         Right,
//         Left,
//     }

//     if (userMoveIndex >= winLoseCount) {
//         defineWinLoseConditions(CalculationDirection.Left);
//     } else {
//         defineWinLoseConditions(CalculationDirection.Right);
//     }

//     function defineWinLoseConditions(direction: CalculationDirection) {
//         if (direction === CalculationDirection.Left) {
//             let loseIndex = userMoveIndex - winLoseCount;
//             let losers = elements.splice(loseIndex, winLoseCount);
//             if (losers.includes(computerMove)) {
//                 console.log("You win!");
//             } else {
//                 console.log("You lose!");
//             }
//         } else {
//             let winIndex = userMoveIndex + winLoseCount;
//             let winers = elements.splice(winIndex, winLoseCount);
//             if (winers.includes(computerMove)) {
//                 console.log("You lose!");
//             } else {
//                 console.log("You win!");
//             }
//         }
//     }
// }
// export { calculateGameResult };

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
