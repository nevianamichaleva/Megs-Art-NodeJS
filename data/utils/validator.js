/* globals require module */
"use strict";

const constants = require("../../config/constants");

module.exports = {
    checkForUser(user) {
        if (!user) {
            return constants.wrongUserMessage;
        } else {
            return null;
        }
    },
    validateUser(userData) {
        let isValidUsername = userData.username.length >= constants.minUsernameLength &&
            userData.username.length <= constants.maxUsernameLength;

        if (!isValidUsername) {
            return constants.wrongUsernameMessage;
        } else {
            return null;
        }
    }
};