const express = require('express');
const httpProxy = require("http-proxy");
const http = require("http");
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

const server = new http.Server(app);

const targetUrl = "http://localhost:3010";

const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  changeOrigin: true,
  ws: true,
  xfwd: true
});

app.use("/ws", function (req, res) {
  proxy.web(req, res, {target: `${targetUrl}/ws`});
});

server.on("upgrade", (req, socket, head) => {
  proxy.ws(req, socket, head);
});

proxy.on("error", (error, req, res) => {
  console.error("proxy error", error);
});

app.use(express.static(sourceDir));

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
