// 10.1

// const users = [
// 	{
// 			username: 'David',
// 			status: 'online',
// 			lastActivity: 10
// 	}, 
// 	{
// 			username: 'Lucy',
// 			status: 'offline',
// 			lastActivity: 22
// 	}, 
// 	{
// 			username: 'Bob',
// 			status: 'online',
// 			lastActivity: 104
// 	}
// ]

// const onlineUsers = []
// for (let i = 0; i < users.length; i++) {
// 	if (users[i].status === 'online') {
// 		onlineUsers.push(users[i])
// 	}
// }

// const usersOnlineNames = []
// for (let i = 0; i < onlineUsers.length; i++) {
// 	usersOnlineNames.push(onlineUsers[i].username)
// }

// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(', ')}`)

// 10.2

// const ordersArr = [4, 2, 1, 3]
// const people = [
// 	{ id: 1, name: "Максим" },
// 	{ id: 2, name: "Николай" },
// 	{ id: 3, name: "Ангелина" },
// 	{ id: 4, name: "Виталий" },
// ]

// const orderNew = []
// function giveTalonsInOrder (people, orders) {
// 	orders.forEach((item) => {
// 		orderNew.push(people[item - 1])
// 	})
// }

// giveTalonsInOrder(people, ordersArr)

// 10.3

// function handleObject (obj, key, action) {
// 	if (action === 'get') {
// 		return obj[key]
// 	}

// 	if (action === 'add') {
// 		return obj[key] = ''
// 	}

// 	if (action === 'delete') {
// 		delete obj[key]
// 		return obj
// 	}
// }

// const student = {
// 	name: 'Maxim',
// 	programmingLanguage: 'JavaScript',
// }

// const result = handleObject(student, 'age', 'add')
// console.log('result', result)

// 10.4

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent (student, jobName) {
	student.jobName = jobName
	alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')

const projectInfo = {
	name: 'The best project',
	numberOfDevelopers: 5,
 };
	
 const changeProjectValue = (key, newValue) => {
	projectInfo[key] = newValue;
 };
	
 changeProjectValue('numberOfDevelopers', 8);
 console.log('numberOfDevelopers', projectInfo.numberOfDevelopers);