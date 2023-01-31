const daysUK = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П’ятниця",
    "Субота",
];
const daysEN = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let loginNow = `${daysEN[new Date().getDay()]}${new Date().getHours()}${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`.toLocaleLowerCase();
let passwordNow = `${daysUK[new Date().getDay()]}${new Date().getDate()}${new Date().getMonth() + 1}${new Date().getFullYear()}${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`.toLocaleLowerCase();
console.log(loginNow)
console.log(passwordNow)
export {loginNow, passwordNow}