export const positiveNumberValidator = (data) => {
    if (Object.values(data).some(n => Number(n.trim()) < 0)) {
        return false;
    }

    return true;
}