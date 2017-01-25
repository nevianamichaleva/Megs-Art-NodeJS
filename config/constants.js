/* globals module */

let connectionStrings = {
    production: process.env.CONNECTION_STRING,
    development: "mongodb://localhost/arts"
};

module.exports = {
    environment: process.env.NODE_ENV || "development",
    connectionString: connectionStrings[process.env.NODE_ENV || "development"],
    port: process.env.PORT || 3001,
    minArtnameLength: 2,
    maxArtnameLength: 50,
    minUsernameLength: 6,
    maxUsernameLength: 50,
    wrongUserMessage: "Моля влезте в профила си за да извършите тази дейност",
    wrongProductNameMessage: "Моля въведете Име на продукт между 2 и 100 символа",
    wrongUsernameMessage: "Моля въведете Потребителско име между 6 и 50 символа",
    wrongEmailMessage: "Моля въведете валиден Email",
    emptyUsernameMessage: "Моля въведете Потребителско име",
    emptyEmailMessage: "Моля въведете Email",
    emptyPasswordMessage: "Моля въведете парола",
    emptyConfirmMessage: "Моля потвърдете паролата"
};