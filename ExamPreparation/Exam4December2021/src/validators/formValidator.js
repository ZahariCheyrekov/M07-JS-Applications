export const formValidator = (...data) => {
    for (const value of data) {
        if (!value.trim()) {
            return false;
        }
    }

    return true;
}

export const passwordValidator = (pass, repass) => {
    return pass.trim() == repass.trim();
}