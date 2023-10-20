PROJECT IDEA

Create a short choose-your-own-adventure as a proof of concept for a larger project.

The design and story will be heavily themed around the material and world created for the tabletop roleplaying game, Mork Borg*. Mork Borg has a bold visual style that I love and would like to emulate.

I have already created a pamphlet adventure for Mork Borg and relaased it via Kickstarter. I considered translating that adventure for this project but the content might be a little too graphic. You can download the free pdf here (only suitable for 18+) - ***Link to Oyster Ditch

DESIGN

Colour choice as players decision as opposed to changed automatically in case players dislike the lurid greens/yellows, etc. Not just for fans of the game.

***include links to Johan Nohr's design manifesto. 

THIRD PARTY LICENCE
Mork Borg has a third-party licence. It allows creators to make money from any products they create from it. Creators have to include specific information somewhere on their project. The licence allows creators to use aspects of the Mork Borg rulebook such as mechanics, place names, and some creatures.

For more information on the Mork Borg third-party licence, see here - <https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjerNqr7PyBAxVaW0EAHerpBUIQFnoECA4QAQ&url=https%3A%2F%2Fliberludorum.com%2F2021%2F07%2F05%2Fthe-mork-borg-third-party-license-you%2F&usg=AOvVaw3YTWA8FG2jswu0qQE8RIYG&opi=89978449>

You can read about the choose-your-own-adventure format here - <https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure> and here - <https://en.wikipedia.org/wiki/Fighting_Fantasy>

Scope

The goal of the project will be to construct just enough narrative to tie together scenes together to demonstrate both the core mechanics and my ability to use Javascript. These are listed in order of importance. I aim to include as many of these as I can. I would like to continue to grow the project in o a full story. 

Core Mechanics

- [x] Splash screen, licence information.
- [x] Moving from room to room.
- [x] Create alert when user attempts to leave page.
- [x] Using a 'static' object.
- [ ] Pick up an object and add it to your inventory.
- [ ] Use an object in your inventory on another object.
- [ ] Time-sensitive encounters.
- [ ] Combat - See COMBAT.
- [ ] Conversation with non-player character.
- [ ] Congratulations message on completing the adventure.
- [ ] Player stats, between splash screen and intro statement.
- [ ] Incorporate stats into encounters.
- [ ] Login.
- [ ] Option to save game.
- [ ] Scoreboard.

***Umlaut information

SPLASH SCREEN

Large hero image with a start button.

The third-party licence information will either be on the splash screen itself or use a modal to display the information. This will need to be trial and error as I'm not experienced enough wth layout to make that decision beforehand.

Start Game
Initial Idea 
Change HTML of the "content" box to the standard HTML of the main game mode. On trying this I found that I was unabl

The start page needed a 

BASIC NAVIGATION
Started by generating the buttons when moving rooms. Too complex/double handing. 
changed it to fixed buttons that disable if they lead to a room that doesn't exist.
<https://stackoverflow.com/questions/55740746/how-to-find-index-of-empty-object-in-array-of-object#:~:text=You%20can%20use%20Object.,Object%20for%20check%20empty%20object.>
<https://www.freecodecamp.org/news/check-if-an-object-is-empty-in-javascript/>

Alert When Leaving Page

I followed the information here - <https://www.w3schools.com/tags/ev_onbeforeunload.asp#:~:text=The%20onbeforeunload%20event%20fires%20when>,is%20different%20in%20different%20browsers.>


Error
Once I implemented the Alert I came up against the following error in my last milestone project. I remembered that after hours of trying to find the answer and trawling through YouTube videos and forum posts that were vastly outside my skill level, I came across the following line of code that just fixed the issue in one step. 
Python Socket.Error: [Errno 98] Address Already In Use
kill -9 $(ps -A | grep python | awk '{print $1}')

Using Static Objects
The main benefit of using the 2D array matrix instead of each button having its own code to change the HTML of the content box is that it allows rooms to be edited far easier. 
In my basic example, clicking the button for the light switch in room 8, changed the description of room 5 when you return.
