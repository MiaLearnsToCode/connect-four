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

  // Function that highlights columns yellow when you hover over the top circle
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
  // Function that removes the highlights on columns when cursor moves away
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
  // Event listeners on the top circles for when you hover over them
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
  // Event listener on the top circles for when you click on them and spongebob appears at the bottom on the lowest available circle
  function pickChoice(circle, circleIndex) {
    circle.addEventListener('click', () => {
      const availableZero = columnZero.length - 1
      const availableOne = columnOne.length - 1
      const availableTwo = columnTwo.length - 1
      const availableThree = columnThree.length - 1
      const availableFour = columnFour.length - 1
      const availableFive = columnFive.length - 1
      const availableSix = columnSix.length - 1

      if (circleIndex === 0) {
        columnZero[availableZero].classList.add('spongebob')
        const playedIndex = parseInt(columnZero[availableZero].getAttribute('data-id'))
        columnZero.pop()
        opponentChoice(playedIndex, width)
      }
      if (circleIndex === 1) {
        columnOne[availableOne].classList.add('spongebob')
        const playedIndex = parseInt(columnOne[availableOne].getAttribute('data-id'))
        columnOne.pop()
        opponentChoice(playedIndex, width)
      }
      if (circleIndex === 2) {
        columnTwo[availableTwo].classList.add('spongebob')
        const playedIndex = parseInt(columnTwo[availableTwo].getAttribute('data-id'))
        columnTwo.pop()
        opponentChoice(playedIndex, width)
      }
      if (circleIndex === 3) {
        columnThree[availableThree].classList.add('spongebob')
        const playedIndex = parseInt(columnThree[availableThree].getAttribute('data-id'))
        columnThree.pop()
        opponentChoice(playedIndex, width)
      }
      if (circleIndex === 4) {
        columnFour[availableFour].classList.add('spongebob')
        const playedIndex = parseInt(columnFour[availableFour].getAttribute('data-id'))
        columnFour.pop()
        opponentChoice(playedIndex, width)
      }
      if (circleIndex === 5) {
        columnFive[availableFive].classList.add('spongebob')
        const playedIndex = parseInt(columnFive[availableFive].getAttribute('data-id'))
        columnFive.pop()
        opponentChoice(playedIndex, width)
      }
      if (circleIndex === 6) {
        columnSix[availableSix].classList.add('spongebob')
        const playedIndex = parseInt(columnSix[availableSix].getAttribute('data-id'))
        columnSix.pop()
        opponentChoice(playedIndex, width)
      }
    })
  }

  function opponentChoice(playedIndex, width) {
    // generate a random number between 0 and 2
    const randomIndex = Math.floor(Math.random() * 3)
    let opponentIndex = null
    // if the number is 0 then place squidward on the circle that has a circleIndex -1
    switch(randomIndex) {
      case 0:
        opponentIndex = playedIndex - 1
        circles[opponentIndex].classList.add('squidward')
        break
      case 1:
        opponentIndex = playedIndex + 1
        circles[opponentIndex].classList.add('squidward')
        break
      case 2:
        opponentIndex = playedIndex - width
        circles[opponentIndex].classList.add('squidward')
        break
    }
    // if the number is 1 then place squidward on the circle that has a circleIndex - width
    // if the number is 2 then place squidward on the circle that has a circleIndex + 1
    // only do so if the squares are available
    // if it's not available generate a new number until find one that is availableOne
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
