/**
 * Created by korolev on 07.07.2017.
 */

import requestp from "request-promise-native";
import * as _ from "lodash";
import config from "../config";
import url from 'url';
import SocketIoClient from "socket.io-client";

const apiGatewayUrl = url.format(config.api.events);

const REFRESH_INTERVAL = 60000;
const DELIVERIES_COUNT = 100;

const EV_CLIENT_CONNECT = "events/client/connect";
const EV_CLIENT_UPDATE = "events/client/update";
const EV_INIT = "events/init";
const EV_UPDATE = "events/update";

export default class EventsController {
  socket = null;
  token = null;
  fetchTimeout = null;
  isFetching = false;
  roomName = null;
  namespace = null;
  userId = null;

  /*fetchEvents = async () => {
    try {
      this.emit("dashboard/get-list");

      const deliveries = await requestp({
        baseUrl: apiGatewayUrl,
        url: `/partners/v2/deliveries?offset=0&limit=${DELIVERIES_COUNT}&sortField=Create_Time&sortOrder=-1`,
        auth: {
          bearer: this.token
        },
        json: true
      });

      this.processEvents(deliveries);
    } catch (e) {
      console.error(e);
    }
  };
  continuouslyFetchEvents = () => {
    this.fetchTimeout = setTimeout(() => {
      this.fetchEvents()
        .then(this.continuouslyFetchEvents);
    }, REFRESH_INTERVAL);
  };

  processEvents = (events) => {
    this.emit("events/update", events);
  };

  startGettingList = () => {
    try {
      this.fetchEvents()
        .then(() => {
          this.continuouslyFetchEvents();
        });
    } catch (e) {
      console.error(e);
    }
  };*/

  constructor(namespace, socket) {
    this.namespace = namespace;
    this.socket = socket;

    this.externalSocket = SocketIoClient(url.format(config.api.events));

    this.socket.on(EV_CLIENT_CONNECT, this.init);
    this.socket.on("disconnect", this.stopFetching);

    this.externalSocket.on("connect", () => console.log("++> External socket connected"));
    this.externalSocket.on("events", this.updateStream);
    this.externalSocket.on("disconnect", this.stopFetching);
  }

  init = () => {
    this.socket.join(this.getRoomName());
  };

  updateStream = (event) => {
    console.log(">>> stream updating with event");
    this.emit(EV_CLIENT_UPDATE, event);
  };

  getClientsInRoom = () => new Promise((res) => {
    this.namespace
      .in(this.getRoomName())
      .clients((error, clients) => {
        if (error) {
          throw error;
        }

        return res(clients);
      });
  });

  stopFetching = async () => {
    const clients = await this.getClientsInRoom();

    if (!clients.length) {
      clearTimeout(this.fetchTimeout);
      this.fetchTimeout = null;
      this.socket.disconnect();
    }
  };

  emit = (...args) => {
    this.namespace.to(this.getRoomName()).emit(...args);
  };

  getRoomName = () => {
    if (!this.roomName) {
      this.roomName = `room-aplay`;
    }

    return this.roomName;
  };
}
