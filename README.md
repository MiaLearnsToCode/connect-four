![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Software Engineneering Immersive: Project 1
This was my first project of the General Assembly Software Engineering Immersive course (Week 4).

---

# Spongebob SquarePants Connect Four

This project is a browser game of Connect four built with Vanilla Javascript.

## Built With

1. HTML5
    * Audio
2. CSS
    * Animations
3. Javascript
4. GitHub

## Deployment

The game is deployed on GitHub Pages and it can be found here: https://mialearnstocode.github.io/connect-four/

## Getting Started

Use the clone button to download the game source code. Open the index.html file in your browser and the game should start, if not check console for any issues. The images used in this game are stored in the images folder and are all png files.

## Game Architecture

Connect 4 is a game where players attempt to make a line of four pieces in a 7 x 6 grid. Players can drop their pieces into columns, so that their piece rests in the lowest available space in that column.

The game has two modes which the player can choose from: one player or two players.

![readme-one](images/readme-one.png)

In the **two players mode** the players take turns to drop a Spongebob or a Squidward respectively until one of them manages to place four in a line vertically, horizontally or diagonally.

In the **one player mode** the player plays as Spongebob against the computer (Squidward). The computer reacts to Spongebob's move following these rules:

1) It checks if Spongebob has three in a row (vertical, diagonal or horizontal) and plays on the fourth circle. This for now only works if Spongebob's last move was to place the third circle. There's also an animation that shakes the three Spongebobs in a line to indicate that squidward defended.

The defence priority is horizontal > vertical > diagonal as naturally players will try to place four in a row or a column.

2) If there's no '3 in a line' then it checks for 2s in a line in all directions.

3) If there's no '2 in a line' either then it generates a random number between 0 and 2 and if 0 then places the player on the first available left hand side column. If 1 then places it above and if 2 then on the right.

An example of the function used for column four:

```js
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
```

As the board fills up, there are also some rules that set an hierarchy to tell Squidward where to go if the column it's meant to go to is already full. It looks at the closest columns available then moves on to ones further away. If there are no more available places then **it's a draw**.

After every move of both players (or both the player and the computer), the game checks for 'winning' of each player (in one player mode if squidward wins that means that player lost). Winning assigns and point to Spongebob and loosing assigns one to Squidward. The functions also highlight the cells that won/lost respectively yellow or red and the top row is hidden so the player can't continue to play on.

![readme-two](images/readme-two.png)


## Challenges and future improvements

The main challenge of this project was to create a sound logic that allows Squidward to stop Spongebob from winning too easily.

As every column behaves slightly differently from one another I found it easier to split each defend function based on the column the last Spongebob was dropped in.

This strategy was effective as it allowed to easily debug which columns were being played on correctly or not. However, the code is quite long and it makes Squidward's move reliant on Spongebob's last one rather then looking at the whole game so far.

So in the future I hope to refactor the defend functions so that the same function can be called from each column. I also hope to improve on the game and allow Squidward to defend even if there's two spongebob on one side and one on the other like so :

![readme-three](images/readme-three.png)

And finally I will add a 'attack' function that allows Squidward to actively try and make a three / four in a row as currently it only wins by chance (usually 1 in 5 games).

## Author

Mia Meroi - First Project
Link to portfolio here: miameroi.com
