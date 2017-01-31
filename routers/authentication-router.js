/* globals module require */
"use strict";

const express = require("express"),
    expressValidator = require("express-validator"),
    passport = require("passport");

let Router = express.Router;

module.exports = function({ app, controllers }) {
    let controller = controllers.authentication;
    let router = new Router();

    app.use(expressValidator());

    router
        .get("/login", controller.getLogin)
        .get("/register", controller.getRegister)
        .post("/login",
            passport.authenticate('local', {
                failureRedirect: '/login',
                passReqToCallback: true,
                failureFlash: true
            }),
            controller.login)
        .post("/register", controller.register)
        .get("/logout", controller.logout);

    app.use(router);

    return router;
};