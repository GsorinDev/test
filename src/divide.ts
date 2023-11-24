export const divide = (a:number, b:number) => {
    if (b === 0) {
        throw new Error('Division par zéro!');
    }
    return a / b;
}