// 16.2

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodosByIds = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
    const promises = await Promise.all(requests)
    const dataResults = promises.map((data) => data.json())
    const result = await Promise.all(dataResults)
		console.log(result)
  } catch(error) {
      console.log(error)
    }
}
getTodosByIds([43, 21, 55, 100, 10])