// 9.1

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

function giveParcel () {
	for (let i = 0; i < 2; i++) {
		let gotParcel = peopleWaiting.shift()
		alert(`${gotParcel} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
	}
}

giveParcel()

function leaveQueueWithoutParcel () {
	let leaveWithoutParcel = peopleWaiting.shift()
	alert(`${leaveWithoutParcel} не получил(а) посылку и ушел(ла) из очереди”.`)

	for (let i = peopleWaiting.length; i--;) {
		leaveWithoutParcel = peopleWaiting.shift()
		alert(`${leaveWithoutParcel} не получил(а) посылку и ушел(ла) из очереди”.`)
	}
}

leaveQueueWithoutParcel()

// 9.2

function getSumOfSequence (number) {
	let numbers = []
	for (let i = 1; i < number + 1; i++) {
		numbers.push(i)
	}
	return numbers[0] + numbers[numbers.length - 1]
}

getSumOfSequence(5)

// 9.3

const coffees = ['Latte', 'Cappuccino', 'Americano']

let coffeeName = prompt('Поиск кофе по названию:')
coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLowerCase()

let hasIndexCoffee = coffees.findIndex((coffee) => {return coffee === coffeeName})

let searchedCoffee = coffees.find((coffee) => {
	return coffee === coffeeName
})

if (searchedCoffee === coffeeName) {
	alert(`Держите ваш любимый кофе ${searchedCoffee}. Он ${hasIndexCoffee + 1}-й по популярности в нашей кофейне.`)
} else {
	alert('К сожалению, такого вида кофе нет в наличии')
}

9.4

const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((item) => {
	return item + 0.5
})

function messageOfUdatedPricesCoffee () {
	coffees.forEach((name, index) => {
		alert(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`)
	})
}

messageOfUdatedPricesCoffee()

// 9.5

const clientsEstimations = []

function askClientToGiveEstimation () {
	let estimate = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?')

	if (estimate >= 1 && estimate <= 10) {
		clientsEstimations.push(estimate)
	} else {
		return
	}
}

for (let i = 0; i < 5; i++) {
	askClientToGiveEstimation()
}

let goodEstimations = 0

const filteredGoodEstimations = clientsEstimations.filter((estimate) => {
	if (estimate > 5) {
		return goodEstimations += 1
	}
})

let notGoodEstimations = 0

const filteredNotGoodEstimations = clientsEstimations.filter((estimate) => {
	if (estimate <= 5) {
		return notGoodEstimations += 1
	}
})

alert(`Всего положительных оценок: ${goodEstimations}`)
alert(`Всего отрицательных оценок: ${notGoodEstimations}`)

// 9.6

const numbers = [10, 4, 100, -5, 54, 2]

const sumOfElInCube = numbers.map((num) => {
	return Math.pow(num, 3)
})

// Через цикл for
let sumAllElAcrossCycleFor = 0

for (let i = 0; i < numbers.length; i++) {
	sumAllElAcrossCycleFor += sumOfElInCube[i]
}

console.log('sumAllElAcrossFor', sumAllElAcrossCycleFor)

// Через цикл for of
let sumAllElAcrossCycleForOf = 0

for (const num of sumOfElInCube) {
	sumAllElAcrossCycleForOf += num
}

console.log('sumAllElAcrossCycleForOf', sumAllElAcrossCycleForOf)

// Через метод forEach
let sumAllElAcrossCycleForEach = 0

sumOfElInCube.forEach((num) => {
	sumAllElAcrossCycleForEach += num
})

console.log('sumAllElAcrossCycleForEach', sumAllElAcrossCycleForEach)

// Через метод reduce
const sumAllElAcrossReduce = sumOfElInCube.reduce((acc, num) => {
	return acc + num
})

console.log('sumAllElAcrossReduce', sumAllElAcrossReduce)

let alphabetSort = ['b', 'c', 'a', 'd', 'e']
alphabetSort.sort((a, b) => {
	if (a > b) {
		return 1
	}

	if (a < b) {
		return -1
	}

	return 0
})

console.log(alphabetSort)

let alphabetSortReverse = ['b', 'c', 'a', 'd', 'e']
alphabetSortReverse.sort((a, b) => {
	if (a < b) {
		return 1
	}

	if (a > b) {
		return -1
	}

	return 0
})

console.log(alphabetSortReverse)