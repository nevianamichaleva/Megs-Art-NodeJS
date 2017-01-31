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
    frame: { type: Boolean },
    canvas: { type: String },
    paint: { type: String },
    titleImage: { type: String },
    image: { type: String },
    price: { type: Number }
});

mongoose.model("Art", ArtSchema);
let ArtModel = mongoose.model("Art");
module.exports = ArtModel;