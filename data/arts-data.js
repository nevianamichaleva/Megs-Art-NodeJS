/* globals require module Promise*/
"use strict";

const fs = require("fs");

module.exports = function(models) {
    let { Art } = models;
    return {
        createArts(data) {
            const art = new Art({
                title: data.title,
                description: data.description,
                size: data.size,
                canvas: data.canvas,
                paint: data.paint,
                price: data.price,
                titleImage: data.titleImage,
                image: data.image
            });
            return new Promise((resolve, reject) => {
                art.save(err => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(art);
                });
            });
        }
    };
}