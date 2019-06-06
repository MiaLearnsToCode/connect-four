
const width = 7
let squares = []
let circles = []

// Function loads the game when the window is open
function init() {
  const startButton = document.querySelector('#start-button')
  const instructions = document.querySelectorAll('p, h3')
  const scoreBoard = document.querySelector('#score-board')
  const resetButton = document.querySelector('#reset-button')
  const grid = document.querySelector('.grid')
  const spanSpongebob = document.querySelector('#spongebob-score')
  const spanSquidward = document.querySelector('#squidward-score')
  let scoreSpongebob = 0
  let scoreSquidward = 0
  let playSquidward = true

  let columnZero = []
  let columnOne = []
  let columnTwo = []
  let columnThree = []
  let columnFour = []
  let columnFive = []
  let columnSix = []
  let playedCircles = []

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

  // Function that hides the hoverable top row when player wins or looses so that they are forced to restart the game
  function stopHoverChoices() {
    const circlesChoice = document.querySelectorAll('.grid-choice-circle')
    circlesChoice.forEach(circleChosen => circleChosen.style.visibility = 'hidden')
  }

  // Function that increases Spongebob's score
  function addSpongebob() {
    scoreSpongebob =  scoreSpongebob + 1
    spanSpongebob.innerHTML = scoreSpongebob
  }

  // Function that increases Squidward's score
  function addSquidward() {
    scoreSquidward = scoreSquidward + 1
    spanSquidward.innerHTML = scoreSquidward
  }

  // Function evoked every time the player (spongebob) plays, to check if it won in any direction (only checks towards left, right and all bottom directions - no point at checking upwards)
  function checkForWin() {
    const inCheckCircle = playedCircles[0]
    const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
    const lCircle = circles[pickedIndex - 1]
    const llCircle = circles[pickedIndex - 2]
    const lllCircle = circles[pickedIndex - 3]
    const rCircle = circles[pickedIndex + 1]
    const rrCircle = circles[pickedIndex + 2]
    const rrrCircle = circles[pickedIndex + 3]
    const bCircle = circles[pickedIndex + width]
    const bbCircle = circles[pickedIndex + width * 2]
    const bbbCircle = circles[pickedIndex + width * 3]
    const blCircle = circles[pickedIndex - 1 + width]
    const blblCircle = circles[pickedIndex - 2 + width * 2]
    const blblblCircle = circles[pickedIndex - 3 + width * 3]
    const brCircle = circles[pickedIndex + 1 + width]
    const brbrCircle = circles[pickedIndex + 2 + width * 2]
    const brbrbrCircle = circles[pickedIndex + 3 + width * 3]

    if (lCircle !== undefined && lCircle.classList.contains('spongebob')) {
      if (llCircle !== undefined && llCircle.classList.contains('spongebob')) {
        if (lllCircle !== undefined && lllCircle.classList.contains('spongebob')) {
          inCheckCircle.classList.add('winning-circles')
          lCircle.classList.add('winning-circles')
          llCircle.classList.add('winning-circles')
          lllCircle.classList.add('winning-circles')
          addSpongebob()
          stopHoverChoices()
        }
      }
    }

    if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
      if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
        if (bbbCircle !== undefined && bbbCircle.classList.contains('spongebob')) {
          inCheckCircle.classList.add('winning-circles')
          bCircle.classList.add('winning-circles')
          bbCircle.classList.add('winning-circles')
          bbbCircle.classList.add('winning-circles')
          addSpongebob()
          stopHoverChoices()
        }
      }
    }

    if (rCircle !== undefined && rCircle.classList.contains('spongebob')) {
      if (rrCircle !== undefined && rrCircle.classList.contains('spongebob')) {
        if (rrrCircle !== undefined && rrrCircle.classList.contains('spongebob')) {
          inCheckCircle.classList.add('winning-circles')
          rCircle.classList.add('winning-circles')
          rrCircle.classList.add('winning-circles')
          rrrCircle.classList.add('winning-circles')
          addSpongebob()
          stopHoverChoices()
        }
      }
    }

    if (brCircle !== undefined && brCircle.classList.contains('spongebob')) {
      if (brbrCircle !== undefined && brbrCircle.classList.contains('spongebob')) {
        if (brbrbrCircle !== undefined && brbrbrCircle.classList.contains('spongebob')) {
          inCheckCircle.classList.add('winning-circles')
          brCircle.classList.add('winning-circles')
          brbrCircle.classList.add('winning-circles')
          brbrbrCircle.classList.add('winning-circles')
          addSpongebob()
          stopHoverChoices()
        }
      }
    }
    if (blCircle !== undefined && blCircle.classList.contains('spongebob')) {
      if (blblCircle !== undefined && blblCircle.classList.contains('spongebob')) {
        if (blblblCircle !== undefined && blblblCircle.classList.contains('spongebob')) {
          inCheckCircle.classList.add('winning-circles')
          blCircle.classList.add('winning-circles')
          blblCircle.classList.add('winning-circles')
          blblblCircle.classList.add('winning-circles')
          addSpongebob()
          stopHoverChoices()
        }
      }
    }
  }

  // Function evoked every time Squidward plays, to check if it won
  function checkForLost() {
    const inCheckCircle = playedCircles[0]
    const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
    const lCircle = circles[pickedIndex - 1]
    const llCircle = circles[pickedIndex - 2]
    const lllCircle = circles[pickedIndex - 3]
    const rCircle = circles[pickedIndex + 1]
    const rrCircle = circles[pickedIndex + 2]
    const rrrCircle = circles[pickedIndex + 3]
    const bCircle = circles[pickedIndex + width]
    const bbCircle = circles[pickedIndex + width * 2]
    const bbbCircle = circles[pickedIndex + width * 3]
    const blCircle = circles[pickedIndex - 1 + width]
    const blblCircle = circles[pickedIndex - 2 + width * 2]
    const blblblCircle = circles[pickedIndex - 3 + width * 3]
    const brCircle = circles[pickedIndex + 1 + width]
    const brbrCircle = circles[pickedIndex + 2 + width * 2]
    const brbrbrCircle = circles[pickedIndex + 3 + width * 3]

    if (lCircle !== undefined && lCircle.classList.contains('squidward')) {
      if (llCircle !== undefined && llCircle.classList.contains('squidward')) {
        if (lllCircle !== undefined && lllCircle.classList.contains('squidward')) {
          inCheckCircle.classList.add('loosing-circles')
          lCircle.classList.add('loosing-circles')
          llCircle.classList.add('loosing-circles')
          lllCircle.classList.add('loosing-circles')
          addSquidward()
          stopHoverChoices()
        }
      }
    }

    if (bCircle !== undefined && bCircle.classList.contains('squidward')) {
      if (bbCircle !== undefined && bbCircle.classList.contains('squidward')) {
        if (bbbCircle !== undefined && bbbCircle.classList.contains('squidward')) {
          inCheckCircle.classList.add('loosing-circles')
          bCircle.classList.add('loosing-circles')
          bbCircle.classList.add('loosing-circles')
          bbbCircle.classList.add('loosing-circles')
          addSquidward()
          stopHoverChoices()
        }
      }
    }

    if (rCircle !== undefined && rCircle.classList.contains('squidward')) {
      if (rrCircle !== undefined && rrCircle.classList.contains('squidward')) {
        if (rrrCircle !== undefined && rrrCircle.classList.contains('squidward')) {
          inCheckCircle.classList.add('loosing-circles')
          rCircle.classList.add('loosing-circles')
          rrCircle.classList.add('loosing-circles')
          rrrCircle.classList.add('loosing-circles')
          addSquidward()
          stopHoverChoices()
        }
      }
    }

    if (brCircle !== undefined && brCircle.classList.contains('squidward')) {
      if (brbrCircle !== undefined && brbrCircle.classList.contains('squidward')) {
        if (brbrbrCircle !== undefined && brbrbrCircle.classList.contains('squidward')) {
          inCheckCircle.classList.add('loosing-circles')
          brCircle.classList.add('loosing-circles')
          brbrCircle.classList.add('loosing-circles')
          brbrbrCircle.classList.add('loosing-circles')
          addSquidward()
          stopHoverChoices()
        }
      }
    }
    if (blCircle !== undefined && blCircle.classList.contains('squidward')) {
      if (blblCircle !== undefined && blblCircle.classList.contains('squidward')) {
        if (blblblCircle !== undefined && blblblCircle.classList.contains('squidward')) {
          inCheckCircle.classList.add('loosing-circles')
          blCircle.classList.add('loosing-circles')
          blblCircle.classList.add('loosing-circles')
          blblblCircle.classList.add('loosing-circles')
          addSquidward()
          stopHoverChoices()
        }
      }
    }
  }

  // Event listener on the top circles for when you click on them and spongebob appears at the bottom on the lowest available circle
  function playChoice(circle, circleIndex) {
    circle.addEventListener('click', () => {

      let availableZero = columnZero.length - 1
      let availableOne = columnOne.length - 1
      let availableTwo = columnTwo.length - 1
      let availableThree = columnThree.length - 1
      let availableFour = columnFour.length - 1
      let availableFive = columnFive.length - 1
      let availableSix = columnSix.length - 1

      // Functions that place Squidward in the indicated column

      function playColumnZero() {
        columnZero[availableZero].classList.add('squidward')
        playedCircles.unshift(columnZero[availableZero])
        checkForLost()
        columnZero.pop()
        availableZero = columnZero.length - 1
      }

      function playColumnOne() {
        columnOne[availableOne].classList.add('squidward')
        playedCircles.unshift(columnOne[availableOne])
        checkForLost()
        columnOne.pop()
        availableOne = columnOne.length - 1
      }

      function playColumnTwo() {
        columnTwo[availableTwo].classList.add('squidward')
        playedCircles.unshift(columnTwo[availableTwo])
        checkForLost()
        columnTwo.pop()
        availableTwo = columnTwo.length - 1
      }

      function playColumnThree() {
        columnThree[availableThree].classList.add('squidward')
        playedCircles.unshift(columnThree[availableThree])
        checkForLost()
        columnThree.pop()
        availableThree = columnThree.length - 1
      }

      function playColumnFour() {
        columnFour[availableFour].classList.add('squidward')
        playedCircles.unshift(columnFour[availableFour])
        checkForLost()
        columnFour.pop()
        availableFour = columnFour.length - 1
      }

      function playColumnFive() {
        columnFive[availableFive].classList.add('squidward')
        playedCircles.unshift(columnFive[availableFive])
        checkForLost()
        columnFive.pop()
        availableFive = columnFive.length - 1
      }

      function playColumnSix() {
        columnSix[availableSix].classList.add('squidward')
        playedCircles.unshift(columnSix[availableSix])
        checkForLost()
        columnSix.pop()
        availableSix = columnSix.length - 1
      }

      // Functions that define the hierarchy of choice as to where squidward should be placed based on spongebob's last move

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
          addSquidward()
          addSpongebob()
          stopHoverChoices()
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
          addSquidward()
          addSpongebob()
          stopHoverChoices()
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
          addSquidward()
          addSpongebob()
          stopHoverChoices()
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
          addSquidward()
          addSpongebob()
          stopHoverChoices()
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
          addSquidward()
          addSpongebob()
          stopHoverChoices()
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
          addSquidward()
          addSpongebob()
          stopHoverChoices()
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
          addSquidward()
          addSpongebob()
          stopHoverChoices()
        }
      }

      // Functions that defend each column horizontally and vertically

      function defendColumnZero() {
        const inCheckCircle = playedCircles[0]
        const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
        const bCircle = circles[pickedIndex + width]
        const bbCircle = circles[pickedIndex + width * 2]

        //  Defende vertically if 3 in a column
        if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
          if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
            playColumnZero()
            inCheckCircle.classList.add('connect-three')
            bCircle.classList.add('connect-three')
            bbCircle.classList.add('connect-three')
            console.log('Vdefended3')
            playSquidward = false
          }
        } else {
          playSquidward = true
        }

        //  Defende vertically if 2 in a column
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            playColumnZero()
            console.log('Vdefended2')
            playSquidward = false
          } else {
            playSquidward = true
          }
        }

      }

      function defendColumnOne() {
        const inCheckCircle = playedCircles[0]
        const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
        const lCircle = circles[pickedIndex - 1]
        const rCircle = circles[pickedIndex + 1]
        const rrCircle = circles[pickedIndex + 2]
        const bCircle = circles[pickedIndex + width]
        const bbCircle = circles[pickedIndex + width * 2]
        const blCircle = circles[pickedIndex - 1 + width]

        // Defend if there 3 in a row on the right hand side (horizontally)

        if(!lCircle.classList.contains('spongebob') || !lCircle.classList.contains('squidward')) {
          if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
            if (rCircle.classList.contains('spongebob') && rrCircle.classList.contains('spongebob')) {
              playColumnZero()
              console.log('Rdefended3')
              playSquidward = false
            }
          }
        } else {
          playSquidward = true
        }

        // Defend if 3 in a column vertically
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
              playColumnOne()
              inCheckCircle.classList.add('connect-three')
              bCircle.classList.add('connect-three')
              bbCircle.classList.add('connect-three')
              console.log('Vdefended3')
              playSquidward = false
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a row on the right hand side (horizontally)
        if(playSquidward) {
          if(!lCircle.classList.contains('spongebob') || !lCircle.classList.contains('squidward')) {
            if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
              if (rCircle.classList.contains('spongebob')) {
                playColumnZero()
                console.log('Rdefended2')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if 2 in a column vertically
        if(playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            playColumnOne()
            console.log('Vdefended2')
            playSquidward = false
          } else {
            playSquidward = true
          }
        }
      }

      function defendColumnTwo() {
        const inCheckCircle = playedCircles[0]
        const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
        const lCircle = circles[pickedIndex - 1]
        const llCircle = circles[pickedIndex - 2]
        const rCircle = circles[pickedIndex + 1]
        const rrCircle = circles[pickedIndex + 2]
        const bCircle = circles[pickedIndex + width]
        const bbCircle = circles[pickedIndex + width * 2]
        const blCircle = circles[pickedIndex - 1 + width]
        const brCircle = circles[pickedIndex + 1 + width]

        // Defend if there 3 in a row on the left hand side (horizontally)
        if (rCircle && brCircle) {
          if(!rCircle.classList.contains('spongebob') || !rCircle.classList.contains('squidward')) {
            if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
              if (lCircle.classList.contains('spongebob') && llCircle.classList.contains('spongebob')) {
                playColumnThree()
                console.log('Ldefended3')
                playSquidward = false
              }
            }
          }
        } else {
          playSquidward = true
        }

        // Defend if there 3 in a row on the right hand side (horizontally)
        if (playSquidward) {
          if(!lCircle.classList.contains('spongebob, squidward') || !lCircle.classList.contains('squidward')) {
            if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
              if (rCircle.classList.contains('spongebob') && rrCircle.classList.contains('spongebob')) {
                playColumnOne()
                console.log('Rdefended3')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend vertically if 3 in a column
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
              playColumnTwo()
              inCheckCircle.classList.add('connect-three')
              bCircle.classList.add('connect-three')
              bbCircle.classList.add('connect-three')
              console.log('Vdefended3')
              playSquidward = false
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a row on the left hand side (horizontally)
        if (playSquidward) {
          if (rCircle && brCircle) {
            if(!rCircle.classList.contains('spongebob') || !rCircle.classList.contains('squidward')) {
              if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
                if (lCircle.classList.contains('spongebob')) {
                  playColumnThree()
                  console.log('Ldefended2')
                  playSquidward = false
                }
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a row on the right hand side (horizontally)
        if (playSquidward) {
          if(!lCircle.classList.contains('spongebob, squidward') || !lCircle.classList.contains('squidward')) {
            if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
              if (rCircle.classList.contains('spongebob')) {
                playColumnOne()
                console.log('Rdefended2')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend vertically if 2 in a column
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            playColumnTwo()
            console.log('Vdefended2')
            playSquidward = false
          } else {
            playSquidward = true
          }
        }

      }

      function defendColumnThree() {
        const inCheckCircle = playedCircles[0]
        const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
        const lCircle = circles[pickedIndex - 1]
        const llCircle = circles[pickedIndex - 2]
        const rCircle = circles[pickedIndex + 1]
        const rrCircle = circles[pickedIndex + 2]
        const bCircle = circles[pickedIndex + width]
        const bbCircle = circles[pickedIndex + width * 2]
        const blCircle = circles[pickedIndex - 1 + width]
        const brCircle = circles[pickedIndex + 1 + width]

        // Defend if there 3 in a row on the left hand side (horizontally)
        if (rCircle !== undefined && brCircle !== undefined) {
          if(!rCircle.classList.contains('spongebob') || !rCircle.classList.contains('squidward')) {
            if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
              if (lCircle.classList.contains('spongebob') && llCircle.classList.contains('spongebob')) {
                playColumnFour()
                console.log('Ldefended3')
                playSquidward = false
              }
            }
          }
        } else {
          playSquidward = true
        }

        // Defend if there 3 in a row on the right hand side (horizontally)
        if (playSquidward) {
          if(!lCircle.classList.contains('spongebob, squidward') || !lCircle.classList.contains('squidward')) {
            if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
              if (rCircle.classList.contains('spongebob') && rrCircle.classList.contains('spongebob')) {
                playColumnTwo()
                console.log('Rdefended3')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend vertically if 3 in a column
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
              playColumnThree()
              inCheckCircle.classList.add('connect-three')
              bCircle.classList.add('connect-three')
              bbCircle.classList.add('connect-three')
              console.log('Vdefended3')
              playSquidward = false
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a row on the left hand side (horizontally)
        if (playSquidward) {
          if (rCircle !== undefined && brCircle !== undefined) {
            if(!rCircle.classList.contains('spongebob') || !rCircle.classList.contains('squidward')) {
              if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
                if (lCircle.classList.contains('spongebob')) {
                  playColumnFour()
                  console.log('Ldefended2')
                  playSquidward = false
                }
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a row on the right hand side (horizontally)
        if (playSquidward) {
          if(!lCircle.classList.contains('spongebob, squidward') || !lCircle.classList.contains('squidward')) {
            if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
              if (rCircle.classList.contains('spongebob')) {
                playColumnTwo()
                console.log('Rdefended2')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend vertically if 2 in a column
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            playColumnThree()
            console.log('Vdefended2')
            playSquidward = false
          } else {
            playSquidward = true
          }
        }

      }

      function defendColumnFour() {
        const inCheckCircle = playedCircles[0]
        const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
        const lCircle = circles[pickedIndex - 1]
        const llCircle = circles[pickedIndex - 2]
        const rCircle = circles[pickedIndex + 1]
        const rrCircle = circles[pickedIndex + 2]
        const bCircle = circles[pickedIndex + width]
        const bbCircle = circles[pickedIndex + width * 2]
        const blCircle = circles[pickedIndex - 1 + width]
        const brCircle = circles[pickedIndex + 1 + width]

        // Defend if there 3 in a row on the left hand side (horizontally)
        if(!rCircle.classList.contains('spongebob, squidward') || !rCircle.classList.contains('squidward')) {
          if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
            if (lCircle.classList.contains('spongebob') && llCircle.classList.contains('spongebob')) {
              playColumnFive()
              console.log('Ldefended')
              playSquidward = false
            }
          }
        } else {
          playSquidward = true
        }

        // Defend if there 3 in a row on the right hand side (horizontally)
        if (playSquidward) {
          if(!lCircle.classList.contains('spongebob, squidward') || !lCircle.classList.contains('squidward')) {
            if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
              if (rCircle.classList.contains('spongebob') && rrCircle.classList.contains('spongebob')) {
                playColumnThree()
                console.log('Rdefended')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 3 in a column vertically
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
              playColumnFour()
              inCheckCircle.classList.add('connect-three')
              bCircle.classList.add('connect-three')
              bbCircle.classList.add('connect-three')
              console.log('defended')
              playSquidward = false
            }
          } else {
            playSquidward = true
          }
        }
        // Defend if there 2 in a row on the left hand side (horizontally)
        if (playSquidward) {
          if(!rCircle.classList.contains('spongebob, squidward') || !rCircle.classList.contains('squidward')) {
            if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
              if (lCircle.classList.contains('spongebob')) {
                playColumnFive()
                console.log('Ldefended')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a row on the right hand side (horizontally)
        if (playSquidward) {
          if(!lCircle.classList.contains('spongebob, squidward') || !lCircle.classList.contains('squidward')) {
            if(blCircle === undefined || blCircle.classList.contains('spongebob') || blCircle.classList.contains('squidward')) {
              if (rCircle.classList.contains('spongebob')) {
                playColumnThree()
                console.log('Rdefended')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a column vertically
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            playColumnFour()
            console.log('defended')
            playSquidward = false
          } else {
            playSquidward = true
          }
        }
      }

      function defendColumnFive() {
        const inCheckCircle = playedCircles[0]
        const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
        const lCircle = circles[pickedIndex - 1]
        const llCircle = circles[pickedIndex - 2]
        const rCircle = circles[pickedIndex + 1]
        const bCircle = circles[pickedIndex + width]
        const bbCircle = circles[pickedIndex + width * 2]
        const brCircle = circles[pickedIndex + 1 + width]

        // Defend if there 3 in a row on the left hand side (horizontally)
        if (rCircle !== undefined && brCircle !== undefined) {
          if(!rCircle.classList.contains('spongebob') || !rCircle.classList.contains('squidward')) {
            if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
              if (lCircle.classList.contains('spongebob') && llCircle.classList.contains('spongebob')) {
                playColumnSix()
                console.log('Ldefended3')
                playSquidward = false
              }
            }
          }
        } else {
          playSquidward = true
        }

        // Defend if there's three in a column vertically
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
              playColumnFive()
              inCheckCircle.classList.add('connect-three')
              bCircle.classList.add('connect-three')
              bbCircle.classList.add('connect-three')
              console.log('Vdefended3')
              playSquidward = false
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there 2 in a row on the left hand side (horizontally)
        if (playSquidward) {
          if (rCircle !== undefined && brCircle !== undefined) {
            if(!rCircle.classList.contains('spongebob') || !rCircle.classList.contains('squidward')) {
              if(brCircle === undefined || brCircle.classList.contains('spongebob') || brCircle.classList.contains('squidward')) {
                if (lCircle.classList.contains('spongebob')) {
                  playColumnSix()
                  console.log('Ldefended2')
                  playSquidward = false
                }
              }
            }
          } else {
            playSquidward = true
          }
        }

        // Defend if there's 2 in a column vertically
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            playColumnFive()
            console.log('Vdefended2')
            playSquidward = false
          } else {
            playSquidward = true
          }
        }
      }

      function defendColumnSix() {
        const inCheckCircle = playedCircles[0]
        const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
        const bCircle = circles[pickedIndex + width]
        const bbCircle = circles[pickedIndex + width * 2]

        // Defend if there's three in a column
        if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
          if (bbCircle !== undefined && bbCircle.classList.contains('spongebob')) {
            playColumnSix()
            inCheckCircle.classList.add('connect-three')
            bCircle.classList.add('connect-three')
            bbCircle.classList.add('connect-three')
            console.log('Vdefended3')
            playSquidward = false
          }
        } else {
          playSquidward = true
        }

        // Defend if there's 2 in a column
        if (playSquidward) {
          if (bCircle !== undefined && bCircle.classList.contains('spongebob')) {
            playColumnSix()
            console.log('Vdefended2')
            playSquidward = false
          } else {
            playSquidward = true
          }
        }

      }

      // if statements that control where spongebob and squidward are placed at every turn

      if (circleIndex === 0) {
        const randomIndex = Math.round(Math.random())
        columnZero[availableZero].classList.add('spongebob')
        playedCircles.unshift(columnZero[availableZero])
        checkForWin()
        columnZero.pop()
        availableZero = columnZero.length - 1
        playSquidward = true

        if (availableZero > 0) {
          defendColumnZero()
          if(playSquidward) {
            switch(randomIndex) {
              case 0:
                playColumnZero()
                break
              case 1:
                if (availableOne > 0) {
                  playColumnOne()
                } else {
                  checkFromColumnOne()
                }
                break
            }
          }
        } else {
          checkFromColumnZero()
        }
      }

      if (circleIndex === 1) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnOne[availableOne].classList.add('spongebob')
        playedCircles.unshift(columnOne[availableOne])
        checkForWin()
        columnOne.pop()
        availableOne = columnOne.length - 1
        playSquidward = true

        if (availableOne > 0) {
          defendColumnOne()
          if(playSquidward) {
            switch(randomIndex) {
              case 0:
                if (availableZero > 0) {
                  playColumnZero()
                } else {
                  checkFromColumnZero()
                }
                break
              case 1:
                playColumnOne()
                break
              case 2:
                if (availableTwo > 0) {
                  playColumnTwo()
                } else {
                  checkFromColumnTwo()
                }
                break
            }
          }
        } else {
          checkFromColumnOne()
        }
      }

      if (circleIndex === 2) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnTwo[availableTwo].classList.add('spongebob')
        playedCircles.unshift(columnTwo[availableTwo])
        checkForWin()
        columnTwo.pop()
        availableTwo = columnTwo.length - 1
        playSquidward = true

        if (availableTwo > 0) {
          defendColumnTwo()
          if(playSquidward) {
            switch(randomIndex) {
              case 0:
                if (availableOne > 0) {
                  playColumnOne()
                } else {
                  checkFromColumnOne()
                }
                break
              case 1:
                playColumnTwo()
                break
              case 2:
                if (availableThree > 0) {
                  playColumnThree()
                } else {
                  checkFromColumnThree()
                }
                break
            }
          }
        } else {
          checkFromColumnTwo()
        }
      }

      if (circleIndex === 3) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnThree[availableThree].classList.add('spongebob')
        playedCircles.unshift(columnThree[availableThree])
        checkForWin()
        columnThree.pop()
        availableThree = columnThree.length - 1
        playSquidward = true

        if (availableThree > 0) {
          defendColumnThree()
          if(playSquidward) {
            switch(randomIndex) {
              case 0:
                if (availableTwo > 0) {
                  playColumnTwo()
                } else {
                  checkFromColumnTwo()
                }
                break
              case 1:
                playColumnThree()
                break
              case 2:
                if (availableFour > 0) {
                  playColumnFour()
                } else {
                  checkFromColumnFour()
                }
                break
            }
          }
        } else {
          checkFromColumnThree()
        }
      }

      if (circleIndex === 4) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnFour[availableFour].classList.add('spongebob')
        playedCircles.unshift(columnFour[availableFour])
        checkForWin()
        columnFour.pop()
        availableFour = columnFour.length - 1
        playSquidward = true

        if (availableFour > 0) {
          defendColumnFour()
          if(playSquidward) {
            switch(randomIndex) {
              case 0:
                if (availableThree > 0) {
                  playColumnThree()
                } else {
                  checkFromColumnThree()
                }
                break
              case 1:
                playColumnFour()
                break
              case 2:
                if (availableFive > 0) {
                  playColumnFive()
                } else {
                  checkFromColumnFive()
                }
                break
            }
          }
        } else {
          checkFromColumnFour()
        }
      }

      if (circleIndex === 5) {
        const randomIndex = Math.floor(Math.random() * 3)
        columnFive[availableFive].classList.add('spongebob')
        playedCircles.unshift(columnFive[availableFive])
        checkForWin()
        columnFive.pop()
        availableFive = columnFive.length - 1
        playSquidward = true

        if (availableFive > 0) {
          defendColumnFive()
          if(playSquidward) {
            switch(randomIndex) {
              case 0:
                if (columnFour > 0) {
                  playColumnFour()
                } else {
                  checkFromColumnFour()
                }
                break
              case 1:
                playColumnFive()
                break
              case 2:
                if (columnSix > 0) {
                  playColumnSix()
                } else {
                  checkFromColumnSix()
                }
                break
            }
          }
        } else {
          checkFromColumnFive()
        }
      }

      if (circleIndex === 6) {
        const randomIndex = Math.round(Math.random())
        columnSix[availableSix].classList.add('spongebob')
        playedCircles.unshift(columnSix[availableSix])
        checkForWin()
        columnSix.pop()
        availableSix = columnSix.length - 1
        playSquidward = true

        if (availableSix > 0) {
          defendColumnSix()
          if(playSquidward) {
            switch(randomIndex) {
              case 0:
                if (availableFive > 0) {
                  playColumnFive()
                } else {
                  checkFromColumnFive()
                }
                break
              case 1:
                playColumnSix()
                break
            }
          }
        } else {
          checkFromColumnSix()
        }
      }

    })
  }

  // Function that creates the hoverable top row to make choices
  function createTopRow(circle, circleIndex) {
    if (circleIndex < width) {
      circle.classList.remove('grid-circle')
      circle.classList.add('grid-choice-circle')
      const circlesChoice = document.querySelectorAll('.grid-choice-circle')
      hoverChoices(circlesChoice)
      playChoice(circle, circleIndex)
    }
  }

  // Function that initiates the playing board: the FOR LOOP is used to build each square as many times as the width
  function createBoard() {
    for (var i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      const circle = document.createElement('div')
      square.classList.add('grid-square')
      square.style.display = 'block'
      circle.classList.add('grid-circle')
      circle.style.display = 'block'
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

  // Function that clears the board, used when the game is reset
  function clearBoard() {
    playedCircles.forEach(playedCircle => {
      playedCircle.classList.remove('spongebob')
      playedCircle.classList.remove('squidward')
      playedCircle.classList.remove('winning-circles')
      playedCircle.classList.remove('loosing-circles')
    })
    playedCircles = []
    squares = []
    circles = []
    columnZero = []
    columnOne = []
    columnTwo = []
    columnThree = []
    columnFour = []
    columnFive = []
    columnSix = []
    grid.innerHTML = ''

  }

  // Event listener that creates the board, used when the game is started
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    instructions.forEach(instruction => instruction.style.display = 'none')
    scoreBoard.style.visibility = 'visible'
    resetButton.style.visibility = 'visible'
    const sound = document.querySelector('audio')
    sound.play()
    createBoard()
  })

  // Event listener on the reset bottom which clears the board and creates a new game (score is kept the same, it does not refresh everytime)
  resetButton.addEventListener('click', () => {
    clearBoard()
    createBoard()
  })
}

window.addEventListener('DOMContentLoaded', init)
