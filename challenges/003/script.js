const section = document.querySelector('section')
const img = document.querySelector('img#currentHourImage')
const result = document.querySelector('div#result')

const bodyColor = document.body

const currentDate = new Date()
const currentHour = 15 //currentDate.getHours()

function settings(){
  if (currentHour >= 6 && currentHour < 12) {
    // set css
    bodyColor.style.background = "#bdbdbf"
    section.style.background = "#ffffff"
    // load img
    img.src= './images/morning.jpg'
    // html
    result.innerHTML = `<p> agora são ${currentHour} horas</p>`

  } else if (currentHour >= 12 && currentHour < 18) {
    // set css
    bodyColor.style.background = "#f8b350"
    section.style.background = "#ffffff"
    // load img
    img.src= './images/afternoon.jpg'
    // html
    result.innerHTML = `<p> agora são ${currentHour} horas</p>`
  } else if (currentHour >= 18 && currentHour < 24) {
    // set css
    bodyColor.style.background = "#121214"
    bodyColor.style.color = "#ffffff"
    section.style.background = "#212025"
    section.style.boxShadow = 'none'
    // load img
    img.src= './images/night.jpg'
    // html
    result.innerHTML = `<p> agora são ${currentHour} horas</p>`
  }
}

