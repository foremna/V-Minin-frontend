// 11.1

const newDate = new Date(2001, 5, 25)

function getDateFormat (date, separator = '.') {
	let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

	if (month <= 9 && month !== 0) {
		month = '0' + date.getMonth()
  } else if (month === 0) {
		return [day, month = 12, year -= 1].join(separator)
	}
  
  if (day <= 9) {
		day = '0' + date.getDate()
  }

	return [day, month, year].join(separator)
}

console.log(getDateFormat(newDate, ', '))

// 11.2

const myBirthday = new Date(2022, 5, 25)

function getDaysBeforeBirthday (nextBirthdayDate) {
	return Math.floor((nextBirthdayDate - new Date()) / 86400000)
}

getDaysBeforeBirthday(myBirthday)

// 11.3

const dateIncrease = new Date()

function addDays (date, days = 1) {
	const dayInMc = 86400000
  const dayMultiplyMc = days * dayInMc
	const daysFromMc = date.getMilliseconds() + dayMultiplyMc
	
	return new Date(Date.now() + daysFromMc)
}

addDays(dateIncrease, 7)