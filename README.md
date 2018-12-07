Realtime Angular Application
===

### Overview

The goal of this assignment to to create a simple Angular application which updates a sortable list of items in real-time based on updates from a websocket. You are free to use any resources you find online but if you copy any code (even if it's modified), please add a comment with the source.

### Requirements

The application need only target Chrome, Firefox, or Safari and does not need to worry about backwards compatibility; if it runs in the latest version of your test browser it'll be sufficient. While you are free to use Angular 2.0, since we use 1.x in production, we've only provided boilerplate for a simple Angular 1.x app.

### Functionality

The application should create a table with 100 rows, with IDs from 0... 99. Each row should have three columns -- the ID, a numerical value, and a name. You should initialize the numerical value to the ID for that row and may choose any initial names that you like. The table should be sorted in descending order by the value in that row. You should feel free to use any scheme you'd like to organize files, etc but note that minifying the app and other steps to productionize are not within the scope of this assignment. You should feel free to polish the development experience or build pipeline if you wish but accomplishing the listed milestones is more important.

### Getting set up

You should only need to install the modules in the `package.json` file included via `npm install` to get started. You can run the server simply via `node server.js` and an example client is also provided which may be run in a similar fashion.

### Milestones

1. Application shows a static list with all items
2. Application receives a continuous stream of updates over the websocket and can update the records in place and display them
3. Application is performant when `NUM_ITEMS = 1000` and `MESSAGES_PER_SECOND = 1000` (you'll want to tweak the app to have 1000 rows as well)

### Dominic Scotto's Notes

To start the project run `npm install` and `npm run build` to install necessary packages and build the production version of the application. You can run the server via `npm run local`, this will spin up `server.js` which starts the websocket feed of people and the server for the application at http://localhost:3000/ (localhost:3000 should pop up automatically).

To test the application for one thousand records at one thousand records a second, you can run the server via `npm run prod_local_1000`. This will start a production version of React instead of a development version. The development version of react is not fast enough to handle the load of one thousand records a second, only production is.

### Enjoy!