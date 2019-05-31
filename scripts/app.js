// player = !player

const width = 7
const squares = []
const circles = []


function init() {

  const grid = document.querySelector('.grid')
  const columnZero = []
  const columnOne = []
  const columnTwo = []
  const columnThree = []
  const columnFour = []
  const columnFive = []
  const columnSix = []

  // Create the 7 columns
  function createCol(circle, circleIndex) {
    if (circleIndex % width === 0) {
      columnZero.push(circle)
    } else if ((circleIndex - 1) % width === 0) {
      columnOne.push(circle)
    } else if ((circleIndex - 2) % width === 0) {
      columnTwo.push(circle)
    } else if ((circleIndex - 3) % width === 0) {
      columnThree.push(circle)
    } else if ((circleIndex - 4) % width === 0) {
      columnFour.push(circle)
    } else if ((circleIndex - 5) % width === 0) {
      columnFive.push(circle)
    } else if ((circleIndex - 6) % width === 0) {
      columnSix.push(circle)
    }
  }

  function highlightCol(circleChosen) {
    if (columnZero.includes(circleChosen)) {
      columnZero.forEach(columnZeroItem => {
        columnZeroItem.classList.add('grid-circle-highlighted')
      })
    } else if (columnOne.includes(circleChosen)) {
      columnOne.forEach(columnOneItem => {
        columnOneItem.classList.add('grid-circle-highlighted')
      })
    } else if (columnTwo.includes(circleChosen)) {
      columnTwo.forEach(columnTwoItem => {
        columnTwoItem.classList.add('grid-circle-highlighted')
      })
    } else if (columnThree.includes(circleChosen)) {
      columnThree.forEach(columnThreeItem => {
        columnThreeItem.classList.add('grid-circle-highlighted')
      })
    } else if (columnFour.includes(circleChosen)) {
      columnFour.forEach(columnFourItem => {
        columnFourItem.classList.add('grid-circle-highlighted')
      })
    } else if (columnFive.includes(circleChosen)) {
      columnFive.forEach(columnFiveItem => {
        columnFiveItem.classList.add('grid-circle-highlighted')
      })
    } else if (columnSix.includes(circleChosen)) {
      columnSix.forEach(columnSixItem => {
        columnSixItem.classList.add('grid-circle-highlighted')
      })
    }
  }

  function removeHighlightCol() {
    columnZero.forEach(columnZeroItem => {
      columnZeroItem.classList.remove('grid-circle-highlighted')
    })
    columnOne.forEach(columnOneItem => {
      columnOneItem.classList.remove('grid-circle-highlighted')
    })
    columnTwo.forEach(columnTwoItem => {
      columnTwoItem.classList.remove('grid-circle-highlighted')
    })
    columnThree.forEach(columnThreeItem => {
      columnThreeItem.classList.remove('grid-circle-highlighted')
    })
    columnFour.forEach(columnFourItem => {
      columnFourItem.classList.remove('grid-circle-highlighted')
    })
    columnFive.forEach(columnFiveItem => {
      columnFiveItem.classList.remove('grid-circle-highlighted')
    })
    columnSix.forEach(columnSixItem => {
      columnSixItem.classList.remove('grid-circle-highlighted')
    })
  }

  function hoverChoices(circlesChoice) {
    // adding event listeners to the top row
    circlesChoice.forEach(circleChosen => circleChosen.addEventListener('mouseenter', () => {
      circleChosen.classList.add('spongebob')
      highlightCol(circleChosen)
    }))
    circlesChoice.forEach(circleChosen => circleChosen.addEventListener('mouseleave', () => {
      removeHighlightCol(circleChosen)
      circleChosen.classList.remove('spongebob')
    }))
  }

  function pickChoice(circle, circleIndex) {
    circle.addEventListener('click', () => {
      if (circleIndex === 0) {
        const availableZero = columnZero.length - 1
        columnZero[availableZero].classList.add('spongebob')
        columnZero.pop()
      }
      if (circleIndex === 1) {
        const availableOne = columnOne.length - 1
        columnOne[availableOne].classList.add('spongebob')
        columnOne.pop()
      }
      if (circleIndex === 2) {
        const availableTwo = columnTwo.length - 1
        columnTwo[availableTwo].classList.add('spongebob')
        columnTwo.pop()
      }
      if (circleIndex === 3) {
        const availableThree = columnThree.length - 1
        columnThree[availableThree].classList.add('spongebob')
        columnThree.pop()

      }
      if (circleIndex === 4) {
        const availableFour = columnFour.length - 1
        columnFour[availableFour].classList.add('spongebob')
        columnFour.pop()

      }
      if (circleIndex === 5) {
        const availableFive = columnFive.length - 1
        columnFive[availableFive].classList.add('spongebob')
        columnFive.pop()

      }
      if (circleIndex === 6) {
        const availableSix = columnSix.length - 1
        columnSix[availableSix].classList.add('spongebob')
        columnSix.pop()
      }
    })
  }


  function createTopRow(circle, circleIndex) {
    if (i < width) {
      circle.classList.remove('grid-circle')
      circle.classList.add('grid-choice-circle')
      const circlesChoice = document.querySelectorAll('.grid-choice-circle')
      hoverChoices(circlesChoice)
      pickChoice(circle, circleIndex)
    }
  }

  // FOR LOOP to build each square as many times as the width
  for (var i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    const circle = document.createElement('div')
    square.classList.add('grid-square')
    circle.classList.add('grid-circle')
    circle.setAttribute('data-id', i)
    const circleIndex = parseInt(circle.getAttribute('data-id'))
    circle.innerHTML = circleIndex
    squares.push(square)
    circles.push(circle)
    grid.appendChild(square)
    square.appendChild(circle)
    createCol(circle, circleIndex)
    createTopRow(circle, circleIndex)
  }


}


window.addEventListener('DOMContentLoaded', init)
