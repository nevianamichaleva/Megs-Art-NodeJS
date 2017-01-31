/* globals module require */

const express = require("express"),
    multer = require('multer');
let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.arts;

    let router = new Router();

    router
        .get("/create", controller.getBlankArtsSettings)
        .post("/create", multer({ dest: './uploads/' }).fields([{ name: 'upl' }, { name: 'image' }]), controller.createArts)

    app.use("/arts", router);

    return router;
};