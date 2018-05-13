const express = require('express');
const httpProxy = require("http-proxy");
const http = require("http");
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

const backendUrl = "http://localhost:3010";

const proxy = httpProxy.createProxyServer({
  target: backendUrl,
  changeOrigin: true,
  ws: true,
  xfwd: true
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/ws", function (req, res) {
  proxy.web(req, res, {target: `${backendUrl}/ws`});
});

app.use(express.static('src/assets'));
app.use(express.static(sourceDir));

const server = new http.Server(app);

server.on("upgrade", (req, socket, head) => {
  proxy.ws(req, socket, head);
});

proxy.on("error", (error, req, res) => {
  console.error("proxy error", error);
});

if (portNumber) {
  server.listen(portNumber, (err) => {
    if (err) {
      console.error(err);
    }
    console.info("----\n==> 🌎  %s is running, talking to API server on %s.", "APlayVR", portNumber);
    console.info("==> 💻  Open http://%s:%s in a browser to view the app.", "localhost", portNumber);
  });
} else {
  console.error("==>     ERROR: No PORT environment variable has been specified");
}
