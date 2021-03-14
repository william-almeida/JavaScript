const result = document.querySelector('section.result')
const img = document.querySelector('img#currentHourImage')
// background 
const bgContainer = document.querySelector('div.container')
const bgScetion = result.style.backgroungColor

const currentDate = new Date()
const currentHour = currentDate.getHours()



if (currentHour >= 6 && currentHour < 12) {
    // morgning - manhã
    img.src= './images/morning.jpg'
    bgContainer.style.background = "#f2f3f5"
} else if (currentHour >= 12 && currentHour < 18) {
    // afternoon
    img.src= './images/afternoon.jpg'
} else if (currentHour >= 18 && currentHour < 0) {
    img.src= './images/night.jpg'
}