function loadPhoto() {
  // Birth Year 
  let birthYear = document.querySelector('#birth-year').value
  birthYear = parseInt(birthYear)
  const dateToDay = new Date()
  const currentYear = dateToDay.getFullYear()
  const yearOld = currentYear - birthYear
  
  // Get image 
  const image = document.querySelector("#profile")
  let imageSource = "female-kid.jpg"

  // Get gender
  let gender = document.getElementsByName('gender')
  if (gender[0].checked) {
    if (yearOld <= 13 ) {
      imageSource = "male-kid.jpg"
      
      console.log('okok')
    }  
  } else {
    if (yearOld <= 13 ) {
      imageSource = "female-kid.jpg"
      
      console.log('koko')
    }  
  }

  image.src = `./images/${imageSource}`
  
}