type ClaCheckResult = {
    isCorrect: boolean;
    errorMessage: string | undefined;
};

function checkCLA(strings): ClaCheckResult {
    if (strings.length === 0)
        return {
            isCorrect: false,
            errorMessage:
                "You have not entered game elements. Please enter 3 or more items. For example: rock paper scissors",
        };
    if (strings.length < 3)
        return {
            isCorrect: false,
            errorMessage:
                "You entered less than 3 elements. Please enter 3 or more items. For example: 1 2 3 4 5",
        };
    if (strings.length % 2 === 0)
        return {
            isCorrect: false,
            errorMessage:
                "You entered an even number of elements. Please enter an odd number of elements. For example: A B C D G F E",
        };
    return {
        isCorrect: true,
        errorMessage: undefined,
    };
}

export { checkCLA };
