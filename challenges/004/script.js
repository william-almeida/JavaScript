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

  // certificando se o ano de nascimento é maior
  if (birthYear > currentYear) {

    window.alert("Por favor, digite um ano válido!!!")

  } else {
    // MALE
    if (gender[0].checked) {
      if (yearOld <= 13 ) {
        imageSource = "male-kid.jpg"
        // criança
  
      }  else if (yearOld <= 18) {
        imageSource = "male-teen.jpg"
        // adolescente
  
      } else if (yearOld <= 55) {
        imageSource = "male-adult.jpg"
        // adulto
  
      } else if (yearOld <= 120) {
        imageSource = "male-old.jpg"
        // idoso
  
      }

    // FEMALE
    } else {
      if (yearOld <= 13 ) {
        imageSource = "female-kid.jpg"
        // criança
  
      }  else if (yearOld <= 18) {
        imageSource = "female-teen.jpg"
        // adolescente
  
      } else if (yearOld <= 55) {
        imageSource = "female-adult.jpg"
        // adulta
  
      } else if (yearOld <= 120) {
        imageSource = "female-old.jpg"
        // idosa
        
      } else {
        
      }
    }
  }

  image.src = `./images/${imageSource}`
  
}