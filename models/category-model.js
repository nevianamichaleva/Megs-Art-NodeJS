/* globals require module String */
"use strict";

const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

mongoose.model("Category", categorySchema);
let CategorySchema = mongoose.model("Category");
module.exports = CategorySchema;