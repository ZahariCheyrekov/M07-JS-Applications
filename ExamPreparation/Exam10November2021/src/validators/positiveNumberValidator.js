export const positiveNumberValidator = (data) => {
    if (Object.values(data).some(n => Number(n) < 0)) {
        return false;
    }

    return true;
}