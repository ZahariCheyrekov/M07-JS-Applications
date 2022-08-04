const errorBox = document.getElementById('errorBox');
const errorBoxMessage = errorBox.querySelector('span');

export const notificationHandler = (message) => {
    errorBox.style.display = 'block';
    errorBoxMessage.textContent = message;

    setTimeout(() => {
        errorBox.style.display = 'none';
    }, 3000);
}