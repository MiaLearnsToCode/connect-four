const width = 7
const squares = []
const circles = []

function init() {

  const grid = document.querySelector('.grid')

  // for loop to build each square as many times as the width
  for (var i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    const circle = document.createElement('div')
    square.classList.add('grid-square')
    circle.classList.add('grid-circle')
    const circleIndex = i
    circle.innerHTML = i
    squares.push(square)
    circles.push(circle)
    grid.appendChild(square)
    square.appendChild(circle)

    if (i < width) {
      circle.classList.remove('grid-circle')
      circle.classList.add('grid-choice')
    }

    const circlesChoice = document.querySelectorAll('.grid-choice')
    circlesChoice.forEach(circleChoice => circleChoice.addEventListener('mouseover', () => {
      circleChoice.classList.add('hover-spongebob')
    })

    )
  }







}


window.addEventListener('DOMContentLoaded', init)
