export function validateYear(ev) {
    return ev.target.className == 'day' || ev.target.className == 'date';
}