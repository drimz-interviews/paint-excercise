This Excercise is building a 'paint' like multiplayer application in React.

The application should have a canvas that is 500px by 500px.
The canvas should be a square with a black border.

Steps:
* Add a button that allows the user to change the color of the brush. Create as many colors as you like.
  * **Test** that the you can now paint with the new color.
* Add a simple server that holds the state of the canvas.
  The client should connect to the server (preffered with websockets) and receive the state of the canvas.
  The server should update all connected clients of the drawing of all members connected. 
  * This will allow all connected users to see the drawing of everyone :) 
    * **Test** open two clients and paint on the canvas. The other client should see the changes.

Bonuses
* Most valued - Time Machine
  * Add a slider that allows the user to go back in time and see the canvas as it was at that time for all users connected.
  * **Test** that the slider works.
* Quick wins
  * Add a button that allows the user to change the size of the brush.
  * Add a button that allows the user to save the canvas as an image.
