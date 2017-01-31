/* globals module require */
"user strict";
var fs = require("fs");
//const validator = require("./utils/validator");

module.exports = function(data) {
    return {
        name: "arts",
        getBlankArtsSettings(req, res) {
            res.render("add_arts");
        },
        createArts(req, res) {
            let art = {
                title: req.body.title,
                description: req.body.description,
                size: req.body.size,
                canvas: req.body.canvas,
                paint: req.body.paint,
                price: req.body.price,
                titleImage: req.files['upl'],
                image: req.files['image']
            };
            //console.log(req.files);
            data.createArts(art)
                .then(() => {
                    return res.redirect("/home");
                });
        }
    }
};