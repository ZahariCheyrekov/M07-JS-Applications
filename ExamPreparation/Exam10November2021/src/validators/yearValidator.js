export const yearValidator = (year) => {
    if (!year.trim() || !Number.isInteger(Number(year)) || Number(year) < 0) {
        return false;
    }

    return true;
}