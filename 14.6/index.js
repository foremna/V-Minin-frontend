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

class Task {
  constructor (id, completed, text) {
    this.id = id,
    this.completed = completed,
    this.text = text
  }
}

const tasksList = document.querySelector('.tasks-list')

function createNewTask (id, text) {
  const taskItem = document.createElement('div')
	taskItem.className = 'task-item'
	taskItem.dataset.taskId = id

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
	checkbox.id = id

	const labelForCheckbox = document.createElement('label')
	labelForCheckbox.htmlFor = id

	formCheckbox.append(checkbox)
	formCheckbox.append(labelForCheckbox)

	taskItemContent.append(formCheckbox)

  const taskItemText = document.createElement('span')
  taskItemText.className = 'task-item__text'
	taskItemText.textContent = text

	taskItemContent.append(taskItemText)

	const btnRemoveTask = document.createElement('button')
	btnRemoveTask.className = 'task-item__delete-button default-button delete-button'
	btnRemoveTask.dataset.deleteTaskId = id
	btnRemoveTask.textContent = 'Удалить'

	taskItemContainer.append(btnRemoveTask)

	tasksList.append(taskItem)
}

for (let i = 0; i < tasks.length; i++) {
  createNewTask(tasks[i].id, tasks[i].text)
}

const inputCreateTask = document.querySelector('.create-task-block__input')
const randomId = Date.now().toString()

let textForInputCreateText
let newTask
inputCreateTask.addEventListener('change', (event) => {
  textForInputCreateText = inputCreateTask.value
  newTask = new Task(randomId, false, textForInputCreateText)
})

const formCreateTask = document.querySelector('.create-task-block')
const errorMessage = document.createElement('span')
errorMessage.className = 'error-message-block'
errorMessage.textContent = 'Название задачи не должно быть пустым'

formCreateTask.addEventListener('submit', (event) => {
  event.preventDefault()
  const { target } = event

  for (let i = 0; i < tasks.length; i++) {
    if (target.taskName.value === tasks[i].text) {
      errorMessage.textContent = 'Задача с таким названием уже существует.'
      formCreateTask.append(errorMessage)
      return
    }
  }

  if (target.taskName.value) {
    errorMessage.remove()
    tasks.push(newTask)
    createNewTask(newTask.id, newTask.text)
  } else {
    formCreateTask.append(errorMessage)
  }
})

const body = document.querySelector('body')
const modalOverlay = document.createElement('div')
modalOverlay.className = 'modal-overlay modal-overlay_hidden'

const deleteModal = document.createElement('div')
deleteModal.className = 'delete-modal'
modalOverlay.append(deleteModal)

const deleteModalHeadline = document.createElement('h3')
deleteModalHeadline.className = 'delete-modal__question'
deleteModalHeadline.textContent = 'Вы действительно хотите удалить эту задачу?'
deleteModal.append(deleteModalHeadline)

const deleteModalBtns = document.createElement('div')
deleteModalBtns.className = 'delete-modal__buttons'
deleteModal.append(deleteModalBtns)

const deleteModalBtnCancel = document.createElement('button')
deleteModalBtnCancel.className = 'delete-modal__button delete-modal__cancel-button'
deleteModalBtnCancel.textContent = 'Отмена'
deleteModalBtns.append(deleteModalBtnCancel)

const deleteModalBtnConfirm = document.createElement('button')
deleteModalBtnConfirm.className = 'delete-modal__button delete-modal__confirm-button'
deleteModalBtnConfirm.textContent = 'Удалить'
deleteModalBtns.append(deleteModalBtnConfirm)

body.append(modalOverlay)

tasksList.addEventListener('click', (event) => {
	const { target } = event

	const isBtnDelete = target.closest('.task-item__delete-button')

	if (isBtnDelete) {
		modalOverlay.classList.remove('modal-overlay_hidden')

		const datasetIdBtn = isBtnDelete.dataset.deleteTaskId
		const taskItemFromId = document.querySelector(`[data-task-id="${datasetIdBtn}"]`)

		deleteModalBtnConfirm.addEventListener('click', () => {
			taskItemFromId.remove()
			modalOverlay.classList.add('modal-overlay_hidden')
	
			const filteredTasksWithoutFoundedId = tasks.filter((key) => {
				return key.id !== datasetIdBtn
			})
		})
	}
})

deleteModalBtnCancel.addEventListener('click', () => {
	modalOverlay.classList.add('modal-overlay_hidden')
})

const changeThemeBtn = document.createElement('button')
changeThemeBtn.className = 'change-theme'
changeThemeBtn.textContent = 'Dark'
changeThemeBtn.style.padding = '15px 30px'
changeThemeBtn.style.position = 'absolute'
changeThemeBtn.style.top = '15px'
changeThemeBtn.style.right = '15px'
changeThemeBtn.style.backgroundColor = 'var(--primary-color)'
changeThemeBtn.style.color = 'var(--text-color)'
changeThemeBtn.style.fontSize = '1.5rem'
body.append(changeThemeBtn)

document.addEventListener('keydown', (event) => {
	if (event.keyCode === 18) {
		body.classList.toggle('theme-dark')
	}

	body.className === 'theme-dark' ? changeThemeBtn.textContent = 'Light' : changeThemeBtn.textContent = 'Dark'
})

changeThemeBtn.addEventListener('click', () => {
	body.classList.toggle('theme-dark')
	body.className === 'theme-dark' ? changeThemeBtn.textContent = 'Light' : changeThemeBtn.textContent = 'Dark'
})