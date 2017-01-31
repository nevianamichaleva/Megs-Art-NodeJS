/* globals module require */
"use strict";

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.user;

    let router = new Router();

    router
        .get("/profile", controller.getProfile)
        .post("/profile", controller.changeProfile);

    app.use("/user", router);

    return router;
};