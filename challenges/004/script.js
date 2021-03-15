function loadPhoto() {
  let birthYear = document.getElementById('birth-year').value
  birthYear = Number(birthYear)
  const dateToDay = new Date()
  const currentYear = dateToDay.getFullYear()
  const yearOld = currentYear - birthYear
  console.log(yearOld)
  // const birthYear = document.querySelector('#birth-year')
  let res = document.body
   
  res.innerText = `${yearOld}`
}