// 12.1

const student = {
	stack: ['HTML'],
	level: 1,
	improveLevel () {
		this.level += 1

		switch (this.level) {
			case 2:
				this.stack.push('CSS')
				break;
			case 3:
				this.stack.push('JavaScript')
				break;
			case 4:
				this.stack.push('React')
				break;
			case 5:
				this.stack.push('NodeJS')
			case this.level > 5:
				alert('Студент выучил все технологии!')
				break;
		}

		return this
	}
}

student
	.improveLevel()
	.improveLevel()
	.improveLevel()
	.improveLevel()
	.improveLevel()

// 12.2

const dog = {
	name: 'Чарли',
	type: 'Собака',
	makeSound() {
		return 'Гав-Гав'
	}
}

const bird = {
	name: 'Петя',
	type: 'Воробей',
	makeSound() {
		return 'Чик-чирик'
	}
}

function makeDomestic (isDomestic) {
	alert(`${this.type} по имени ${this.name} говорит ${this.makeSound()}, является животным? ${isDomestic}`)
	return this
}

const calledMakeDomestic = makeDomestic.call(bird, true)
console.log(calledMakeDomestic)

const aplliedMakeDomestic = makeDomestic.apply(bird, [true])
console.log(aplliedMakeDomestic)

const bindedMakeDomestic = makeDomestic.bind(dog, true)
console.log(bindedMakeDomestic())

// 12.3

const footballer = {
	fullName: 'Cristiano Ronaldo',
	attack: function () {
		console.log(`${this.fullName} сейчас с мячом и начинает атаку!`)
	},
	scoreGoal(sound) {
		console.log(`${this.fullName} забил гол! Вот это да!`)
		this.celebrate(sound)
	},
	celebrate(sound) {
		console.log(sound)
	},
	goToSubstitution: function(newPlayer) {
		console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`)
	}
}

const attack = footballer.attack.bind(footballer)
attack()
const score = footballer.scoreGoal.call(footballer, 'Сиииии')
const substitute = footballer.goToSubstitution.apply(footballer, ['Paulo Dibala'])