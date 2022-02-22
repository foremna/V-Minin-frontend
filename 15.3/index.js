// 15.3

const USERS = 'https://jsonplaceholder.typicode.com/photos'

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

const createPhotoItem = (url, title) => {
  const itemPhoto = document.createElement('li')
  itemPhoto.className = 'photo-item'

  const itemImage = document.createElement('img')
  itemImage.className = 'photo-item__image'
  itemImage.src = url
  itemPhoto.append(itemImage)

  const itemHeadline = document.createElement('h3')
  itemHeadline.className = 'photo-item__title'
  itemHeadline.textContent = title
  itemPhoto.append(itemHeadline)

  return itemPhoto
}

const getFastestLoadedPhoto = (ids) => {
  toggleLoader()
  const requests = ids.map((id) => fetch(`${USERS}/${id}`))

  Promise.all(requests)
    .then((responses) => {
      const results = responses.map((response) => response.json())
      return Promise.race(results)
    })
    .then((photo) => {
      const newItemWithPhoto = createPhotoItem(photo.url, photo.title)
      dataContainer.append(newItemWithPhoto)
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      toggleLoader()
    })
}

getFastestLoadedPhoto([60, 12, 55])