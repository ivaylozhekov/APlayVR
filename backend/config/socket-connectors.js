import SocketIo from "socket.io";
import SocketIoRedisAdapter from "socket.io-redis";

import config from "./";

import EventsController from "../controllers/events";

function eventsSocketConnector(io) {
  const events = io.of("/events");

  events
    .on("connect", (socket) => {
      const eventsController = new EventsController(events, socket);
    });
}

function socketConnector(server, runnable) {
  const io = new SocketIo(server);
  io.path("/ws");
  io.listen(runnable);

  /*io.adapter(SocketIoRedisAdapter({
    host: config.db.redis.host,
    port: config.db.redis.port
  }));*/

  eventsSocketConnector(io);
}

export default socketConnector;

