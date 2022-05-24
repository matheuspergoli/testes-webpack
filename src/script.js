import Title from "./components/title.js"
import Image from "./components/image.js"
import Button from "./components/button.js"

const titulo1 = new Title('Título Principal')
titulo1.createTitle()

const image1 = new Image()
image1.inserBobImage()

const button1 = new Button()
button1.create()

// Babel spread
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

let {a, b, ...teste} = obj
console.log(a)
console.log(b)
console.log(teste)