import "./index.css"
import img from './assets/js.png'

console.log('Hello World!')

const headlineILoveJs = document.createElement('h1')
headlineILoveJs.textContent = 'I love JavaScript'

document.body.append(headlineILoveJs)

const imgWithJavascript = document.createElement('img')
imgWithJavascript.className = 'image'
imgWithJavascript.src = img

document.body.append(imgWithJavascript)