/* globals module require */

const express = require("express");
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.home;

    let router = new Router();

    router
        .get("/", (req, res) => {
            res.redirect("/home");
        })
        .get("/home", controller.home);

    app.use("/", router);

    return router;
};