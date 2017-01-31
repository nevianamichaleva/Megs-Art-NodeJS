/* globals require module */
"use strict";

const constants = require("../../config/constants");

module.exports = {
    validateRegister(req) {
        req.checkBody('name', constants.emptyNameMessage).notEmpty();
        req.checkBody('username', constants.emptyUsernameMessage).notEmpty();
        req.checkBody('email', constants.emptyEmailMessage).notEmpty();
        req.checkBody('email', constants.wrongEmailMessage).isEmail();
        req.checkBody('password', constants.emptyPasswordMessage).notEmpty();
        req.checkBody('confirm', constants.emptyConfirmMessage).notEmpty();

        var errors = req.validationErrors();

        if (req.body.username && !this.checkUsername(req.body.username)) {
            var tmpError = {
                param: "username",
                msg: constants.wrongUsernameMessage,
                value: ""
            };
            if (errors) {
                errors.push(tmpError);
            } else {
                errors = [tmpError];
            }
        }
        return errors;
    },
    checkUsername(username) {
        return username.length >= constants.minUsernameLength &&
            username.length <= constants.maxUsernameLength;
    }
};