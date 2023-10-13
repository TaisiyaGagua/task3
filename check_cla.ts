type ClaCheckResult = {
    isCorrect: boolean;
    errorMessage: string | undefined;
};

function checkCLA(strings: string[]): ClaCheckResult {
    const length = strings.length;

    if (length === 0 || length < 3 || length % 2 === 0) {
        return {
            isCorrect: false,
            errorMessage:
                length === 0
                    ? "You have not entered game elements. Please enter 3 or more items. For example: rock paper scissors"
                    : length < 3
                    ? "You entered less than 3 elements. Please enter 3 or more items. For example: 1 2 3 4 5"
                    : "You entered an even number of elements. Please enter an odd number of elements. For example: A B C D G F E",
        };
    }

    return {
        isCorrect: true,
        errorMessage: undefined,
    };
}

export { checkCLA };
