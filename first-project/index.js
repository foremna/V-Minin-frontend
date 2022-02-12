// 13.1

class Student {
	constructor (name, age) {
		this.name = name
		this.age = age
		this.technologies = []
		this.status = 'Junior'
	}

	setTechnologies(technologies) {
		this.technologies = [
			...this.technologies,
			...technologies,
		]
	}
	
	setNewStatus (newStatus) {
		this.status = newStatus
	}
}

const student = new Student ('Maxim', 20)
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ])
student.setNewStatus('Middle')
console.log(student)

// 13.2
class Person {
	constructor (name, age) {
		this.name = name
		this.age = age
	}

	compareAge (example) {
		this.age >= example.age ? 
		alert(`${this.name} старше, чем ${example.name}`) : 
		alert(`${this.name} младше, чем ${example.name}`)
	}
}

const person1 = new Person('Максим', 24)
const person2 = new Person('Светлана', 36)
const person3 = new Person('Ирина', 23)

person1.compareAge(person2) // Максим младше, чем Светлана 
person2.compareAge(person3) // Светлана старше, чем Ирина 
person3.compareAge(person1) // Ирина младше, чем Максим

// 13.3

class Dictionary {
	constructor (name) {
		this.name = name,
		this.words = {}
	}

	add (word, description) {
		this.words[word] = {
			word,
			description
		}
	}

	remove (key) {
		delete this.words[key]
	}

	get (el) {
		return this.words[el]
	}

	showAllWords () {
		for (let word in this.words) {
			console.log(`${this.words[word].word} - ${this.words[word].description}`)
		}
	}
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')

dictionary.remove('JavaScript')
dictionary.showAllWords()

// 13.4

class HardWordsDictionary extends Dictionary {
	constructor (name) {
		super(name)
	}

	add (word, description, isDifficult = true) {
		this.words[word] = {
			word,
			description,
			isDifficult
		}
	}
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.') 
hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()

// 13.5

class Developer {
	constructor (fullName, age, position) {
		this.fullName = fullName,
		this.age = age,
		this.position = position
		this.technologies = []
	}

	code () {}

	learnNewTechnology (technology) {}
}

class JuniorDeveloper extends Developer {
	constructor (fullName, age) {
		super(fullName, age, 'Junior')
	}

	code () {
		console.log(`${this.position} разработчик пишет код...`)
	}

	learnNewTechnology (technology) {
		this.technologies.push('HTML', 'CSS', 'JavaScript')
	}
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
juniorDeveloper.code()
juniorDeveloper.learnNewTechnology()

class MiddleDeveloper extends Developer {
	constructor (fullName, age) {
		super(fullName, age, 'Middle')
	}

	code () {
		console.log(`${this.position} разработчик пишет код...`)
	}

	learnNewTechnology (technology) {
		this.technologies.push('HTML', 'CSS', 'JavaScript', 'React')
	}
}

const middleDeveloper = new MiddleDeveloper('Игорь', 25)
middleDeveloper.code()
middleDeveloper.learnNewTechnology()

class SeniorDeveloper extends Developer {
	constructor (fullName, age) {
		super(fullName, age, 'Senior')
	}

	code () {
		console.log(`${this.position} разработчик пишет код...`)
	}

	learnNewTechnology (technology) {
		this.technologies.push('HTML', 'CSS', 'JavaScript', 'React', 'NodeJS')
	}	
}

const seniorDeveloper = new SeniorDeveloper('Максим', 30)
seniorDeveloper.code()
seniorDeveloper.learnNewTechnology()