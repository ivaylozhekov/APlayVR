import "babel-polyfill";
import assign from "lodash/assign";

const JSON_CONFIG = {
  "api": {
    "events": {
      "protocol": "http",
      "hostname": "192.168.112.151",
      "port": "3000",
      "pathname": ""
    }
  },
  "db": {
    "redis": {
      "host": "aplay-redis.2l2cjw.ng.0001.euc1.cache.amazonaws.com",
      "port": 6379
    }
  }
}

const ENV = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || "development"];

const CONFIG = assign({
  host: process.env.HOST || "localhost",
  port: process.env.PORT
}, ENV, JSON_CONFIG);

export default CONFIG;
