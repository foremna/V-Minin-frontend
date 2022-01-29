// 1

function getName1 (name) {
	return `Имя равно ${name}`
}

let resultGetName1 = getName1('Константин')
console.log(resultGetName1)

const getName2 = function (name) {
	return `Имя равно ${name}`
}

let resultGetName2 = getName2('Роза')
console.log(resultGetName2)

const getName3 = name => `Имя равно ${name}`
let resultGetName3 = getName3('Аманда')
console.log(resultGetName3)

// 2

function getSumOfNumbers (number, type = 'odd') {
	let sum = 0

	for (let i = 0; i <= number; i += 1) {
		if (type === 'odd') {
			if (i % 2 !== 0) {
				sum += i
			}
		} else if (type === 'even') {
			if (i % 2 === 0) {
				sum += i
			}
		} else if (type === '') {
			sum += i
		}
	}
	return sum
}

console.log(getSumOfNumbers(10, 'even'))

// 3

let count = 0

function getDivisorsCount (number = 1) {
	for (let i = 0; i <= number; i++) {
		if (number < 1 || !Number.isInteger(number)) {
			alert('number должен быть целым числом и больше нуля!')
		} else if (number % i === 0) {
			count++
		}
	}
	return count
}

getDivisorsCount(5)