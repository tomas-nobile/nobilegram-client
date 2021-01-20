"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@apollo/client");

var httpLink = (0, _client.createHttpLink)({
  uri: 'http://localhost:4000/'
});
var client = new _client.ApolloClient({
  connectToDevTools: true,
  cache: new _client.InMemoryCache(),
  link: httpLink
});
var _default = client;
exports["default"] = _default;