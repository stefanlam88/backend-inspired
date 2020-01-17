"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/local";
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.UserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
    createdDate: { type: String, required: true },
    modifiedDate: { type: String, required: true }
});
var User = mongoose.model("User", exports.UserSchema);
exports.default = User;
