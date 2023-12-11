const myAge = '27'
const minAge = '18'

let result = null

if(myAge >= minAge) {
    result = myAge + minAge
    console.log(result) "Вы совершеннолетний"
} else {
    result = myAge - minAge
    console.log(result) "Вам еще нет 18"
}
