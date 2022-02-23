// 16.1

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
let isLoading = false
const createNewPost = async () => {
    isLoading = true
  try {
    const response = await fetch(POSTS_URL, {
      method: 'POST',
    })
    const posts = await response.json()
    console.log('posts', posts)
  } catch(error) {
    console.log('error', error)
  } finally {
    isLoading = false
  }
}
createNewPost()