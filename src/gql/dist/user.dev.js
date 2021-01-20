"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGIN = exports.REGISTER = void 0;

var _client = require("@apollo/client");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmutation login($input: LoginInput){\n  login(input: $input){\n    token\n  }\n  \n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation register($input:UserInput){\n    register(input:$input){\n      id\n      name\n      username\n      email\n      password\n    }\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var REGISTER = (0, _client.gql)(_templateObject());
exports.REGISTER = REGISTER;
var LOGIN = (0, _client.gql)(_templateObject2());
exports.LOGIN = LOGIN;