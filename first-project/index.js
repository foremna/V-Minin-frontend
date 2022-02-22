// 15.1

const USERS = 'https://jsonplaceholder.typicode.com/users'

const dataContainer = document.querySelector('#data-container')

const toggleLoader = () =>  {
  const loader = document.querySelector('#loader')
  const loaderIsHidden = loader.hasAttribute('hidden')
  
  if (loaderIsHidden) {
    loader.removeAttribute('hidden')
  } else {
    loader.setAttribute('hidden', '')
  }
}

const createUser = (user) => {
  const elemUser = document.createElement('li')
  const elemUserAnchor = document.createElement('a')
  elemUserAnchor.href = '#'
  elemUserAnchor.textContent = user

  elemUser.append(elemUserAnchor)

  return elemUser
}

const getAllUsers = () => {
  toggleLoader()

  const result = fetch(USERS, {
    method: 'GET',
  })

  result
    .then((response) => {
      return response.json()
    })
    .then((users) => {
      users.forEach((user) => {
        const newUser = createUser(user.username)
        dataContainer.append(newUser)
      })
    })
    .catch((error) => {
      console.error('Данные не загрузились')
    })
    .finally(() => {
      toggleLoader()
    })
}

getAllUsers()