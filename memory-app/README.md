# Project One

## Don't Forget! - A Memory App

This is my submission for Project One in the General Assembly Software Engineering Immersive. 

Requirements:
* Built with HTML, CSS, Javascript, & jQuery
* Hosted on Github pages
* Minimum of 30 commits to the repo
* This readme file
* App must implement responsive design
* App must have 1 or more complex user interface module
* App must have game functionality (win/lose)

## The Approach

My goal for this project was to keep it simple, while focusing on creating a complete package: Something that was fun & challenging, but would also look great and be intuitive. The focus was on making the gameplay smooth, and making the player experience as good as possible.

I approched these goals by leaning on amimations and modals, and keeping the bulk of the app relatively text free. I was aiming to create an intuitive game that users would be able to figure out with visual clues. I planned to also include tooltips on all elements that might need further explaination.

I would need an array of colors to choose from, a way to compare the winning element color to the selected element, a way to keep track of results, and I would need to be able reset and regenerate everything each round.

## Technologies Used

The .js file has a few key elements, and houses the bulk of the game elements and logic. I used a jQuery and a for loop to create the game cards pulling colors from an array of hex codes.  I also assigned this hex code as a class to each div. I would use this class to compare for the win condition, as the background-color assigned would change when the cards flipped/were hidden. The loop also deposited the selected colors for the round into a seperate array, so that the winning color would be pulled from this array of colors "in use".

I used the loop to attach event listeners on each card which were connected to a function that would compare the selected card on click to the winning card by using the .hasClass method to check if the selected card had the same class as the winning card.

If the guess was correct the function would increment the streak variable which is displayed on the scoreboard area of the app, and then run a function to clear the board and create new cards.
If the guess was incorrect, the function would decrement the guesses left variable, and change the cards background-color to match the game board, effectively making it "disappear". I set transitions in the CSS to make this transition a smooth fade.

I used setTimeout A LOT to get th flow of information correct, such as not generating a match card until the game cards were hidden, and the hiding of the game cards after the flip animation.

Tooltips were added thoughout the game board to help explain various elements, including all aspects of the scoreboard.

Modals were added to update the player on the results of the game, as well as to setup the game on initial page load, and via a "How To Play" button.


## Bug Hunting!

Setting the background-color from an array of set colors was necessary since using random colors would have resulted in colors too similar. But because background-color was set at the element level, that meant "hiding" the cards could not be done by CSS, and required an additional jQuery .css element-level update. This made creating the win condition very tricky! I could not simply compare backgound-colors, as I did not have a "history" of them.
I ended up adding the hex code as a class as well when the div was created and comparing the classes for win condition.

I was well into the project, and was surprised by how hard the game was! Too hard... something was suspicious. I eventually discovered that my code was not clearing the array of 18 colors used each round to pull the "winning" color from. So I was getting rounds that the winning color didn't even exist on the game board! A quick line of code later, (line 218 in .js) and gameplay got so much less frustrating!


## Unsolved Problems

One unsolved bug is that if the RESET button is clicked mid-game load it can cause some strange glitches, including dual winning cards, and sometimes extra game tiles. Probably due to the timing/delays in the function executions during setup.

Another issue was working with background-colors. Since they were being set by jQuery on the elements, they were not able to be manipulated by CSS. I could not add visual elements like hover to the game pieces.

I was not able to avoid choosing multiples of the same color for the game board cards. Because the array was limited (40 colors) the chances of a loop getting 18 uniques by chance was, well it was impossible. The code broke the game! So, duplicates are possible on the game board, and my work-around was to reduce the total number of guesses the player had to compensate.

## Improvements To Make

I would love to figure out more interactivity, like the hover effect discribed above. 

I would also like to implement a "loading" message on the game board while the tiles are generated. I attempted this with an h2 in the HTML, but it is cleared by the tile generating function before it's ever visible. Clearing the board each round is necessary, so I'm not sure how to add that feature.