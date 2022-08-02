export const inputValidator = (data) => {
    console.log(data);

    if (Object.values(data).some(x => x.trim() === '')) {
        return false;
    }

    return true;
}