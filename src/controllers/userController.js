"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./../user"));
var uuidv4 = require('uuid/v4');
exports.allUsers = function (req, res) {
    var users = user_1.default.find(function (err, users) {
        if (err) {
            res.send({ status: false, error: err });
        }
        else {
            res.send({ status: true, data: users, message: "Data Retrieved successfully" });
        }
    });
};
exports.getUser = function (req, res) {
    var user = user_1.default.findById(req.params.id, function (err, user) {
        if (err) {
            res.send({ status: false, error: err, data: {} });
        }
        else {
            res.send({ status: true, data: user, message: "Data Retrieved successfully" });
        }
    });
};
exports.deleteUser = function (req, res) {
    var user = user_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ status: true, message: "Successfully Deleted User" });
        }
    });
};
exports.updateUser = function (req, res) {
    var user = req.body;
    user.modifiedDate = new Date().getTime();
    var book = user_1.default.findByIdAndUpdate(req.params.id, user, function (err, user) {
        if (err) {
            res.send({ status: false, error: err });
        }
        else {
            res.send({ status: true, data: user, message: "Successfully Updated User" });
        }
    });
};
exports.addUser = function (req, res) {
    var user = new user_1.default(req.body);
    user.userId = uuidv4();
    user.modifiedDate = new Date().getTime();
    user.createdDate = new Date().getTime();
    user.save(function (err) {
        if (err) {
            res.send({ status: false, error: err });
        }
        else {
            res.send({ status: true, data: user, message: "Successfully Created User" });
        }
    });
};
