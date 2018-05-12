const express    = require('express');
const app        = express();
const portNumber = 3000;
const sourceDir  = 'dist';

if (process.env.PONY == 1) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.static('src/assets'));

  app.listen(8081, () => {
    console.log(`Express web server started: http://localhost:${8081}`);
    console.log(`Serving content from /src/assets/`);
  });
} else {
  app.use(express.static(sourceDir));

  app.listen(portNumber, () => {
    console.log(`Express web server started: http://localhost:${portNumber}`);
    console.log(`Serving content from /${sourceDir}/`);
  });
}
