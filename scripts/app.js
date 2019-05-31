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


  function createTopRow(circle) {
    if (i < width) {
      circle.classList.remove('grid-circle')
      circle.classList.add('grid-choice')
      const circlesChoice = document.querySelectorAll('.grid-choice')
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
  }

  // FOR LOOP to build each square as many times as the width
  for (var i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    const circle = document.createElement('div')
    square.classList.add('grid-square')
    circle.classList.add('grid-circle')
    const circleIndex = i
    circle.innerHTML = circleIndex
    squares.push(square)
    circles.push(circle)
    grid.appendChild(square)
    square.appendChild(circle)
    createCol(circle, circleIndex)
    createTopRow(circle)
  }


}


window.addEventListener('DOMContentLoaded', init)
