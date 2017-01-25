/* globals require module String */
"use strict";

const mongoose = require("mongoose");

const constants = require("../config/constants");

let ArtSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: constants.minArtnameLength,
        maxlength: constants.maxArtnameLength
    },
    description: String,
    size: {
        type: String,
        required: true
    },
    frame: Boolean,
    canvas: String,
    paint: String,
    titleImage: String,
    image: String,
    price: Number
});

mongoose.model("Art", artSchema);
let ArtModel = mongoose.model("Art");
module.exports = ArtModel;