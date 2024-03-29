/* globals require module String */
"use strict";

const mongoose = require("mongoose"),
    bcrypt = require("bcrypt-nodejs");

const constants = require("../config/constants");

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: constants.minUsernameLength,
        maxlength: constants.maxUsernameLength
    },
    name: { type: String },
    role: { type: String },
    email: {
        type: String,
        required: true
    },
    password: { type: String }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


mongoose.model("User", userSchema);
let UserModel = mongoose.model("User");
module.exports = UserModel;