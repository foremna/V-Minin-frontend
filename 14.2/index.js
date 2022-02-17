const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript',
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока',
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока',
	},
]

const tasksList = document.querySelector('.tasks-list')

for (let i = 0; i < tasks.length; i++) {
	const taskItem = document.createElement('div')
	taskItem.className = 'task-item'
	taskItem.dataset.taskId = tasks[i].id

	const taskItemContainer = document.createElement('div')
	taskItemContainer.className = 'task-item__main-container'
	taskItem.append(taskItemContainer)

	const taskItemContent = document.createElement('div')
	taskItemContent.className = 'task-item__main-content'
	taskItemContainer.append(taskItemContent)

	const formCheckbox = document.createElement('form')
	formCheckbox.className = 'checkbox-form'

	const checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.className = 'checkbox-form__checkbox'
	checkbox.id = tasks[i].id

	const labelForCheckbox = document.createElement('label')
	labelForCheckbox.htmlFor = tasks[i].id

	formCheckbox.append(checkbox)
	formCheckbox.append(labelForCheckbox)

	taskItemContent.append(formCheckbox)

	const taskItemText = document.createElement('span')
	taskItemText.className = 'task-item__text'
	taskItemText.textContent = tasks[i].text

	taskItemContent.append(taskItemText)

	const btnRemoveTask = document.createElement('button')
	btnRemoveTask.className = 'task-item__delete-button default-button delete-button'
	btnRemoveTask.dataset.deleteTaskId = tasks[i].id
	btnRemoveTask.textContent = 'Удалить'

	taskItemContent.append(btnRemoveTask)

	tasksList.append(taskItem)
}