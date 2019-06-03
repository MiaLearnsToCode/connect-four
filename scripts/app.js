// player = !player

const width = 7
const squares = []
const circles = []


function init() {

  const grid = document.querySelector('.grid')
  let columnZero = []
  let columnOne = []
  let columnTwo = []
  let columnThree = []
  let columnFour = []
  let columnFive = []
  let columnSix = []

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

  function checkForWin(pickedCircle) {
    // all the circles around the picked cricle
    const pickedIndex = parseInt(pickedCircle.getAttribute('data-id'))
    const lCircle = circles[pickedIndex - 1]
    const llCircle = circles[pickedIndex - 2]
    const lllCircle = circles[pickedIndex - 3]
    const tCircle = circles[pickedIndex - width]
    const ttCircle = circles[pickedIndex - width * 2]
    const tttCircle = circles[pickedIndex - width * 3]
    const rCircle = circles[pickedIndex + 1]
    const rrCircle = circles[pickedIndex + 2]
    const rrrCircle = circles[pickedIndex + 3]
    const bCircle = circles[pickedIndex + width]
    const bbCircle = circles[pickedIndex + width * 2]
    const bbbCircle = circles[pickedIndex + width * 3]
    const tlCircle = circles[pickedIndex - 1 - width]
    const tltlCircle = circles[pickedIndex - 2 - width * 2]
    const tltltlCircle = circles[pickedIndex - 3 - width * 3]
    const trCircle = circles[pickedIndex + 1 - width]
    const trtrCircle = circles[pickedIndex + 2 - width * 2]
    const trtrtrCircle = circles[pickedIndex + 3 - width * 3]
    const blCircle = circles[pickedIndex - 1 + width]
    const blblCircle = circles[pickedIndex - 2 + width * 2]
    const blblblCircle = circles[pickedIndex - 3 + width * 3]
    const brCircle = circles[pickedIndex - 1 - width]
    const brbrCircle = circles[pickedIndex - 2 - width * 2]
    const brbrbrCircle = circles[pickedIndex - 3 - width * 3]

    if (lCircle !== undefined && lCircle.classList.contains('spongebob')) {
      if (llCircle !== undefined && llCircle.classList.contains('spongebob')) {
        if (lllCircle !== undefined && lllCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          lCircle.classList.add('winning-circles')
          llCircle.classList.add('winning-circles')
          lllCircle.classList.add('winning-circles')
        }
      }
    }

    if (tCircle !== undefined && tCircle.classList.contains('spongebob')) {
      if (ttCircle !== undefined && ttCircle.classList.contains('spongebob')) {
        if (tttCircle !== undefined && tttCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          tCircle.classList.add('winning-circles')
          ttCircle.classList.add('winning-circles')
          tttCircle.classList.add('winning-circles')
        }
      }
    }

    if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
      if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
        if (bbbCircle !== undefined && bbbCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          bCircle.classList.add('winning-circles')
          bbCircle.classList.add('winning-circles')
          bbbCircle.classList.add('winning-circles')
        }
      }
    }

    if (rCircle !== undefined && rCircle.classList.contains('spongebob')) {
      if (rrCircle !== undefined && rrCircle.classList.contains('spongebob')) {
        if (rrrCircle !== undefined && rrrCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          rCircle.classList.add('winning-circles')
          rrCircle.classList.add('winning-circles')
          rrrCircle.classList.add('winning-circles')
        }
      }
    }
    if (tlCircle !== undefined && tlCircle.classList.contains('spongebob')) {
      if (tltlCircle !== undefined && tltlCircle.classList.contains('spongebob')) {
        if (tltltlCircle !== undefined && tltltlCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          tlCircle.classList.add('winning-circles')
          tltlCircle.classList.add('winning-circles')
          tltltlCircle.classList.add('winning-circles')
        }
      }
    }
    if (trCircle !== undefined && trCircle.classList.contains('spongebob')) {
      if (trtrCircle !== undefined && trtrCircle.classList.contains('spongebob')) {
        if (trtrtrCircle !== undefined && trtrtrCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          trCircle.classList.add('winning-circles')
          trtrCircle.classList.add('winning-circles')
          trtrtrCircle.classList.add('winning-circles')
        }
      }
    }
    if (brCircle !== undefined && brCircle.classList.contains('spongebob')) {
      if (brbrCircle !== undefined && brbrCircle.classList.contains('spongebob')) {
        if (brbrbrCircle !== undefined && brbrbrCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          brCircle.classList.add('winning-circles')
          brbrCircle.classList.add('winning-circles')
          brbrbrCircle.classList.add('winning-circles')
        }
      }
    }
    if (blCircle !== undefined && blCircle.classList.contains('spongebob')) {
      if (blblCircle !== undefined && blblCircle.classList.contains('spongebob')) {
        if (blblblCircle !== undefined && blblblCircle.classList.contains('spongebob')) {
          console.log('You win!')
          pickedCircle.classList.add('winning-circles')
          blCircle.classList.add('winning-circles')
          blblCircle.classList.add('winning-circles')
          blblblCircle.classList.add('winning-circles')
        }
      }
    }

    if (lCircle !== undefined && lCircle.classList.contains('squidward')) {
      if (llCircle !== undefined && llCircle.classList.contains('squidward')) {
        if (lllCircle !== undefined && lllCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          lCircle.classList.add('winning-circles')
          llCircle.classList.add('winning-circles')
          lllCircle.classList.add('winning-circles')
        }
      }
    }

    if (tCircle !== undefined && tCircle.classList.contains('squidward')) {
      if (ttCircle !== undefined && ttCircle.classList.contains('squidward')) {
        if (tttCircle !== undefined && tttCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          tCircle.classList.add('winning-circles')
          ttCircle.classList.add('winning-circles')
          tttCircle.classList.add('winning-circles')
        }
      }
    }

    if (bCircle !== undefined && bCircle.classList.contains('squidward')) {
      if (bbCircle !== undefined && bbCircle.classList.contains('squidward')) {
        if (bbbCircle !== undefined && bbbCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          bCircle.classList.add('winning-circles')
          bbCircle.classList.add('winning-circles')
          bbbCircle.classList.add('winning-circles')
        }
      }
    }

    if (rCircle !== undefined && rCircle.classList.contains('squidward')) {
      if (rrCircle !== undefined && rrCircle.classList.contains('squidward')) {
        if (rrrCircle !== undefined && rrrCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          rCircle.classList.add('winning-circles')
          rrCircle.classList.add('winning-circles')
          rrrCircle.classList.add('winning-circles')
        }
      }
    }
    if (tlCircle !== undefined && tlCircle.classList.contains('squidward')) {
      if (tltlCircle !== undefined && tltlCircle.classList.contains('squidward')) {
        if (tltltlCircle !== undefined && tltltlCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          tlCircle.classList.add('winning-circles')
          tltlCircle.classList.add('winning-circles')
          tltltlCircle.classList.add('winning-circles')
        }
      }
    }
    if (trCircle !== undefined && trCircle.classList.contains('squidward')) {
      if (trtrCircle !== undefined && trtrCircle.classList.contains('squidward')) {
        if (trtrtrCircle !== undefined && trtrtrCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          trCircle.classList.add('winning-circles')
          trtrCircle.classList.add('winning-circles')
          trtrtrCircle.classList.add('winning-circles')
        }
      }
    }
    if (brCircle !== undefined && brCircle.classList.contains('squidward')) {
      if (brbrCircle !== undefined && brbrCircle.classList.contains('squidward')) {
        if (brbrbrCircle !== undefined && brbrbrCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          brCircle.classList.add('winning-circles')
          brbrCircle.classList.add('winning-circles')
          brbrbrCircle.classList.add('winning-circles')
        }
      }
    }
    if (blCircle !== undefined && blCircle.classList.contains('squidward')) {
      if (blblCircle !== undefined && blblCircle.classList.contains('squidward')) {
        if (blblblCircle !== undefined && blblblCircle.classList.contains('squidward')) {
          console.log('You lost!')
          pickedCircle.classList.add('winning-circles')
          blCircle.classList.add('winning-circles')
          blblCircle.classList.add('winning-circles')
          blblblCircle.classList.add('winning-circles')
        }
      }
    }
  }

  // Event listener on the top circles for when you click on them and spongebob appears at the bottom on the lowest available circle
  function pickChoice(circle, circleIndex) {
    circle.addEventListener('click', () => {
      let availableZero = columnZero.length - 1
      let availableOne = columnOne.length - 1
      let availableTwo = columnTwo.length - 1
      let availableThree = columnThree.length - 1
      let availableFour = columnFour.length - 1
      let availableFive = columnFive.length - 1
      let availableSix = columnSix.length - 1

      function playColumnZero() {
        columnZero[availableZero].classList.add('squidward')
        columnZero.pop()
      }

      function playColumnOne() {
        columnOne[availableOne].classList.add('squidward')
        columnOne.pop()
      }

      function playColumnTwo() {
        columnTwo[availableTwo].classList.add('squidward')
        columnTwo.pop()
      }

      function playColumnThree() {
        columnThree[availableThree].classList.add('squidward')
        columnThree.pop()
      }

      function playColumnFour() {
        columnFour[availableFour].classList.add('squidward')
        columnFour.pop()
      }

      function playColumnFive() {
        columnFive[availableFive].classList.add('squidward')
        columnFive.pop()
      }

      function playColumnSix() {
        columnSix[availableSix].classList.add('squidward')
        columnSix.pop()
      }

      function checkFromColumnZero() {
        if (availableOne > 0) {
          playColumnOne()
        } else if (availableTwo > 0) {
          playColumnTwo()
        } else if (availableThree > 0) {
          playColumnThree()
        } else if (availableFour > 0) {
          playColumnFour()
        } else if (availableFive > 0) {
          playColumnFive()
        } else if (availableSix > 0) {
          playColumnSix()
        } else {
          console.log('You draw!')
        }
      }

      function checkFromColumnOne() {
        if (availableZero > 0) {
          playColumnZero()
        } else if (availableTwo > 0) {
          playColumnTwo()
        } else if (availableThree > 0) {
          playColumnThree()
        } else if (availableFour > 0) {
          playColumnFour()
        } else if (availableFive > 0) {
          playColumnFive()
        } else if (availableSix > 0) {
          playColumnSix()
        } else {
          console.log('You draw!')
        }
      }

      function checkFromColumnTwo() {
        if (availableOne > 0) {
          playColumnOne()
        } else if (availableThree > 0) {
          playColumnThree()
        } else if (availableZero > 0) {
          playColumnZero()
        }  else if (availableFour > 0) {
          playColumnFour()
          columnZero = []
        } else if (availableFive > 0) {
          playColumnFive()
        } else if (availableSix > 0) {
          playColumnSix()
        } else {
          console.log('You draw!')
        }
      }

      function checkFromColumnThree() {
        if (availableTwo > 0) {
          playColumnTwo()
        } else if (availableFour > 0) {
          playColumnFour()
        } else if (availableOne > 0) {
          playColumnOne()
        }  else if (availableFive > 0) {
          playColumnFive()
        } else if (availableZero > 0) {
          playColumnZero()
        } else if (availableSix > 0) {
          playColumnSix()
        } else {
          console.log('You draw!')
        }
      }

      function checkFromColumnFour() {
        if (availableThree > 0) {
          playColumnThree()
        } else if (availableFive > 0) {
          playColumnFive()
        } else if (availableTwo > 0) {
          playColumnTwo()
        }  else if (availableSix > 0) {
          playColumnSix()
        } else if (availableOne > 0) {
          playColumnOne()
        } else if (availableZero > 0) {
          playColumnZero()
        } else {
          console.log('You draw!')
        }
      }

      function checkFromColumnFive() {
        if (availableSix > 0) {
          playColumnSix()
        } else if (availableFour > 0) {
          playColumnFour()
        } else if (availableThree > 0) {
          playColumnThree()
        }  else if (availableTwo > 0) {
          playColumnTwo()
        } else if (availableOne > 0) {
          playColumnOne()
        } else if (availableZero > 0) {
          playColumnZero()
        } else {
          console.log('You draw!')
        }
      }

      function checkFromColumnSix() {
        if (availableFive > 0) {
          playColumnFive()
        } else if (availableFour > 0) {
          playColumnFour()
        }  else if (availableThree > 0) {
          playColumnThree()
        } else if (availableTwo > 0) {
          playColumnTwo()
        } else if (availableOne > 0) {
          playColumnOne()
        } else if (availableZero > 0) {
          playColumnZero()
        } else {
          console.log('You draw!')
        }
      }

      if (circleIndex === 0) {
        const randomIndex = Math.round(Math.random())
        columnZero[availableZero].classList.add('spongebob')
        columnZero.pop()
        availableZero = columnZero.length - 1

        if (availableZero === 0) {
          columnZero = []
          checkFromColumnZero()
        } else {
          switch(randomIndex) {
            case 0:
              columnZero[availableZero].classList.add('squidward')
              columnZero.pop()
              break
            case 1:
              if (availableOne > 0) {
                columnOne[availableOne].classList.add('squidward')
                columnOne.pop()
              } else {
                checkFromColumnZero()
              }
              break
          }
        }
      }

      if (circleIndex === 1) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnOne[availableOne].classList.add('spongebob')
        columnOne.pop()
        availableOne = columnOne.length - 1

        if (availableOne === 0) {
          columnOne = []
          checkFromColumnOne()
        } else {
          switch(randomIndex) {
            case 0:
              if (availableZero > 0) {
                columnZero[availableZero].classList.add('squidward')
                columnZero.pop()
              } else {
                checkFromColumnOne()
              }
              break
            case 1:
              columnOne[availableOne].classList.add('squidward')
              columnOne.pop()
              break
            case 2:
              if (availableTwo > 0) {
                columnTwo[availableTwo].classList.add('squidward')
                columnTwo.pop()
              } else {
                checkFromColumnOne()
              }
              break
          }
        }
      }
      if (circleIndex === 2) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnTwo[availableTwo].classList.add('spongebob')
        columnTwo.pop()
        availableTwo = columnTwo.length - 1
        if (availableTwo === 0) {
          columnTwo = []
          checkFromColumnTwo()
        } else {
          switch(randomIndex) {
            case 0:
              if (availableOne > 0) {
                columnOne[availableOne].classList.add('squidward')
                columnOne.pop()
              } else {
                checkFromColumnTwo()
              }
              break
            case 1:
              columnTwo[availableTwo].classList.add('squidward')
              columnTwo.pop()
              break
            case 2:
              if (availableThree > 0) {
                columnThree[availableThree].classList.add('squidward')
                columnThree.pop()
              } else {
                checkFromColumnTwo()
              }
              break
          }
        }
      }
      if (circleIndex === 3) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnThree[availableThree].classList.add('spongebob')
        columnThree.pop()
        availableThree = columnThree.length - 1

        if (availableThree === 0) {
          columnThree = []
          checkFromColumnThree()
        } else {
          switch(randomIndex) {
            case 0:
              if (availableTwo > 0) {
                columnTwo[availableTwo].classList.add('squidward')
                columnTwo.pop()
              } else {
                checkFromColumnThree()
              }
              break
            case 1:
              columnThree[availableThree].classList.add('squidward')
              columnThree.pop()
              break
            case 2:
              if (availableFour > 0) {
                columnFour[availableFour].classList.add('squidward')
                columnFour.pop()
              } else {
                checkFromColumnThree()
              }
              break
          }
        }
      }
      if (circleIndex === 4) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnFour[availableFour].classList.add('spongebob')
        columnFour.pop()
        availableFour = columnFour.length - 1
        if (availableFour === 0) {
          columnFour = []
          checkFromColumnFour()
        } else {
          switch(randomIndex) {
            case 0:
              if (availableThree > 0) {
                columnThree[availableThree].classList.add('squidward')
                columnThree.pop()
              } else {
                checkFromColumnFour()
              }
              break
            case 1:
              columnFour[availableFour].classList.add('squidward')
              columnFour.pop()
              break
            case 2:
              if (availableFive > 0) {
                columnFive[availableFive].classList.add('squidward')
                columnFive.pop()
              } else {
                checkFromColumnFour()
              }
              break
          }
        }
      }
      if (circleIndex === 5) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnFive[availableFive].classList.add('spongebob')
        columnFive.pop()
        availableFive = columnFive.length - 1
        if (availableFive === 0) {
          columnFive = []
          checkFromColumnFive()
        } else {
          switch(randomIndex) {
            case 0:
              if (columnFour > 0) {
                columnFour[availableFour].classList.add('squidward')
                columnFour.pop()
              } else {
                checkFromColumnFive()
              }
              break
            case 1:
              columnFive[availableFive].classList.add('squidward')
              columnFive.pop()
              break
            case 2:
              if (columnSix > 0) {
                columnSix[availableSix].classList.add('squidward')
                columnSix.pop()
              } else {
                checkFromColumnFive()
              }
              break
          }
        }
      }

      if (circleIndex === 6) {
        const randomIndex = Math.round(Math.random())
        columnSix[availableSix].classList.add('spongebob')
        columnSix.pop()
        availableSix = columnSix.length - 1
        if (availableSix === 0) {
          columnSix = []
          checkFromColumnSix()
        } else {
          switch(randomIndex) {
            case 0:
              if (availableFive > 0) {
                columnFive[availableFive].classList.add('squidward')
                columnFive.pop()
              } else {
                checkFromColumnSix()
              }
              break
            case 1:
              columnSix[availableSix].classList.add('squidward')
              columnSix.pop()
              break
          }
        }
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
    squares.push(square)
    circles.push(circle)
    grid.appendChild(square)
    square.appendChild(circle)
    createCol(circle, circleIndex)
    createTopRow(circle, circleIndex)

  }


}

window.addEventListener('DOMContentLoaded', init)
