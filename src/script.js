import Title from "./components/title.js"
import Image from "./components/image.js"
import Button from "./components/button.js"
import warning from "./templates/warning.html"
import fraseTxt from "./files/frase.txt"
import descricao from "./files/descricao.json"
import "./style/warning.css"

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

// Import de HTML
const body = document.querySelector('body')
body.innerHTML += warning

// Import arquivo de texto
const frase = fraseTxt
console.log(frase)

// Import JSON
const pessoa = descricao
console.log(pessoa)