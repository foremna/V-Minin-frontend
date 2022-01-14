// 1

const myName = 'Лада'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен Минин'
const reasonText = 'хочу понимать JavaScript как свой родной язык и создавать крутые сайты, начинать разбираться в любых фреймворках'
const numberOfMonth = '46'

console.log('Всем привет! Меня зовут, ' + myName + '.' + ' Сейчас я изучаю язык программирования ' + programmingLanguage + ' на курсе по ' + programmingLanguage + ' у ' + courseCreatorName)
console.log('Я хочу стать веб-разработчиком, потому что ' + reasonText + '.' + ' До этого я изучала ' + programmingLanguage + ' ' + numberOfMonth + ' месяцев' + ' Я уверена, что пройду данный курс до конца!')

console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.`)
console.log(`Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца!`)

// 2

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца!`

myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT')
console.log(myInfoText)
console.log('Длина строки myInfoText ' + myInfoText.length)
console.log('Первый символ строки myInfoText - ' + myInfoText[0] + ',', 'последний символ строки myInfoText - ' + myInfoText[myInfoText.length -1])

// 3

let userName = prompt('Как Вас зовут?')
userName = userName.trim()
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase()
alert('Вас зовут ' + userName)

// 4

let userAge = prompt('Сколько вам лет?')
userAge = userAge.trim()
userAge = +userAge
alert(`Вас зовут ${userName} и вам ${userAge} лет`)

// 5

let userString = prompt('Введите текст для обрезки')
userString = userString.trim()

let startSliceIndex = +prompt('Введите индекс, с которого нужно начать обрезку строки')
let endSliceIndex = +prompt('Введите индекс, которым нужно закончить обрезку строки')

userString = userString.slice(startSliceIndex -1, endSliceIndex) // -1 для удобного пользования, простой смертный пользователь же не знает, что надо вести счет с 0
alert('Результат: ' + userString)

// 6

let userText = prompt('Введите текст').trim()
let wordFromText = prompt(`Введите слово из текста ${userText}`).trim()
let indexOfWord = userText.indexOf(wordFromText)
userText = userText.slice(0, indexOfWord)
alert('Результат: ' + userText)