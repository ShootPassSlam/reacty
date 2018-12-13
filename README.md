To start the project run `npm install` and `npm run build` to install necessary packages and build the production version of the application. You can run the server via `npm run local`, this will spin up `server.js` which starts the websocket feed of people and the server for the application at http://localhost:3000/ (localhost:3000 should pop up automatically).

To test the application for one thousand records at one thousand records a second, you can run the server via `npm run prod_local_1000`. This will start a production version of React instead of a development version. The development version of react is not fast enough to handle the load of one thousand records a second, only production is.

### Enjoy!