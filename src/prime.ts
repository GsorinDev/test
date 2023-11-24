export const isPrime = (nb: number) => {
    if (nb <= 1) return false;
    if (nb <= 3) return true;

    if (nb % 2 === 0 || nb % 3 === 0) return false;

    for (let i = 5; i * i <= nb; i += 6) {
        if (nb % i === 0 || nb % (i + 2) === 0) return false;
    }

    return true;
}