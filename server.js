const express = require("express");
const cors = require('cors');
bodyParser = require('body-parser');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}
app.use(cors());

//Add routes, both API and view
app.use(routes);
  
//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks");

//Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


//saved from client package json
// "browserslist": {
  //   "production": [
  //     ">0.2%",
  //     "not dead",
  //     "not op_mini all"
  //   ],
  //   "development": [
  //     "last 1 chrome version",
  //     "last 1 firefox version",
  //     "last 1 safari version"
  //   ]
  // }