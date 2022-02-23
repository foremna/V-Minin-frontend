// 16.3

const ALBUMS = 'https://jsonplaceholder.typicode.com/albums'

const dataContainer = document.querySelector('.data-container')

const toggleLoader = () =>  {
  const loader = document.querySelector('#loader')
  const loaderIsHidden = loader.hasAttribute('hidden')
  
  if (loaderIsHidden) {
    loader.removeAttribute('hidden')
  } else {
    loader.setAttribute('hidden', '')
  }
}

const createItem = (title) => {
	const item = document.createElement('li')
	item.textContent = title
	return item
}

const renderAlbums = async () => {
	try {
		toggleLoader()
		const response = await fetch(ALBUMS)
		const albums = await response.json()
		albums.forEach(album => {
			const newItem = createItem(album.title)
			dataContainer.append(newItem)
		})
	}
	catch(er) {
		console.error(er)
		dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
	}
	finally {
		toggleLoader()
	}
}

renderAlbums()