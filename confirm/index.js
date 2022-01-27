if (confirm('JavaScript появился в 1995 году?')) {
	alert('Верно')
} else {
	alert('JavaScript появился в 1995 году')
}

if (confirm('Спецификация JavaScript называется ECMAScript?')) {
	alert('Верно')
} else {
	alert('Спецификация JavaScript называется ECMAScript')
}

if (confirm('JavaScript был создан за 1 месяц?')) {
	alert('Нет, JavaScript был создан за 10 дней')
} else {
	alert('Верно')
}

// 4 cycles

let i = 0
while (i < 3) {
	let newStudent = prompt('Введите имя нового студента!')
	newStudent = newStudent.trim()
	if (newStudent) {
		alert(`Добро пожаловать, ${newStudent}!`)
	}
	i += 1
}

let j = 0
do {
	let newStudent = prompt('Введите имя нового студента!')
	newStudent = newStudent.trim()
	if (newStudent) {
		alert(`Добро пожаловать, ${newStudent}!`)
	}
	j += 1
} while (j < 3);

// 5 cycles

let sum = 0
for (let i = 0; i <= 100; i++) {
	sum += i
}
alert(sum)