const express = require('express');
const app = express();
const portNumber = 3000;

const sourceDir = 'dist';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('src/assets'));
app.use(express.static(sourceDir));

if (portNumber) {
  app.listen(portNumber, (err) => {
    if (err) {
      console.error(err);
    }
    console.info("----\n==> 🌎  %s is running, talking to API server on %s.", "APlayVR", portNumber);
    console.info("==> 💻  Open http://%s:%s in a browser to view the app.", "localhost", portNumber);
  });
} else {
  console.error("==>     ERROR: No PORT environment variable has been specified");
}