// 1

const existedUserLogin = 'the_best_user'
const existedUserPassword = 12345678

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

userLogin === existedUserLogin ? alert(`Добро пожаловать, ${userLogin}!`) : alert('Логин и (или) Пароль введены неверно!')
userPassword === existedUserPassword ? alert(`Добро пожаловать, ${userLogin}!`) : alert('Логин и (или) Пароль введены неверно!')

// 2

// Questions
let addition = +prompt('Сколько будет 2 + 2?')
let multiplication = +prompt('Сколько будет 2 * 2?')
let questionPetya = +prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?')
let questionMasha = +prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?')
let additionAndMultiplication = +prompt('Сколько будет 2 + 2 * 2?')

// Answers
let aswerAddition = 4
let aswerMultiplication = 4
let aswerQuestionPetya = 1
let aswerQuestionMasha = 12
let aswerAdditionAndMultiplication = 6

let correctAnswers = 0
let incorrectAnswers = 0

if (addition === aswerAddition) {
	alert('Ответ Верный')
	correctAnswers++
} else {
	alert('Ответ Неверный')
	incorrectAnswers++
}

if (multiplication === aswerMultiplication) {
	alert('Ответ Верный')
	correctAnswers++
} else {
	alert('Ответ Неверный')
	incorrectAnswers++
}

if (questionPetya === aswerQuestionPetya) {
	alert('Ответ Верный')
	correctAnswers++
} else {
	alert('Ответ Неверный')
	incorrectAnswers++
}

if (questionMasha === aswerQuestionMasha) {
	alert('Ответ Верный')
	correctAnswers++
} else {
	alert('Ответ Неверный')
	incorrectAnswers++
}

if (additionAndMultiplication === aswerAdditionAndMultiplication) {
	alert('Ответ Верный')
	correctAnswers++
} else {
	alert('Ответ Неверный')
	incorrectAnswers++
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)