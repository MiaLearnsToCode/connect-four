// Function loads the game when the window is open
function init() {

  // Playing grid variables
  const instructions = document.querySelectorAll('p, h3')
  const grid = document.querySelector('.grid')
  const width = 7
  let squares = []
  let circles = []
  let columnZero = []
  let columnOne = []
  let columnTwo = []
  let columnThree = []
  let columnFour = []
  let columnFive = []
  let columnSix = []
  let columns = [columnZero, columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix ]
  let playedCircles = []

  // 1 or 2 player mode variables
  const onePlayer = document.querySelector('#one-player')
  const twoPlayer = document.querySelector('#two-player')
  let onePlayerMode = false
  let playSquidward = true
  let playerSpongebob = true

  // Variables that control the score
  const scoreBoard = document.querySelector('#score-board')
  const spanSpongebob = document.querySelector('#spongebob-score')
  const spanSquidward = document.querySelector('#squidward-score')
  let scoreSpongebob = 0
  let scoreSquidward = 0

  // Reset bottons selectors
  const resetButton = document.querySelector('#reset-one-player')
  const resetButtonTwo = document.querySelector('#reset-two-player')

  // Function that pushes each circle into the right column array
  function createCol(circle, circleIndex) {
    for(let i = 0; i <= columns.length; i++) {
      const column = columns[i]
      if(circleIndex % width === i) {
        column.push(circle)
      }
    }
  }

  // Function that highlights a column's circles yellow when you hover over the top circle
  function highlightCol(circleChosen) {
    for(let i = 0; i < columns.length; i++) {
      const column = columns[i]
      if(column.includes(circleChosen)) {
        column.forEach(gridCircle => {
          gridCircle.classList.add('grid-circle-highlighted')
        })
      }
    }
  }

  // Function that removes the highlights on columns when cursor moves away
  function removeHighlightCol() {
    let i = 0
    while(i < columns.length) {
      columns[i].forEach(gridCircle => {
        gridCircle.classList.remove('grid-circle-highlighted')
      })
      i++
    }
  }

  // Event listeners on the top circles for when you hover over them
  function hoverChoices(circlesChoice) {
    // adding event listeners to the top row
    circlesChoice.forEach(circleChosen => circleChosen.addEventListener('mouseenter', () => {
      circleChosen.classList.add('spongebob')
      highlightCol(circleChosen)
    }))
    circlesChoice.forEach(circleChosen => circleChosen.addEventListener('mouseleave', () => {
      removeHighlightCol()
      circleChosen.classList.remove('spongebob')
    }))
  }

  // Event listeners on the top circles for when you hover over them (for the two player mode)
  function hoverChoicesTwo(circlesChoice) {
    // adding event listeners to the top row
    circlesChoice.forEach(circleChosen => circleChosen.addEventListener('mouseenter', () => {
      circleChosen.classList.add('two-player-hover')
      highlightCol(circleChosen)
    }))
    circlesChoice.forEach(circleChosen => circleChosen.addEventListener('mouseleave', () => {
      removeHighlightCol()
      circleChosen.classList.remove('two-player-hover')
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

  // Function evoked every time the spongebob plays, to check if the player has 4 in a line)
  function checkForWin(player) {

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
    const leftArray = [lCircle, llCircle, lllCircle]
    const rightArray = [rCircle, rrCircle, rrrCircle]
    const bottomArray = [bCircle, bbCircle, bbbCircle]
    const bottomRightArray = [brCircle, brbrCircle, brbrbrCircle]
    const bottomLeftArray = [blCircle, blblCircle, blblblCircle]
    const arrays = [leftArray, rightArray, bottomArray, bottomRightArray, bottomLeftArray]

    let winningClass = ''
    if (player === 'spongebob') {
      winningClass = 'winning-circles'
    } else {
      winningClass = 'loosing-circles'
    }

    for (let i=0; i < arrays.length; i++) {
      if(arrays[i][0] !== undefined && arrays[i][0].classList.contains(player)) {
        if(arrays[i][1] !== undefined && arrays[i][1].classList.contains(player)) {
          if (arrays[i][2] !== undefined && arrays[i][2].classList.contains(player)) {
            inCheckCircle.classList.add(winningClass)
            arrays[i][0].classList.add(winningClass)
            arrays[i][1].classList.add(winningClass)
            arrays[i][2].classList.add(winningClass)
            if (player === 'spongebob') {
              playSquidward = false
              addSpongebob()
            } else {
              addSquidward()
            }
            stopHoverChoices()
          }
        }
      }
    }
  }

  // Functions that place Squidward in the indicated column
  function playColumn(n) {
    const availableZero = columnZero.length - 1
    const availableOne = columnOne.length - 1
    const availableTwo = columnTwo.length - 1
    const availableThree = columnThree.length - 1
    const availableFour = columnFour.length - 1
    const availableFive = columnFive.length - 1
    const availableSix = columnSix.length - 1
    const availableArray = [availableZero, availableOne, availableTwo, availableThree, availableFour, availableFive, availableSix]

    const column = columns[n]
    const available = availableArray[n]
    column[available].classList.add('squidward')
    playedCircles.unshift(column[available])
    checkForWin('squidward')
    columns[n].pop()
    availableArray[n] = column.length - 1
  }
  function playSelf(n) {
    playColumn(n)
  }





  // Functions that define the hierarchy of choice as to where squidward should be placed based on spongebob's last move
  function check(hierarchyArray) {
    const availableZero = columnZero.length - 1
    const availableOne = columnOne.length - 1
    const availableTwo = columnTwo.length - 1
    const availableThree = columnThree.length - 1
    const availableFour = columnFour.length - 1
    const availableFive = columnFive.length - 1
    const availableSix = columnSix.length - 1
    const availableArray = [availableZero, availableOne, availableTwo, availableThree, availableFour, availableFive, availableSix]
    let optionsLeft = 6
    for (let i = 0; i < hierarchyArray; i++) {
      if (availableArray[i] > 0) {
        playColumn(i)
      } else {
        optionsLeft -= 1
      }
    }
    if (optionsLeft === 0) {
      addSquidward()
      addSpongebob()
      stopHoverChoices()
    }
  }

  function play(circle, circleIndex) {
    const availableZero = columnZero.length - 1
    const availableOne = columnOne.length - 1
    const availableTwo = columnTwo.length - 1
    const availableThree = columnThree.length - 1
    const availableFour = columnFour.length - 1
    const availableFive = columnFive.length - 1
    const availableSix = columnSix.length - 1

    // functions that define how to defend vertically, horizontally and diagonally
    function defendThreeV(inCheckCircle, array, n) {
      if (playSquidward) {
        if (array[0] !== undefined && array[0].classList.contains('spongebob')) {
          if (array[1] !== undefined && array[1].classList.contains('spongebob')) {
            playColumn(n)
            inCheckCircle.classList.add('connect-three')
            array[0].classList.add('connect-three')
            array[1].classList.add('connect-three')
            playSquidward = false
          }
        } else {
          playSquidward = true
        }
      }

    }

    function defendThreeH(inCheckCircle, array, n) {
      if(playSquidward) {
        if (array[0] && array[1]) {
          if(!array[0].classList.contains('spongebob') || !array[0].classList.contains('squidward')) {
            if(array[1] === undefined || array[1].classList.contains('spongebob') || array[1].classList.contains('squidward')) {
              if (array[2].classList.contains('spongebob') && array[3].classList.contains('spongebob')) {
                playColumn(n)
                inCheckCircle.classList.add('connect-three')
                array[2].classList.add('connect-three')
                array[3].classList.add('connect-three')
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }
      }
    }

    function defendThreeD(inCheckCircle, array, n) {
      if (playSquidward) {
        if (array[0] && array[1]) {
          if (!array[2].classList.contains('spongebob') || !array[2].classList.contains('squidward')) {
            if (array[3].classList.contains('spongebob') || array[3].classList.contains('squidward')) {
              if (array[0].classList.contains('spongebob') && array[1].classList.contains('spongebob')) {
                playColumn(n)
                inCheckCircle.classList.add('connect-three')
                array[0].classList.add('connect-three')
                array[1].classList.add('connect-three')
                playSquidward = false
              }
            }
          }
        } else {
          playSquidward = true
        }
      }
    }

    function defendTwoV(circle, n) {
      if (playSquidward) {
        if (circle !== undefined && circle.classList.contains('spongebob')) {
          playColumn(n)
          playSquidward = false
        } else {
          playSquidward = true
        }
      }
    }

    function defendTwoH(array, n) {
      if(playSquidward) {
        if(array[0] && array[1]) {
          if(!array[0].classList.contains('spongebob') || !array[0].classList.contains('squidward')) {
            if(array[1] === undefined || array[1].classList.contains('spongebob') || array[1].classList.contains('squidward')) {
              if (array[2].classList.contains('spongebob')) {
                playColumn(n)
                playSquidward = false
              }
            }
          } else {
            playSquidward = true
          }
        }
      }
    }

    // Functions that defend each column horizontally and vertically
    function defendColumnZero() {
      const inCheckCircle = playedCircles[0]
      const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
      const bCircle = circles[pickedIndex + width]
      const bbCircle = circles[pickedIndex + width * 2]

      //  Defende vertically if 3 in a column
      defendThreeV(inCheckCircle, [bCircle, bbCircle], 0)

      //  Defende vertically if 2 in a column
      defendTwoV(bCircle, 0)
    }

    function defendColumnOne() {
      const inCheckCircle = playedCircles[0]
      const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
      const lCircle = circles[pickedIndex - 1]
      const rCircle = circles[pickedIndex + 1]
      const rrCircle = circles[pickedIndex + 2]
      const bCircle = circles[pickedIndex + width]
      const bbCircle = circles[pickedIndex + width * 2]
      const blCircle = circles[pickedIndex + width - 1]
      const brCircle = circles[pickedIndex + width + 1]
      const brbrCircle = circles[pickedIndex + width * 2 + 2]
      const tlCircle = circles[pickedIndex - width - 1]

      defendThreeH(inCheckCircle, [lCircle, blCircle, rCircle, rrCircle], 0)

      // Defend if 3 in a column vertically
      defendThreeV(inCheckCircle, [bCircle, bbCircle], 1)

      // Defend if 3 in a row diagonally (bottom right)
      defendThreeD(inCheckCircle, [brCircle, brbrCircle, tlCircle, lCircle], 0)

      // Defend if there 2 in a row on the right hand side (horizontally)
      defendTwoH([lCircle, blCircle, rCircle], 0)

      // Defend if 2 in a column vertically
      defendTwoV(bCircle, 1)
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
      const blblCircle = circles[pickedIndex - 2 + width * 2]
      const brCircle = circles[pickedIndex + 1 + width]
      const brbrCircle = circles[pickedIndex + width * 2 + 2]
      const tlCircle = circles[pickedIndex - width - 1]
      const trCircle = circles[pickedIndex - width + 1]

      // Defend if there 3 in a row on the left hand side (horizontally)
      defendThreeH(inCheckCircle, [rCircle, brCircle, lCircle, llCircle], 3)

      // Defend if there 3 in a row on the right hand side (horizontally)
      defendThreeH(inCheckCircle, [lCircle, blCircle, rCircle, rrCircle], 1)

      // Defend vertically if 3 in a column
      defendThreeV(inCheckCircle, [bCircle, bbCircle], 2)

      // Defend if 3 in a row diagonally (bottom right)
      defendThreeD(inCheckCircle, [brCircle, brbrCircle, tlCircle, lCircle], 1)

      // Defend if 3 in a row diagonally (bottom left)
      defendThreeD(inCheckCircle, [blCircle, blblCircle, trCircle, rCircle], 3)

      // Defend if there 2 in a row on the left hand side (horizontally)
      defendTwoH([rCircle, brCircle, lCircle], 3)

      // Defend if there 2 in a row on the right hand side (horizontally)
      defendTwoH([lCircle, blCircle, rCircle], 1)

      // Defend vertically if 2 in a column
      defendTwoV(bCircle, 2)
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
      const brbrCircle = circles[pickedIndex + width * 2 + 2]
      const tlCircle = circles[pickedIndex - width - 1]
      const trCircle = circles[pickedIndex - width + 1]
      const blblCircle = circles[pickedIndex - 2 + width * 2]

      // Defend if there 3 in a row on the left hand side (horizontally)
      defendThreeH(inCheckCircle, [rCircle, brCircle, lCircle, llCircle], 4)

      // Defend if there 3 in a row on the right hand side (horizontally)
      defendThreeH(inCheckCircle, [lCircle, blCircle, rCircle, rrCircle], 2)

      // Defend vertically if 3 in a column
      defendThreeV(inCheckCircle, [bCircle, bbCircle], 3)

      // Defend if 3 in a row diagonally (bottom right)
      defendThreeD(inCheckCircle, [brCircle, brbrCircle, tlCircle, lCircle], 2)

      // Defend if 3 in a row diagonally (bottom left)
      defendThreeD(inCheckCircle, [blCircle, blblCircle, trCircle, rCircle], 4)

      // Defend if there 2 in a row on the left hand side (horizontally)
      defendTwoH([rCircle, brCircle, lCircle], 4)

      // Defend if there 2 in a row on the right hand side (horizontally)
      defendTwoH([lCircle, blCircle, rCircle], 2)

      // Defend vertically if 2 in a column
      defendTwoV(bCircle, 3)
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
      const brbrCircle = circles[pickedIndex + width * 2 + 2]
      const tlCircle = circles[pickedIndex - width - 1]
      const trCircle = circles[pickedIndex - width + 1]
      const blblCircle = circles[pickedIndex - 2 + width * 2]

      // Defend if there 3 in a row on the left hand side (horizontally)
      defendThreeH(inCheckCircle, [rCircle, brCircle, lCircle, llCircle], 5)

      // Defend if there 3 in a row on the right hand side (horizontally)
      defendThreeH(inCheckCircle, [lCircle, blCircle, rCircle, rrCircle], 3)

      // Defend if there 3 in a column vertically
      defendThreeV(inCheckCircle, [bCircle, bbCircle], 4)

      // Defend if 3 in a row diagonally (bottom right)
      defendThreeD(inCheckCircle, [brCircle, brbrCircle, tlCircle, lCircle], 3)

      // Defend if 3 in a row diagonally (bottom left)
      defendThreeD(inCheckCircle, [blCircle, blblCircle, trCircle, rCircle], 5)

      // Defend if there 2 in a row on the left hand side (horizontally)
      defendTwoH([rCircle, brCircle, lCircle], 5)


      // Defend if there 2 in a row on the right hand side (horizontally)
      defendTwoH([lCircle, blCircle, rCircle], 3)

      // Defend if there 2 in a column vertically
      defendTwoV(bCircle, 4)
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
      const trCircle = circles[pickedIndex - width + 1]
      const blCircle = circles[pickedIndex - 1 + width]
      const blblCircle = circles[pickedIndex - 2 + width * 2]

      // Defend if there 3 in a row on the left hand side (horizontally)
      defendThreeH(inCheckCircle, [rCircle, brCircle, lCircle, llCircle], 6)

      // Defend if there's three in a column vertically
      defendThreeV(inCheckCircle, [bCircle, bbCircle], 5)

      // Defend if 3 in a row diagonally (bottom left)
      defendThreeD(inCheckCircle, [blCircle, blblCircle, trCircle, rCircle], 6)

      // Defend if there 2 in a row on the left hand side (horizontally)
      defendTwoH([rCircle, brCircle, lCircle], 6)

      // Defend if there's 2 in a column vertically
      defendTwoV(bCircle, 5)
    }

    function defendColumnSix() {
      const inCheckCircle = playedCircles[0]
      const pickedIndex = parseInt(inCheckCircle.getAttribute('data-id'))
      const bCircle = circles[pickedIndex + width]
      const bbCircle = circles[pickedIndex + width * 2]

      // Defend if there's three in a column
      defendThreeV(inCheckCircle, [bCircle, bbCircle], 6)

      // Defend if there's 2 in a column
      defendTwoV(bCircle, 6)
    }

    // if statements that control where spongebob and squidward are placed at every turn
    for (let i = 0; i < width; i++) {
      const defendFunctions = [defendColumnZero, defendColumnOne, defendColumnTwo, defendColumnThree, defendColumnFour, defendColumnFive, defendColumnSix]
      const checkArrays = [[1,2,3,4,5,6], [0,2,3,4,5,6], [1,3,0,4,5,6], [2,4,1,5,0,6], [3,5,2,6,1,0], [6,4,3,2,1,0], [5,4,3,2,1,0]]

      if (circleIndex === i) {
        const availableArray = [availableZero, availableOne, availableTwo, availableThree, availableFour, availableFive, availableSix]
        const column = columns[i]
        const available = availableArray[i]
        playSquidward = true
        const randomIndex = Math.floor(Math.random() * 3)
        column[available].classList.add('spongebob')
        playedCircles.unshift(column[available])
        checkForWin('spongebob')
        column.pop()
        availableArray[i] = column.length - 1

        if (playSquidward) {
          if (available > 0) {
            defendFunctions[i]()
            if(playSquidward) {
              switch(randomIndex) {
                case 0:
                  if (availableArray[i - 1] > 0) {
                    playColumn(i - 1)
                  } else {
                    check(checkArrays[i - 1])
                  }
                  break
                case 1:
                  playSelf(i)
                  break
                case 2:
                  if (availableArray[i + 1] > 0) {
                    playColumn(i + 1)
                  } else {
                    check(checkArrays[i + 1])
                  }
                  break
              }
            }
          } else {
            check(checkArrays[i])
          }
        }
      }
    }
  }


  // Event listener on the top circles for when you click on them and spongebob appears at the bottom on the lowest available circle in playerx1 mode
  function playChoice(circle, circleIndex) {
    circle.addEventListener('click', () => play(circle, circleIndex))
  }

  // Event listener on the top circles for when you click on them and spongebob appears at the bottom on the lowest available circle in playerx2 mode
  function playChoiceTwo(circle, circleIndex) {
    circle.addEventListener('click', () => {
      const availableZero = columnZero.length - 1
      const availableOne = columnOne.length - 1
      const availableTwo = columnTwo.length - 1
      const availableThree = columnThree.length - 1
      const availableFour = columnFour.length - 1
      const availableFive = columnFive.length - 1
      const availableSix = columnSix.length - 1
      const availableArray = [availableZero, availableOne, availableTwo, availableThree, availableFour, availableFive, availableSix]
      playerSpongebob = !playerSpongebob

      for (let i = 0; i < availableArray.length; i++) {
        const column = columns[i]
        let available = availableArray[i]
        if(circleIndex === i) {
          if(playerSpongebob) {
            column[available].classList.add('spongebob')
            playedCircles.unshift(column[available])
            checkForWin('spongebob')
          } else {
            column[available].classList.add('squidward')
            playedCircles.unshift(column[available])
            checkForWin('squidward')
          }
          column.pop()
          available = column.length - 1
        }
      }
    })
  }

  // Function that creates the hoverable top row to make choices (the if statement checks which mode the play is in and creates a different row accordingly)
  function createTopRow(circle, circleIndex) {
    if (circleIndex < width) {
      circle.classList.remove('grid-circle')
      circle.classList.add('grid-choice-circle')
      const circlesChoice = document.querySelectorAll('.grid-choice-circle')
      if (onePlayerMode) {
        hoverChoices(circlesChoice)
        playChoice(circle, circleIndex)
      } else {
        hoverChoicesTwo(circlesChoice)
        playChoiceTwo(circle, circleIndex)
      }
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
    squares = []
    circles = []
    columnZero = []
    columnOne = []
    columnTwo = []
    columnThree = []
    columnFour = []
    columnFive = []
    columnSix = []
    columns = [columnZero, columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix ]
    playedCircles = []
    grid.innerHTML = ''
    createBoard()
  }

  // Functions that clears the instructions screen
  function clearInstructions() {
    onePlayer.style.display = 'none'
    twoPlayer.style.display = 'none'
    instructions.forEach(instruction => instruction.style.display = 'none')
    scoreBoard.style.visibility = 'visible'
    resetButton.style.visibility = 'visible'
    resetButtonTwo.style.visibility = 'visible'
    const sound = document.querySelector('audio')
    sound.play()
    createBoard()
  }

  // Event listener that creates the board, used when the game is started with one player vs computer
  onePlayer.addEventListener('click', () => {
    onePlayerMode = true
    clearInstructions()
  })

  // Event listener that creates the board, used when the game is started with two players
  twoPlayer.addEventListener('click', () => {
    onePlayerMode = false
    clearInstructions()
  })

  // Event listener on the reset bottom which clears the board and creates a new game (score is kept the same, it does not refresh everytime)
  resetButton.addEventListener('click', () => {
    onePlayerMode = true
    clearBoard()
  })

  // Event listener on the reset bottom which clears the board and creates a new game (score is kept the same, it does not refresh everytime)
  resetButtonTwo.addEventListener('click', () => {
    onePlayerMode = false
    clearBoard()
  })

}

window.addEventListener('DOMContentLoaded', init)
