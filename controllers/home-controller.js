/* globals module */

module.exports = function(data) {
    return {
        name: "home",
        home(req, res) {
            return data.getAllArts()
                .then(arts => {
                    res.render("home", {
                        model: arts
                    })
                })
        }
    }
};