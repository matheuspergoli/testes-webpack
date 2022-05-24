import "./title.css"

export default class Title {
  constructor(title) {
    this.title = title
  }

  createTitle() {
    const h1 = document.createElement('h1')
    h1.innerText = this.title
    h1.classList.add('main-title')
    document.querySelector('body').appendChild(h1)
  }
}