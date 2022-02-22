// 15.2

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

const getUsersByIds = (ids) => {
  toggleLoader()
  const requests = ids.map((id) => fetch(`${USERS}/${id}`))
  
  Promise.all(requests)
    .then((responses) => {
      const dataResult = responses.map((response) => response.json())
      return Promise.all(dataResult)
    })
    .then((usersId) => {
      usersId.forEach((user) => {
        const newUser = createUser(user.username)
        dataContainer.append(newUser)
      })
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      toggleLoader()
    })
}

getUsersByIds([5, 6, 2, 1])