const daysContainer = document.getElementById('days')
const hoursContainer = document.getElementById('hours')
const minutesContainer = document.getElementById('minutes')
const secondsContainer = document.getElementById('seconds')

let seconds = 1000
let minutes = seconds * 60
let hours = minutes * 60
let days = hours * 24

setInterval(countdown, 1000)

function countdown() {
    const countDate  = new Date("Jan 1, 2024 00:00:00").getTime()
    const now = new Date().getTime()
    const remainingTime = countDate - now

    let displayDays = Math.floor(remainingTime / days)
    let displayHours = Math.floor((remainingTime % days) / hours)
    let displayMinutes = Math.floor((remainingTime % hours) / minutes)
    let displaySeconds = Math.floor((remainingTime % minutes) / seconds)

    displayDays = displayDays < 10 ? '0' + displayDays : displayDays
    displayHours = displayHours < 10 ? '0' + displayHours : displayHours
    displayMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes
    displaySeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds


    daysContainer.innerText = displayDays
    hoursContainer.innerHTML = displayHours
    minutesContainer.innerHTML = displayMinutes
    secondsContainer.innerHTML = displaySeconds

    if(remainingTime <= 0) {
        daysContainer.innerHTML = '00'
        hoursContainer.innerHTML = '00'
        minutesContainer.innerHTML = '00'
        secondsContainer.innerHTML = '00'
    }
}