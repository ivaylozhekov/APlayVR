import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import http from "http";
import bearerToken from "express-bearer-token";

import config from "./config";
import socketConnector from "./config/socket-connectors";
// #1 Bootstrap routes
import routes from "./config/routes";

const app = express();

const server = new http.Server(app);

const RedisStore = require("connect-redis")(session);

app.set("trust proxy", 1);

app.use(session({
  secret: "aplay-backend",
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000},
  // store: new RedisStore(config.db.redis) // Comment to fallback to MemoryStore
}));
app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/", routes);

listen();

function listen() {
  if (config.port) {
    const runnable = app.listen(config.port, config.host, (err) => {
      if (err) {
        console.error(err);
      }
      console.info("----\n==> 🌎  BACKEND is running on port %s", config.port);
      console.info("==> 💻  Send requests to http://%s:%s", config.host, config.port);
    });

    try {
      socketConnector(server, runnable);
    } catch (e) {
      console.error("==>    Soket.IO ERROR: ", e);
    }
  } else {
    console.error("==>     ERROR: No PORT environment variable has been specified");
  }

}