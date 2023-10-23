# Milestone Project #2 - Choose Your Own Adventure Game

## Proposal

Create a short choose-your-own-adventure as a proof of concept for a larger project.

The design and story will be heavily themed around the material and world created for the tabletop roleplaying game, Mork Borg. Mork Borg has a bold visual style that I love and would like to emulate. You can find out more about Mork Borg [here](https://morkborg.com/)

I have already created a pamphlet adventure for Mork Borg and released it via Kickstarter. I considered translating that specific adventure for this project but the content might be a little too graphic. You can download the free pdf [here](https://redgod.itch.io/the-oyster-ditch)  if you're curious - (only suitable for 18+)

## User Experience

The ultimate experience is ahat of an interactive novel. Players can choose where to go and in what order to do things. There will be very basic puzzle/inventory/combat elements but really it's just another way for players to explore the world of Mork Borg.

## Scope

The goal of the project will be to construct just enough narrative to tie together scenes together to demonstrate both the core mechanics and my ability to use Javascript. These are listed in order of importance. I aim to include as many of these as I can. I would like to continue to grow the project in o a full story.

## Design

Colour choice should be the player's decision as opposed to changing automatically as not all users will appreciate the lurid scheme used in Mork Borg products. This project should ideally be usaable by not just fans of the game.

Several fans have already created a design primer to emulate the Mork Borg style. I have used this in the past and found it incredibly useful. You can find the design primer [here](https://docs.google.com/document/d/1j0ZhSZ7NFY_Yo1Ak1nnL1cwdzVrOOyXHkGPnBxYPsxg/edit#heading=h.a7wtjr6j2bj3).

Johan Nohr, the art director and artist, has also released several blog posts about his style. You can find them [here](https://threadreaderapp.com/thread/1276532452627034112.html) and [here](https://threadreaderapp.com/thread/1275739369735929856.html).

### Third Party License

Mork Borg has a third-party licence. It allows creators to make money from any products they create from it. Creators have to include specific information somewhere on their project. The licence allows creators to use aspects of the Mork Borg rulebook such as mechanics, place names, and some creatures.

For more information on the Mork Borg third-party licence, see [here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjerNqr7PyBAxVaW0EAHerpBUIQFnoECA4QAQ&url=https%3A%2F%2Fliberludorum.com%2F2021%2F07%2F05%2Fthe-mork-borg-third-party-license-you%2F&usg=AOvVaw3YTWA8FG2jswu0qQE8RIYG&opi=89978449).

You can read about the choose-your-own-adventure format [here](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) and [here](https://en.wikipedia.org/wiki/Fighting_Fantasy).

## Tools

* Codeanywhere - IDE
* Google Fonts
* Font Awesome - Icons
* Bootstrap 5 - Layout and some functionality
* FREEFORMATTER.COM - Beautify code before final submission
* Pixelied and TinyPNG - Reduce loading time of splash screen image
* w3 Validator - Check codes for errors
* Github - Hosting and deployment

## Core Mechanics

[x] Splash screen, licence information.
[x] Moving from room to room.
- [x] Create alert when user attempts to leave page.
- [x] Using a 'static' object.
- [x] Pick up an object and add it to your inventory.
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

Ultimately I failed to achieve the whole list but the "game" contains the following features - 

* Start screen
  * Third party license information
  * Start button
* Main content
  * set of functional direction buttons that move the player around a 2D matrix array of rooms
  * each room is an object with properties that can be edited on the fly
  * Created a light switch that turns on the light in another room
    * The light switch updates the text in the current room, the target room, and disables the button
  * Player is an object with slots and value that can be edited
  * Implemented several collectibles
    * Sword, shield, and armour
    * Sword pickup that can only be found if the light is switched on
    * Collectibles can be equipped in the player menu
      * When equipping an item it takes it from the inventory so it can't be double equipped
      * When new item is equipped, old item is pushed back into inventory
    * Gold can be collected and updates player object's gold value
* Colour scheme can be changed in the settings menu

## Elements

### Splash Screen

Due to time constraints, I was unable to fix the formatting issue on the start page. I was only aware of this error in the last few hours before submission and was unable to trace the cause.

I wanted a large image on the front page. I have released a project previously using a very similar style and received really positive feedback. You can see the previous project [here](https://redgod.itch.io/cewri).

The third-party licence information will either be on the splash screen itself or use a modal to display the information. This will need to be trial and error as I'm not experienced enough wth layout to make that decision beforehand.


Start Game
Initial Idea 
Change HTML of the "content" box to the standard HTML of the main game mode. On trying this I found that I was unable to manage this as it required completely reformatting the page in a way that was for more complicated than necessary. 

The start page needed to display the license information and I wanted it to be obvious it was set in the MB universe. Currently the only available logo to do this is the "Compatible with..." logo. As the project isn't strictly "conmpoapitble" with MB, I reached out to the creator of the game who advised that this is the only logo available the moment but that they might look into new logos in the future to reflect products such as this. 

To refelct the style of MB, I wanted to minimise the colours used on the front page, opting for black and white with a strong accent colour. I decided to only use the accent colour on the most important elements: the title and the start button. 

This is a scheme I've used on another project of my own previously and received some great feedback for. 

Include link to image in docs ***

The image I used on the start screen is Saturn Eating His Son. It's available for free under the Creative Commons license and can be found [here](https://commons.wikimedia.org/wiki/File:Francisco_de_Goya,_Saturno_devorando_a_su_hijo_(1819-1823).jpg)

BASIC NAVIGATION
Started by generating the buttons when moving rooms. Too complex/double handing. 

A couple of reasons. When it's formatted properly, generating the buttons on the fly would mean the directions would be in different positions each time the page changes. I think the UX is better this way because you always know where each button is going to be

Like say one page has east and west buttons, you go west, the next page might have north, south and east buttons. Now, the east button is in a different position to the last page.

DISABLING BUTTONS
changed it to fixed buttons that disable if they lead to a room that doesn't exist.
I used the following tutorials to help identify whether or not specific array indices exist and then added those as criteria for whether or not buttons are disabled.
<https://stackoverflow.com/questions/55740746/how-to-find-index-of-empty-object-in-array-of-object#:~:text=You%20can%20use%20Object.,Object%20for%20check%20empty%20object.>
<https://www.freecodecamp.org/news/check-if-an-object-is-empty-in-javascript/>

Alert When Leaving Page

This was simple to implement. I followed the information here - <https://www.w3schools.com/tags/ev_onbeforeunload.asp#:~:text=The%20onbeforeunload%20event%20fires%20when>,is%20different%20in%20different%20browsers.>


Error
Once I implemented the Alert I came up against the following error in my last milestone project. I remembered that after hours of trying to find the answer and trawling through YouTube videos and forum posts that were vastly outside my skill level, I came across the following line of code that just fixed the issue in one step. 
Python Socket.Error: [Errno 98] Address Already In Use
kill -9 $(ps -A | grep python | awk '{print $1}')

Using Static Objects
The main benefit of using the 2D array matrix instead of each button having its own code to change the HTML of the content box is that it allows rooms to be edited far easier. 
In my basic example, clicking the button for the light switch in room 8, changed the description of room 5 when you return.

Formatting


Before moving on and working out what to do with the inventory I decided to do some basic formatting. 

Bootstrap issue
After 3 hours of trying to format my code using bootstrap, I realised that the Code Institute Github template only links to Bootstrp 3.3.7. 

Installed Bootstrap via the NPM using the following command -
npm i bootstrap@5.3.2


Themes

I copied in the theme information from a learning project I created before starting the course. Mork Borg has a very strong visual style with several vibrant colour schemes. I thought it was important to see them represented. 
***link or upload here

Buttons
Half way through the project I changed the styling of the disabled buttons from red to 0.5 opacity. This allowed me to match the styling of the direction buttons to the choice buttons without a clashing colour (red) ruining the palette. The only other option was using colours within tach theme's palette to reflect that they were disabled but this meant that there was no clear distinction as to which were disabled and which were active. 

I also changed the buttons toward the end as being able to see through them to the background colours didn't look right. 

Equip items 
Followed the following tutorial to populate the drop down box with an array.

- <https://www.youtube.com/shorts/ZMZ4Mne1RdU>


improve rooms by losing the 2D array. Instead each room object would have north south east and west keys. The dfirection buttons would then lead to the array reference of the value in each of those keys. This would cut down on the number of empty rooms/objects in the roomMatrix. This would require the "map" to be drawn or otherwise planned externally to the script. 