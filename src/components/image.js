import Bob from "../img/bob.jpg"

export default class Image {
  inserBobImage() {
    const img = document.createElement('img')
    img.src = Bob
    img.width = 200
    document.querySelector('body').appendChild(img)
  }
}