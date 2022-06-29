export const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const getUser = () => localStorage.getItem('user');